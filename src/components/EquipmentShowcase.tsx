"use client";

import { useState } from "react";
import Image from "next/image";
import { analyzers } from "@/lib/analyzers";
import { cn } from "@/lib/cn";

/**
 * Interactive equipment showcase. A numbered rail selects the analyzer; the
 * stage crossfades to it.
 *
 * Two of the four source photographs are square and two are wide, so the frame
 * is a fixed neutral panel and every image is contained inside it rather than
 * cropped to a common ratio. Cropping an analyzer removes exactly the part a
 * patient is looking at.
 */
export default function EquipmentShowcase() {
  const [active, setActive] = useState(0);
  const a = analyzers[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
      {/* Rail — desktop */}
      <ul className="hidden lg:block" aria-label="Our analyzers">
        {analyzers.map((item, i) => (
          <li key={item.slug}>
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-current={i === active ? "true" : undefined}
              className={cn(
                "flex min-h-14 w-full items-baseline gap-3 border-l-2 px-4 py-3.5 text-left transition-colors",
                i === active
                  ? "border-brand-primary-dark bg-surface"
                  : "border-border text-text-muted hover:border-border-strong hover:text-text-primary",
              )}
            >
              <span className="type-numeric text-sm font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold text-text-primary">
                {item.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Rail — touch. Horizontal chips, since a vertical rail wastes a phone
          screen and the tap targets need to be side by side. */}
      <ul className="flex gap-2 overflow-x-auto pb-2 lg:hidden" aria-label="Our analyzers">
        {analyzers.map((item, i) => (
          <li key={item.slug} className="shrink-0">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active ? "true" : undefined}
              className={cn(
                "min-h-11 rounded-lg px-3.5 text-sm font-medium transition-colors",
                i === active
                  ? "bg-surface-dark text-text-inverse"
                  : "bg-surface-soft text-text-secondary",
              )}
            >
              {item.category}
            </button>
          </li>
        ))}
      </ul>

      <article
        key={a.slug}
        className="panel-in grid gap-7 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2 md:gap-9 md:p-9"
      >
        <div className="relative min-h-[260px] rounded-xl bg-white md:min-h-[340px]">
          <Image
            src={a.image}
            alt={`${a.name}, in use at St. Luke's Medical Laboratory`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-contain p-4"
          />
        </div>

        <div>
          <p className="eyebrow mb-2">{a.category}</p>
          <h3 className="type-h3 text-text-primary">{a.name}</h3>
          <p className="mt-1.5 text-sm text-text-muted">{a.manufacturer}</p>
          <p className="mt-5 leading-relaxed text-text-secondary">
            {a.description}
          </p>

          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
            What it runs
          </p>
          <ul className="mt-3 space-y-2">
            {a.tests.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-sm text-text-secondary"
              >
                <span
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-primary"
                  aria-hidden="true"
                />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
