import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { getAllPosts, formatPostDate } from "@/lib/blog";

/**
 * Editorial teaser: one lead article at full width, the rest as a compact
 * index. Reads as a publication rather than three identical cards.
 */
export default async function Blog() {
  const posts = (await getAllPosts()).slice(0, 4);
  if (posts.length === 0) return null;

  const [lead, ...rest] = posts;

  return (
    <section className="section-padding bg-surface" id="blog">
      <div className="container-content">
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Health guides</p>
            <h2 className="type-h2 text-text-primary">
              Understanding your test results.
            </h2>
          </div>
          <Link href="/blog" className="btn btn-secondary !text-sm">
            All articles
            <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12">
          <Reveal>
            <Link href={`/blog/${lead.slug}`} className="group block">
              <div className="media-frame relative aspect-[16/9] overflow-hidden rounded-2xl">
                {lead.image && (
                  <Image
                    src={lead.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <p className="eyebrow mt-5">{lead.category}</p>
              <h3 className="type-h3 mt-2 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-text-secondary">
                {lead.excerpt}
              </p>
              <p className="mt-4 flex items-center gap-3 text-xs text-text-muted">
                <time dateTime={lead.date}>{formatPostDate(lead.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{lead.author}</span>
              </p>
            </Link>
          </Reveal>

          <ul className="divide-y divide-border border-t border-border">
            {rest.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={0.06 * (i + 1)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-4 py-5 transition-colors"
                >
                  <div className="media-frame relative aspect-square w-20 shrink-0 overflow-hidden rounded-lg sm:w-24">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="eyebrow">{post.category}</p>
                    <h3 className="type-h4 mt-1.5 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-muted">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
