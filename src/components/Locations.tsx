"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, Phone, ArrowRight, Building2, Home } from "lucide-react";
import { locations } from "@/lib/locations";
import { cn } from "@/lib/cn";

const HQ_DIRECTIONS = "https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9";

/**
 * Interactive location explorer. The town list on the left drives a detail
 * panel on the right — hover or arrow-key on a pointer device, tap on touch.
 * Every town is a real link as well as a selector, so nothing here depends on
 * JavaScript to reach the underlying page.
 */
export default function Locations() {
  const [active, setActive] = useState(0);
  const town = locations[active];

  return (
    <section className="section-padding bg-brand-primary-soft" id="locations">
      <div className="container-content">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="eyebrow mb-3">Our Network</p>
          <h2 className="type-h2 text-text-primary">
            Ten towns, one laboratory.
          </h2>
          <p className="mt-4 type-body-large">
            Walk in at our Ja-Ela lab on Old Negombo Road, or have a qualified
            phlebotomist come to you anywhere along the corridor.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
          {/* Town selector */}
          <ul
            className="grid grid-cols-2 gap-2 self-start sm:grid-cols-3 lg:grid-cols-1 lg:gap-0"
            aria-label="Towns we serve"
          >
            {locations.map((loc, i) => (
              <li key={loc.slug}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={cn(
                    "flex min-h-11 w-full items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 text-left text-sm font-medium transition-colors lg:rounded-none lg:border-l-2 lg:px-4",
                    i === active
                      ? "bg-surface text-text-primary lg:border-brand-primary-dark"
                      : "bg-surface/60 text-text-secondary hover:bg-surface lg:border-border-brand lg:bg-transparent",
                  )}
                >
                  <span>{loc.name}</span>
                  {loc.isHQ && (
                    <span className="rounded bg-brand-primary-dark px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-text-inverse">
                      HQ
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Detail panel — keyed so it re-animates on change */}
          <article
            key={town.slug}
            className="panel-in rounded-2xl border border-border-brand bg-surface p-6 md:p-9"
          >
            <p className="eyebrow mb-3 flex items-center gap-2">
              {town.isServiceArea ? (
                <>
                  <Home size={13} aria-hidden="true" /> Home visit service area
                </>
              ) : (
                <>
                  <Building2 size={13} aria-hidden="true" /> Walk-in &amp; home visits
                </>
              )}
            </p>

            <h3 className="type-h2 text-text-primary">{town.name}</h3>

            <p className="mt-4 max-w-xl leading-relaxed text-text-secondary">
              {town.blurb}
            </p>

            <dl className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                  {town.isHQ ? "Address" : "Distance from our lab"}
                </dt>
                <dd className="mt-1.5 text-sm text-text-primary">
                  {town.isHQ
                    ? "No. 67, Old Negombo Road, Ja-Ela"
                    : town.distanceFromHQ}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                  Opening hours
                </dt>
                <dd className="mt-1.5 text-sm text-text-primary">
                  Mon–Sat 07:00–19:30 · Sun 07:30–12:30
                </dd>
              </div>
              {town.neighbourhoods && town.neighbourhoods.length > 0 && (
                <div className="sm:col-span-2">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                    Areas covered
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {town.neighbourhoods.map((n) => (
                      <span
                        key={n}
                        className="rounded-md bg-brand-primary-soft px-2.5 py-1 text-xs text-brand-primary-darker"
                      >
                        {n}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`/locations/${town.slug}`}
                className="btn btn-primary !text-sm"
              >
                {town.name} details
                <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
              </Link>
              <a
                href="tel:+94711231954"
                className="btn btn-secondary !text-sm"
                data-track="phone_click"
              >
                <Phone size={15} aria-hidden="true" />
                Call 071 123 1954
              </a>
              {town.isHQ && (
                <a
                  href={HQ_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost !text-sm"
                >
                  <Navigation size={15} aria-hidden="true" />
                  Directions
                </a>
              )}
            </div>

            {town.isServiceArea && (
              <p className="mt-6 flex items-start gap-2 rounded-lg bg-surface-soft px-4 py-3 text-xs leading-relaxed text-text-muted">
                <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                We do not have a walk-in branch in {town.name}. Samples are
                collected at your home or office and processed at our Ja-Ela
                laboratory.
              </p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
