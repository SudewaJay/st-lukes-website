import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Medical Diagnostic Services in Ja-Ela",
  description:
    "Blood tests, ECG, home sample collection and corporate health screening from St. Luke's Medical Laboratory, Ja-Ela. Transparent LKR pricing. 24-hour reports.",
  alternates: { canonical: "/services" },
};

const imagery: Record<string, { src: string; contain: boolean }> = {
  "blood-tests": { src: "/equipment/medonic-hematology.jpg", contain: true },
  "ecg-cardiac-tests": { src: "/equipment/clia-analyzer.jpg", contain: true },
  "home-blood-collection": { src: "/hero-photo.jpeg", contain: false },
  "corporate-health-screening": {
    src: "/equipment/biosystems-a15.jpg",
    contain: true,
  },
};

export default function ServicesIndex() {
  return (
    <PageShell>
      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Our services</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            Medical diagnostic services in Ja-Ela
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            From routine blood tests to cardiac diagnostics and workplace health
            programmes. Every service is priced in LKR, and most reports come
            back within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content">
          {/* Alternating editorial rows rather than four identical cards —
              each service gets room for its own image and its own weight. */}
          <ul className="space-y-14 md:space-y-20">
            {services.map((svc, i) => {
              const img = imagery[svc.slug];
              return (
                <Reveal as="li" key={svc.slug}>
                  <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                    <div
                      className={i % 2 === 1 ? "md:order-2" : undefined}
                    >
                      <p className="type-numeric text-sm font-semibold text-brand-primary-dark">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="type-h2 mt-2 text-text-primary">
                        {svc.name}
                      </h2>
                      <p className="mt-4 max-w-lg leading-relaxed text-text-secondary">
                        {svc.shortDesc}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                          href={`/services/${svc.slug}`}
                          className="btn btn-primary !text-sm"
                        >
                          About this service
                          <ArrowRight
                            size={15}
                            className="btn-arrow"
                            aria-hidden="true"
                          />
                        </Link>
                        <Link
                          href="/price-list"
                          className="btn btn-secondary !text-sm"
                        >
                          See prices
                        </Link>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border",
                        // Equipment shots carry their own white plate, so the
                        // frame matches it rather than boxing it in grey.
                        img.contain ? "bg-white" : "media-frame",
                        i % 2 === 1 && "md:order-1",
                      )}
                    >
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 46vw, 100vw"
                        className={
                          img.contain
                            ? "object-contain p-6"
                            : "object-cover"
                        }
                      />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">
              Looking for one specific test?
            </h2>
            <p className="mt-3 text-text-secondary">
              Search the full price list, or call and we will find it for you.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/price-list" className="btn btn-primary">
              Search test prices
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
