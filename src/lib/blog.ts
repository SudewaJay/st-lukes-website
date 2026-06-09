import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO YYYY-MM-DD
  author: string;
  image: string;
  draft?: boolean;
};

export type Post = PostMeta & { content: string };

const dateValue = (s: string) => new Date(s).getTime();

async function readAll(): Promise<Post[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(BLOG_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      // Skip non-post files: README, anything starting with _ or .
      .filter((f) => !/^readme/i.test(f) && !/^[._]/.test(f))
      .map(async (file) => {
        const slug = file.replace(/\.mdx?$/, "");
        const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf8");
        const { data, content } = matter(raw);
        return {
          slug,
          title: (data.title as string) ?? slug,
          excerpt: (data.excerpt as string) ?? "",
          category: (data.category as string) ?? "Health Tips",
          date: (data.date as string) ?? new Date().toISOString().slice(0, 10),
          author: (data.author as string) ?? "St. Luke's Team",
          image: (data.image as string) ?? "",
          draft: (data.draft as boolean) ?? false,
          content,
        } satisfies Post;
      })
  );

  return posts
    .filter((p) => !p.draft || process.env.NODE_ENV !== "production")
    .sort((a, b) => dateValue(b.date) - dateValue(a.date));
}

/** All posts, newest first. Excludes drafts in production. */
export async function getAllPosts(): Promise<PostMeta[]> {
  const all = await readAll();
  return all.map(({ content: _content, ...meta }) => meta);
}

/** A single post by slug, with full MDX content. Null if not found. */
export async function getPost(slug: string): Promise<Post | null> {
  const all = await readAll();
  return all.find((p) => p.slug === slug) ?? null;
}

/** All slugs — used by generateStaticParams. */
export async function getAllSlugs(): Promise<string[]> {
  const all = await readAll();
  return all.map((p) => p.slug);
}

/**
 * Force a Cloudinary URL to be exactly 1200×630 by injecting transform
 * parameters between `/upload/` and the version segment. Returns non-Cloudinary
 * URLs unchanged. Required because Facebook/WhatsApp/LinkedIn social cards
 * expect 1200×630 (the OG image standard).
 */
export function ogImageUrl(url: string): string {
  if (!url) return url;
  if (!url.includes("res.cloudinary.com")) return url;
  // Don't double-transform if the URL already has a transform segment
  if (/\/upload\/[a-z]_[^/]+\//.test(url)) return url;
  return url.replace(
    "/upload/",
    "/upload/c_fill,g_auto,w_1200,h_630,q_auto,f_jpg/"
  );
}

/** Format an ISO date as "Feb 15, 2026". */
export function formatPostDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
