"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

const values = [
  {
    n: "01",
    title: "Local",
    line: "Closer to the communities we serve.",
    body: "Our laboratory is on Old Negombo Road, Ja-Ela. We name the towns we actually cover — from Kandana and Wattala to Seeduwa, Katunayake and Negombo — instead of hiding behind a generic “Colombo and suburbs” line.",
  },
  {
    n: "02",
    title: "Transparent",
    line: "Know your test price before visiting.",
    body: "Every test on our public list is priced in LKR. No hidden charges at the counter. Confirm the published price when you book.",
  },
  {
    n: "03",
    title: "Technology",
    line: "Modern diagnostic equipment.",
    body: "Samples run on BioSystems A15 biochemistry, CLIA immunoassay, Medonic hematology and Audicom electrolyte analyzers — calibrated daily with quality-control samples.",
  },
  {
    n: "04",
    title: "Human",
    line: "Care from real people.",
    body: "Walk-ins, first-time patients and elderly home visits meet the same professional team. Reports are delivered digitally so you can share them with your physician.",
  },
];

/**
 * The values narrative. A proper ARIA tab set: arrow keys move between tabs,
 * only the selected tab is in the tab order, and the panel is wired to the tab
 * that labels it.
 */
export default function SimpleSteps() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const v = values[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % values.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (active - 1 + values.length) % values.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = values.length - 1;
    else return;

    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section-padding bg-surface" id="why-st-lukes">
      <div className="container-content">
        <p className="eyebrow mb-3">Why St. Luke&apos;s</p>
        <h2 className="type-h2 mb-10 text-text-primary">
          A neighbourhood lab, built with intent.
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <div
            role="tablist"
            aria-label="What St. Luke's stands for"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {values.map((item, i) => (
              <button
                key={item.n}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`value-tab-${item.n}`}
                aria-selected={i === active}
                aria-controls="value-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  "min-h-14 min-w-[10rem] shrink-0 rounded-xl border px-4 py-3 text-left transition-colors lg:min-w-0 lg:shrink",
                  i === active
                    ? "border-brand-primary-dark bg-brand-primary-soft"
                    : "border-border hover:border-border-strong",
                )}
              >
                <span className="type-numeric block text-xs font-semibold text-brand-primary-dark">
                  {item.n}
                </span>
                <span className="mt-0.5 block font-semibold text-text-primary">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div
            key={v.n}
            id="value-panel"
            role="tabpanel"
            aria-labelledby={`value-tab-${v.n}`}
            tabIndex={0}
            className="panel-in rounded-2xl bg-brand-primary-soft p-8 md:p-12"
          >
            <p
              aria-hidden="true"
              className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.92] text-brand-primary-dark"
            >
              {v.title.toUpperCase()}
            </p>
            <p className="mt-6 text-xl text-text-primary">{v.line}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-text-secondary">
              {v.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
