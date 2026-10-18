import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Phone } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { PageShell } from "@/components/ui/PageShell";
import ReadingProgress from "@/components/ui/ReadingProgress";
import { getPost, getAllPosts, formatPostDate, ogImageUrl } from "@/lib/blog";
import { JsonLd } from "@/components/JsonLd";
import { SITE, NAP } from "@/lib/seo";
import { articleComponents } from "./mdx-components";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const post = await getPost(p.slug);
  if (!post) return {};

  return {
    // The root layout template appends the brand, so don't add it here too.
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    // Drafts only render outside production builds; keep them out of any index regardless.
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      ...(post.updated ? { modifiedTime: post.updated } : {}),
      authors: [post.author],
      ...(post.image
        ? { images: [{ url: ogImageUrl(post.image), alt: post.imageAlt ?? post.title }] }
        : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const p = await params;
  const post = await getPost(p.slug);
  if (!post) notFound();

  const wordCount = post.content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / 200)} min read`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE}/blog/${post.slug}`,
    ...(post.image ? { image: ogImageUrl(post.image) } : {}),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    // An organisation byline must not be typed as a Person.
    author:
      post.author === NAP.name
        ? { "@id": `${SITE}/#organization` }
        : { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE}/#organization` },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE}/blog/${post.slug}`,
      },
    ],
  };

  // Same category first, then anything else, so "related" means something.
  const all = await getAllPosts();
  const related = [
    ...all.filter((a) => a.slug !== post.slug && a.category === post.category),
    ...all.filter((a) => a.slug !== post.slug && a.category !== post.category),
  ].slice(0, 3);

  return (
    <PageShell>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbs} />
      <ReadingProgress />

      <article>
        <header className="border-b border-border bg-brand-primary-soft pb-12 pt-28 md:pt-32">
          <div className="container-content max-w-3xl">
            <Link
              href="/blog"
              className="group mb-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-dark"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Health hub
            </Link>

            <p className="eyebrow mb-4">{post.category}</p>
            <h1 className="type-h1 text-text-primary">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                {readingTime}
              </span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="container-content max-w-4xl -mt-0 pt-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.imageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="container-content max-w-3xl py-12 md:py-16">
          <MDXRemote
            source={post.content}
            components={articleComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />

          <aside className="mt-14 rounded-2xl border border-border bg-surface-soft p-7 md:p-8">
            <h2 className="type-h3 text-text-primary">Ready to book a test?</h2>
            <p className="mt-3 text-text-secondary">
              Walk into our Ja-Ela lab, or book a home collection. Every price
              is published in LKR.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+94711231954" className="btn btn-primary" data-track="phone_click">
                <Phone size={16} aria-hidden="true" />
                Call 071 123 1954
              </a>
              <Link href="/price-list" className="btn btn-secondary">
                View test prices
                <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface py-14">
          <div className="container-content">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">
              Read next
            </h2>
            <ul className="grid gap-x-6 gap-y-9 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="group block">
                    <div className="media-frame relative aspect-[16/10] overflow-hidden rounded-xl">
                      {r.image && (
                        <Image
                          src={r.image}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 30vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <p className="eyebrow mt-4">{r.category}</p>
                    <h3 className="type-h4 mt-2 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                      {r.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </PageShell>
  );
}
