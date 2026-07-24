"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";

/** Google Business Profile link for the Ja-Ela HQ (real, confirmed). */
const HQ_MAPS_LINK = "https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9";

type LocationMapProps = {
  /** Place name / address the map centres on. */
  query: string;
  /** Caption under the map — say honestly what the pin represents. */
  caption: string;
  /** a11y label for the iframe. */
  title: string;
};

/**
 * Click-to-load Google Maps embed.
 *
 * Renders a lightweight styled facade first; the real Maps iframe is only
 * injected after the user clicks "View map". This keeps the map off the
 * critical rendering path so it never hurts LCP/INP on these SEO pages.
 *
 * Requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. If it's missing, the whole
 * component renders nothing — the page still works, just without a map.
 */
export function LocationMap({ query, caption, title }: LocationMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [loaded, setLoaded] = useState(false);

  if (!apiKey) return null;

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&zoom=14`;

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-stLukes-50">
        {loaded ? (
          <iframe
            src={src}
            title={title}
            className="block h-[320px] w-full border-0 md:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Load interactive map: ${title}`}
            className="group relative flex h-[320px] w-full flex-col items-center justify-center gap-3 md:h-[400px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(226,232,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-stLukesRed-500 text-white shadow-lg transition-transform group-hover:scale-110">
              <MapPin size={26} />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 transition group-hover:ring-stLukes-400">
              View map
            </span>
          </button>
        )}
      </div>

      <p className="mt-3 flex flex-col gap-1 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>{caption}</span>
        <a
          href={HQ_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-stLukes-600 hover:text-stLukes-700"
        >
          <Navigation size={14} />
          Directions to our Ja-Ela lab
        </a>
      </p>
    </div>
  );
}
