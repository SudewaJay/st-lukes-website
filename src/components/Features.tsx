"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

const visuals: Record<string, { src: string; alt: string; cta: string; href: string }> = {
  "blood-tests": {
    src: "/equipment/medonic-hematology.jpg",
    alt: "Haematology analyzer used for blood tests at St. Luke's",
    cta: "View blood test prices",
    href: "/price-list",
  },
  "ecg-cardiac-tests": {
    src: "/equipment/clia-analyzer.jpg",
    alt: "Diagnostic analyzer supporting cardiac and specialist testing",
    cta: "Book an ECG",
    href: "/services/ecg-cardiac-tests",
  },
  "home-blood-collection": {
    src: "/hero-photo.jpeg",
    alt: "St. Luke's laboratory team supporting home sample collection",
    cta: "Request a home visit",
    href: "tel:+94711231954",
  },
  "corporate-health-screening": {
    src: "/equipment/biosystems-a15.jpg",
    alt: "Biochemistry analyzer used for workplace health screening panels",
    cta: "Plan a workplace screening",
    href: "/services/corporate-health-screening",
  },
};

export default function Features() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const visual = visuals[service.slug];

  return (
    <section className="section-padding bg-surface" id="services">
      <div className="container-content">
        <p className="eyebrow mb-3">Diagnostic Services</p>
        <h2 className="type-h2 mb-10 text-text-primary">
          Find the care you need.
        </h2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="list">
            {services.map((s, i) => (
              <li key={s.slug} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover)").matches) setActive(i);
                  }}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "w-full rounded-xl border px-4 py-3.5 text-left transition-colors min-h-11",
                    i === active
                      ? "border-brand-primary-dark bg-brand-primary-soft"
                      : "border-border bg-surface hover:border-border-strong",
                  )}
                  aria-current={i === active ? "true" : undefined}
                >
                  <span className="block font-semibold text-text-primary">
                    {s.name.replace(" in Ja-Ela", "").replace(" in Ja-Ela & Surrounds", "")}
                  </span>
                  <span className="mt-1 hidden text-sm text-text-muted lg:block line-clamp-2">
                    {s.shortDesc}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface-soft">
            <div className="relative aspect-[16/10] bg-white">
              {visual && (
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={cn(
                    "p-6",
                    service.slug === "home-blood-collection" ? "object-cover p-0" : "object-contain",
                  )}
                />
              )}
            </div>
            <div className="p-6 md:p-8">
              <h3 className="type-h3 text-text-primary">{service.name}</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">{service.what}</p>
              {visual && (
                visual.href.startsWith("tel:") ? (
                  <a href={visual.href} className="btn btn-primary mt-6">
                    {visual.cta}
                    <ArrowRight size={16} className="btn-arrow" />
                  </a>
                ) : (
                  <Link href={visual.href} className="btn btn-primary mt-6">
                    {visual.cta}
                    <ArrowRight size={16} className="btn-arrow" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
