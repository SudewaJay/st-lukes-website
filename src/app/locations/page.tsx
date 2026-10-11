import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Home, Phone } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Medical Lab Near You — Ja-Ela, Wattala, Ragama, Negombo & More",
  description:
    "St. Luke's Medical Laboratory serves Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama, Thudella, Seeduwa, Katunayake and Negombo — walk-in tests at our Ja-Ela lab plus home sample collection across the Negombo Road corridor.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  const walkIn = locations.filter((l) => !l.isServiceArea);
  const serviceAreas = locations.filter((l) => l.isServiceArea);

  return (
    <PageShell>
      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Our network</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            Areas we serve across Ja-Ela and beyond
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            Our laboratory is on Old Negombo Road, Ja-Ela. From there we bring
            home sample collection along the Negombo Road corridor, up to the
            airport and Negombo. Every test is priced in LKR, and most reports
            are back within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content space-y-14">
          <div>
            <div className="mb-7 flex items-center gap-2.5">
              <Building2 size={18} className="text-brand-primary-dark" aria-hidden="true" />
              <h2 className="type-h3 text-text-primary">
                Walk-in and home visits
              </h2>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {walkIn.map((loc, i) => (
                <Reveal as="li" key={loc.slug} delay={(i % 3) * 0.05} className="flex">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="group flex w-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <h3 className="type-h3 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                      {loc.name}
                    </h3>
                    {loc.isHQ && (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-primary-dark">
                        Headquarters
                      </p>
                    )}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                      {loc.blurb}
                    </p>
                    <p className="link-cta mt-4 text-sm">
                      {loc.name} details
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </p>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <Home size={18} className="text-brand-primary-dark" aria-hidden="true" />
              <h2 className="type-h3 text-text-primary">
                Home collection service areas
              </h2>
            </div>
            <p className="mb-7 max-w-2xl text-sm text-text-secondary">
              We do not have a walk-in branch in these towns. A phlebotomist
              collects your sample at home or at work, and it is processed at
              our Ja-Ela laboratory.
            </p>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((loc, i) => (
                <Reveal as="li" key={loc.slug} delay={(i % 3) * 0.05} className="flex">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="group flex w-full flex-col rounded-2xl border border-border-brand bg-brand-primary-soft p-6 transition-colors hover:border-brand-primary-dark"
                  >
                    <h3 className="type-h3 text-text-primary transition-colors group-hover:text-brand-primary-dark">
                      {loc.name}
                    </h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-primary-dark">
                      Home visits only
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                      {loc.blurb}
                    </p>
                    <p className="link-cta mt-4 text-sm">
                      {loc.name} details
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </p>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">
              Don&apos;t see your town?
            </h2>
            <p className="mt-3 text-text-secondary">
              Call us. We may still be able to reach you for home sample
              collection.
            </p>
          </div>
          <a href="tel:+94711231954" className="btn btn-primary shrink-0" data-track="phone_click">
            <Phone size={16} aria-hidden="true" />
            Call 071 123 1954
          </a>
        </div>
      </section>
    </PageShell>
  );
}
