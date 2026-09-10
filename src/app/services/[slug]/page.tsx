import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Phone, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { getService, services } from "@/lib/services";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";
import { locations } from "@/lib/locations";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const s = getService(p.slug);
  if (!s) return {};

  return {
    title: `${s.name} — St. Luke's Medical Laboratory, Ja-Ela`,
    description: s.shortDesc,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const p = await params;
  const s = getService(p.slug);
  if (!s) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": s.schemaType,
    name: s.name,
    description: s.shortDesc,
    provider: { "@id": `${SITE}/#organization` },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: s.name,
        item: `${SITE}/services/${s.slug}`,
      },
    ],
  };

  const others = services.filter((other) => other.slug !== s.slug);

  return (
    <PageShell>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs} />

      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <Link
            href="/services"
            className="group mb-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-dark"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All services
          </Link>

          <h1 className="type-h1 max-w-3xl text-text-primary">{s.name}</h1>
          <p className="mt-5 max-w-2xl type-body-large">{s.shortDesc}</p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="type-h2 text-text-primary">What this is</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">{s.what}</p>

            <h2 className="type-h2 mt-12 text-text-primary">Why it matters</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">{s.why}</p>

            <div className="mt-12 rounded-2xl border border-border-brand bg-brand-primary-soft p-6 md:p-8">
              <h2 className="type-h3 flex items-center gap-2.5 text-text-primary">
                <Clock size={20} className="text-brand-primary-dark" aria-hidden="true" />
                How to prepare
              </h2>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {s.preparation}
              </p>
            </div>

            <h2 className="type-h2 mt-12 text-text-primary">Where we do this</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Walk in at our Ja-Ela laboratory, or book a home visit in any of
              the towns we serve.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="flex min-h-11 items-center rounded-lg border border-border bg-surface px-3.5 text-sm font-medium text-text-secondary transition-colors hover:border-brand-primary-dark hover:text-brand-primary-dark"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface-soft p-6">
              <h2 className="type-h3 text-text-primary">Book this service</h2>
              <p className="mt-2 text-sm text-text-secondary">
                Call to confirm the published price and arrange a time, at the
                lab or at your home.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+94711231954"
                  className="btn btn-primary w-full !text-sm"
                  data-track="phone_click"
                >
                  <Phone size={15} aria-hidden="true" />
                  Call 071 123 1954
                </a>
                <a
                  href={`https://wa.me/94711231954?text=${encodeURIComponent(
                    `Hi, I'd like to ask about ${s.name}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full !text-sm"
                  data-track="whatsapp_click"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp us
                </a>
                <Link href="/price-list" className="btn btn-ghost w-full !text-sm">
                  View test prices
                  <ArrowRight size={14} className="btn-arrow" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <nav
              className="rounded-2xl border border-border bg-surface p-6"
              aria-label="Other services"
            >
              <h2 className="type-h4 text-text-primary">Other services</h2>
              <ul className="mt-4 divide-y divide-border">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="group flex min-h-11 items-center justify-between gap-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary-dark"
                    >
                      {other.name.replace(" in Ja-Ela", "")}
                      <ArrowRight
                        size={14}
                        className="shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
