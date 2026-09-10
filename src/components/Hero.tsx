"use client";

import { useRef, useState } from "react";
import { MapPin, ArrowRight, Clock, Home, FlaskConical, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { testCount } from "@/lib/priceList";
import { cn } from "@/lib/cn";

/**
 * Every claim here is drawn from project data — the towns list, the published
 * price list, the stated turnaround. Nothing is asserted that the site cannot
 * substantiate elsewhere.
 */
const trustIndicators = [
  {
    icon: Clock,
    label: "24-Hour Reports",
    detail:
      "Most reports, including routine blood tests, are ready within 24 hours and delivered digitally.",
  },
  {
    icon: Home,
    label: "Home Collection",
    detail:
      "A qualified phlebotomist visits your home or office anywhere in our service area.",
  },
  {
    icon: MapPin,
    label: `${locations.length} Towns Served`,
    detail:
      "Walk in at the Ja-Ela laboratory, plus home visits along the Negombo Road corridor.",
  },
  {
    icon: FlaskConical,
    label: `${testCount} Prices Published`,
    detail:
      "Every test we run is listed in LKR on a public price list. No counter surprises.",
  },
];

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Cursor-aware image drift. Capped at 7px in each direction — enough to feel
  // alive, far short of anything that reads as a gimmick. Skipped entirely on
  // touch pointers and under reduced-motion.
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)")
        .matches
    )
      return;
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - r.left) / r.width - 0.5) * 14}px`);
    el.style.setProperty("--py", `${((e.clientY - r.top) / r.height - 0.5) * 10}px`);
  };

  const onLeave = () => {
    frameRef.current?.style.setProperty("--px", "0px");
    frameRef.current?.style.setProperty("--py", "0px");
  };

  return (
    <section className="relative overflow-hidden bg-brand-primary-soft">
      {/* Very soft brand wash behind the type column. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand-primary/10 blur-3xl"
      />

      <div className="container-content relative grid items-center gap-10 pt-24 pb-10 md:pt-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:pt-32 lg:pb-16">
        <div className="max-w-xl">
          <p className="eyebrow mb-4 flex items-center gap-2">
            <MapPin size={13} aria-hidden="true" />
            Medical Diagnostics · Ja-Ela
          </p>

          <h1 className="type-h1 text-text-primary">
            Trusted diagnostics,{" "}
            <span className="text-brand-primary-dark">closer to home.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            Blood tests, ECG and home sample collection with transparent LKR
            pricing and 24-hour reports — serving Ja-Ela, Kandana, Wattala,
            Ragama and six more towns.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+94711231954"
              className="btn btn-primary"
              data-track="hero_primary_click"
            >
              <Phone size={17} aria-hidden="true" />
              Book a Home Visit
            </a>
            <Link
              href="/price-list"
              className="btn btn-secondary"
              data-track="hero_secondary_click"
            >
              View Test Prices
              <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div
          ref={frameRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-dark sm:aspect-[16/10] lg:aspect-[4/3.2]"
          style={{ ["--px" as string]: "0px", ["--py" as string]: "0px" }}
        >
          <div
            className="absolute inset-[-16px] transition-transform duration-300 ease-out will-change-transform motion-reduce:transform-none"
            style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
          >
            <Image
              src="/hero-photo.jpeg"
              alt="The St. Luke's Medical Laboratory diagnostic centre in Ja-Ela, Sri Lanka"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-[center_22%]"
            />
          </div>

          {/* Scrim, so the address card below always has something to sit on. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04180a]/75 via-[#04180a]/10 to-transparent"
          />

          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
              Ja-Ela headquarters
            </p>
            <p className="mt-1 text-sm font-medium">No. 67, Old Negombo Road</p>
          </div>
        </div>
      </div>

      {/* Trust rail. Each cell expands in place — hover or focus on a pointer
          device, tap on touch. The label alone is a complete statement, so
          nothing essential is hidden behind the interaction. */}
      <div className="border-t border-border-brand bg-surface">
        <div className="container-content">
          <ul className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {trustIndicators.map((item, i) => {
              const Icon = item.icon;
              const isOpen = openIndex === i;
              return (
                <li key={item.label} className="bg-surface">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    onMouseEnter={() => setOpenIndex(i)}
                    onFocus={() => setOpenIndex(i)}
                    className="group flex h-full w-full flex-col items-start gap-2.5 px-4 py-4 text-left transition-colors hover:bg-brand-primary-soft md:px-5 md:py-5"
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                        isOpen
                          ? "bg-brand-primary-dark text-text-inverse"
                          : "bg-brand-primary-soft text-brand-primary-dark",
                      )}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-text-primary">
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "grid transition-[grid-template-rows] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="block text-xs leading-relaxed text-text-muted">
                          {item.detail}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
