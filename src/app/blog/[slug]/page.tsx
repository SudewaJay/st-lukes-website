import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { getAllSlugs, getPost, getAllPosts, formatPostDate, ogImageUrl } from "@/lib/blog";
import { SITE } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const ogImage = post.image
    ? [
        {
          url: ogImageUrl(post.image),
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg",
        },
      ]
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ogImage,
    },
  };
}

// MDX component overrides — keeps Tailwind typography consistent.
const components = {
  h1: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-slate-900 mt-10 mb-4" {...p} />
  ),
  h2: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-3" {...p} />
  ),
  h3: (p: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-2" {...p} />
  ),
  p: (p: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-700 leading-relaxed mb-4" {...p} />
  ),
  ul: (p: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-slate-700" {...p} />
  ),
  ol: (p: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-slate-700" {...p} />
  ),
  li: (p: React.LiHTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...p} />,
  a: (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-stLukes-600 underline hover:text-stLukes-700" {...p} />
  ),
  strong: (p: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-slate-900" {...p} />
  ),
  table: (p: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full text-sm border-collapse" {...p} />
    </div>
  ),
  thead: (p: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-100" {...p} />
  ),
  th: (p: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left px-3 py-2 font-semibold text-slate-900 border-b border-slate-200" {...p} />
  ),
  td: (p: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-3 py-2 border-b border-slate-100 align-top text-slate-700" {...p} />
  ),
  blockquote: (p: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-stLukes-500 bg-stLukes-50/40 pl-4 pr-3 py-2 italic text-slate-700 my-6"
      {...p}
    />
  ),
  code: (p: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-[0.9em]" {...p} />
  ),
};

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const all = await getAllPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image || undefined,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Health Hub", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="pt-28 pb-16">
        {/* Hero image */}
        {post.image && (
          <div className="relative w-full aspect-[21/9] max-h-[480px] bg-slate-100 mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-stLukes-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-stLukes-600">Health Hub</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{post.title}</span>
          </nav>

          <span className="inline-block text-xs font-bold uppercase tracking-wider text-stLukes-600 bg-stLukes-50 px-2.5 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            {formatPostDate(post.date)} · {post.author}
          </p>

          <div className="prose-content">
            <MDXRemote
              source={post.content}
              components={components}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          <div className="mt-12 p-6 rounded-3xl bg-stLukes-50 border border-stLukes-100">
            <h2 className="text-lg font-bold text-slate-900 mb-1">Book a test at St. Luke&apos;s</h2>
            <p className="text-sm text-slate-600 mb-4">
              See our full{" "}
              <Link href="/price-list" className="text-stLukes-600 underline">
                price list
              </Link>{" "}
              or call to schedule.
            </p>
            <a
              href="tel:+94711231954"
              className="inline-flex items-center bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm"
            >
              Call 071 123 1954
            </a>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Read next</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block rounded-2xl border border-slate-200 p-4 hover:border-stLukes-500 hover:shadow-md transition"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stLukes-600 mb-1">
                      {r.category}
                    </p>
                    <p className="font-semibold text-slate-900 text-sm leading-snug">{r.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
