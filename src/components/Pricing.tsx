import Link from "next/link";
import { Check, Star, ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { packages, formatLKR } from "@/lib/packages";
import { JsonLd } from "./JsonLd";
import { cn } from "@/lib/cn";

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

/**
 * A grid, not a carousel. Comparing what each package contains against what it
 * costs is the entire job of this section, and a carousel that shows one card
 * at a time makes comparison impossible. Four packages fit.
 */
export default function Pricing() {
  return (
    <section className="section-padding bg-surface-soft" id="packages">
      <div className="container-content">
        <JsonLd data={packagesSchema} />

        <Reveal className="mb-10 max-w-2xl md:mb-12">
          <p className="eyebrow mb-3">Health Checkup Packages</p>
          <h2 className="type-h2 text-text-primary">
            Bundled screens at a fixed price.
          </h2>
          <p className="mt-4 type-body-large">
            Every package is priced in LKR, includes home sample collection, and
            lists exactly which tests you get.
          </p>
        </Reveal>

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

                <h3 className="type-h3 text-text-primary">{p.name}</h3>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand-primary-dark">
                  {p.tagline}
                </p>

                <p className="type-numeric mt-5 text-3xl font-bold text-text-primary">
                  LKR {formatLKR(p.priceLKR)}
                </p>

                <p className="mt-4 hidden text-sm leading-relaxed text-text-secondary sm:block">
                  {p.description}
                </p>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted sm:mt-6">
                  {p.includes.length} tests included
                </p>
                {/* The first three, then a count. The full list and the
                    side-by-side comparison live on the packages page — nobody
                    reads four complete test lists stacked on a phone. */}
                <ul className="mt-3 hidden flex-1 space-y-2 sm:block">
                  {p.includes.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] leading-snug text-text-secondary"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-brand-primary-dark"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                  {p.includes.length > 3 && (
                    <li className="pl-6 text-[13px] text-text-muted">
                      and {p.includes.length - 3} more
                    </li>
                  )}
                </ul>

                <div className="mt-5 flex flex-col gap-2 sm:mt-7">
                  <a
                    href="tel:+94711231954"
                    className={cn(
                      "btn w-full !text-sm",
                      p.recommended ? "btn-primary" : "btn-secondary",
                    )}
                    data-track="package_book"
                    aria-label={`Book the ${p.name} by phone`}
                  >
                    <Phone size={15} aria-hidden="true" />
                    Book this package
                  </a>
                  <Link
                    href="/packages"
                    className="link-cta justify-center text-xs"
                  >
                    See what is included
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-sm text-text-muted">
          Prefer to pick tests individually?{" "}
          <Link
            href="/price-list"
            className="link-cta link-reveal"
          >
            See the full price list
            <ArrowRight size={14} className="btn-arrow" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
