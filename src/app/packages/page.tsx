import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, Phone, ArrowRight, Minus } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { packages, formatLKR } from "@/lib/packages";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Health Checkup Packages — Transparent LKR Pricing",
  description:
    "Four curated health checkup packages from St. Luke's Medical Laboratory, Ja-Ela — Full Body Health Check, Joint Pain & Fatigue Profile, Kidney Health Profile and Diabetic Kidney Profile. Transparent LKR pricing, 24-hour reports.",
  alternates: { canonical: "/packages" },
};

const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Health Checkup Packages — St. Luke's Medical Laboratory",
  itemListElement: packages.map((p) => ({
    "@type": "Offer",
    name: p.name,
    priceCurrency: "LKR",
    price: String(p.priceLKR),
    itemOffered: { "@type": "MedicalTest", name: p.includes.join(", ") },
  })),
};

/** Every test that appears in at least one package, in first-seen order. */
const allIncludedTests = Array.from(
  new Set(packages.flatMap((p) => p.includes)),
);

export default function PackagesPage() {
  return (
    <PageShell>
      <JsonLd data={packagesSchema} />

      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Health checkup packages</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            Four screens, for four different questions.
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            Each package bundles the tests people usually order together at one
            fixed LKR price. Home sample collection is included across every
            town we serve.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content">
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.06} className="flex">
                <article
                  className={cn(
                    "flex w-full flex-col rounded-2xl bg-surface p-6 transition-shadow duration-[250ms]",
                    p.recommended
                      ? "border-2 border-brand-primary-dark shadow-md"
                      : "border border-border shadow-sm hover:shadow-lg",
                  )}
                >
                  {p.recommended ? (
                    <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-brand-primary-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-text-inverse">
                      <Star size={11} fill="currentColor" aria-hidden="true" />
                      Most complete
                    </span>
                  ) : (
                    <span
                    className="mb-4 hidden h-[26px] sm:block"
                    aria-hidden="true"
                  />
                  )}

                  <h2 className="type-h3 text-text-primary">{p.name}</h2>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand-primary-dark">
                    {p.tagline}
                  </p>

                  <p className="type-numeric mt-5 text-3xl font-bold text-text-primary">
                    LKR {formatLKR(p.priceLKR)}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                    {p.description}
                  </p>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                    {p.includes.length} tests included
                  </p>

                  <a
                    href="tel:+94711231954"
                    className={cn(
                      "btn mt-6 w-full !text-sm",
                      p.recommended ? "btn-primary" : "btn-secondary",
                    )}
                    data-track="package_book"
                    aria-label={`Book the ${p.name} by phone`}
                  >
                    <Phone size={15} aria-hidden="true" />
                    Book this package
                  </a>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What is in each — the comparison the cards cannot make on their own. */}
      <section className="section-padding bg-surface-soft">
        <div className="container-content">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-3">Side by side</p>
            <h2 className="type-h2 text-text-primary">What is in each package.</h2>
            <p className="mt-4 type-body-large">
              Every test in every package. Scroll sideways on a phone.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="sr-only">
                Tests included in each St. Luke&apos;s health checkup package
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="px-5 py-4 text-left font-semibold text-text-primary">
                    Test
                  </th>
                  {packages.map((p) => (
                    <th
                      key={p.slug}
                      scope="col"
                      className="px-4 py-4 text-center align-bottom font-semibold text-text-primary"
                    >
                      <span className="block">{p.name}</span>
                      <span className="type-numeric mt-1 block text-xs font-semibold text-brand-primary-dark">
                        LKR {formatLKR(p.priceLKR)}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allIncludedTests.map((test) => (
                  <tr key={test} className="border-b border-border last:border-0">
                    <th
                      scope="row"
                      className="px-5 py-3 text-left font-normal text-text-secondary"
                    >
                      {test}
                    </th>
                    {packages.map((p) => {
                      const has = p.includes.includes(test);
                      return (
                        <td key={p.slug} className="px-4 py-3 text-center">
                          {has ? (
                            <>
                              <Check
                                size={16}
                                className="mx-auto text-brand-primary-dark"
                                aria-hidden="true"
                              />
                              <span className="sr-only">
                                Included in {p.name}
                              </span>
                            </>
                          ) : (
                            <>
                              <Minus
                                size={14}
                                className="mx-auto text-border-strong"
                                aria-hidden="true"
                              />
                              <span className="sr-only">
                                Not included in {p.name}
                              </span>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">
              Need a panel your doctor specified?
            </h2>
            <p className="mt-3 text-text-secondary">
              Pick tests individually from the full price list, or call and we
              will put the panel together for you.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/price-list" className="btn btn-primary">
              Browse all prices
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
