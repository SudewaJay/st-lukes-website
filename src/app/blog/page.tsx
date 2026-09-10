import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Health Hub — Lab Test Guides & Wellness Tips",
  description:
    "Health tips and lab-test explainers from St. Luke's Medical Laboratory, Ja-Ela.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  const [lead, ...rest] = posts;

  return (
    <PageShell>
      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Health hub</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            Health tips and lab-test guides
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            Plain-English explainers on blood tests, ECG and full-body checkups,
            written for patients in Ja-Ela and the towns around it.
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="section-padding bg-surface">
          <div className="container-content">
            <p className="text-text-muted">
              No articles published yet. Check back soon.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured article */}
          <section className="border-b border-border bg-surface py-12 md:py-16">
            <div className="container-content">
              <Link
                href={`/blog/${lead.slug}`}
                className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
              >
                <div className="media-frame relative aspect-[16/10] overflow-hidden rounded-2xl">
                  {lead.image && (
                    <Image
                      src={lead.image}
                      alt=""
                      fill
                      priority
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="eyebrow">Latest · {lead.category}</p>
                  <h2 className="type-h2 mt-3 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                    {lead.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    {lead.excerpt}
                  </p>
                  <p className="mt-5 flex items-center gap-3 text-xs text-text-muted">
                    <time dateTime={lead.date}>{formatPostDate(lead.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{lead.author}</span>
                  </p>
                  <p className="link-cta mt-5 text-sm">
                    Read this article
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="section-padding bg-surface">
            <div className="container-content">
              <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">
                All articles
              </h2>
              <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <Reveal as="li" key={post.slug} delay={(i % 3) * 0.05}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="media-frame relative aspect-[16/10] overflow-hidden rounded-xl">
                        {post.image && (
                          <Image
                            src={post.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <p className="eyebrow mt-4">{post.category}</p>
                      <h3 className="type-h4 mt-2 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 text-xs text-text-muted">
                        <time dateTime={post.date}>
                          {formatPostDate(post.date)}
                        </time>
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      <section className="border-t border-border bg-surface-soft">
        <div className="container-content flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">Need the test itself?</h2>
            <p className="mt-3 text-text-secondary">
              Every price is published in LKR. Search the list, or call and book
              a home visit.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/price-list" className="btn btn-primary">
              View test prices
              <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
            </Link>
            <a href="tel:+94711231954" className="btn btn-secondary" data-track="phone_click">
              <Phone size={16} aria-hidden="true" />
              Call 071 123 1954
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
