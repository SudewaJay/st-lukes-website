"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import CldImage from "./CldImage";
import { cn } from "@/lib/cn";

type Slide = {
  publicId: string;
  title: string;
  description: string;
  badge: string;
};

const slides: Slide[] = [
  {
    publicId:
      "v1781057107/484407834_659255019896801_3765573860770218545_n_uurwq0.jpg",
    title: "Free blood sugar and diabetes screening",
    description:
      "Community members are screened for early diabetes markers with quick blood sugar testing, administered by our own phlebotomists.",
    badge: "Outreach screening",
  },
  {
    publicId:
      "v1781057107/484739243_659254396563530_2331351593399046075_n_ks7u5d.jpg",
    title: "Consultations with medical professionals",
    description:
      "Patients get their laboratory reports explained on the spot, with practical guidance on what the numbers mean.",
    badge: "Medical advice",
  },
  {
    publicId:
      "v1781057107/485045013_659254436563526_4404986998653390691_n_y09qrg.jpg",
    title: "Vital health indicator checks",
    description:
      "Blood pressure and general vitals are recorded so residents can track the basics between full screenings.",
    badge: "Wellness vitals",
  },
  {
    publicId:
      "v1781057107/484816069_659255086563461_6644517396448799252_n_i3xc5c.jpg",
    title: "Mobile laboratory support",
    description:
      "Diagnostic setup and sample verification happen on site, so results come back as quickly as they would at the lab.",
    badge: "On-site laboratory",
  },
];

const INTERVAL = 6000;

/**
 * Editorial gallery of the free health camps. These are the only photographs
 * on the site of the business actually serving its community, so they are
 * given the space they deserve rather than a thumbnail strip.
 */
export default function HealthCampCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, [playing, index]);

  // Swipe
  const touch = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touch.current === null) return;
    const delta = touch.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      setPlaying(false);
      if (delta > 0) next();
      else prev();
    }
    touch.current = null;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPlaying(false);
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPlaying(false);
      prev();
    }
  };

  const slide = slides[index];

  return (
    <section className="section-padding bg-surface-dark text-text-inverse" id="health-camp">
      <div className="container-content">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="eyebrow eyebrow-invert mb-3">Serving our community</p>
          <h2 className="type-h2 text-white">
            St. Luke&apos;s free health camps.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            We run free diagnostics, vital checks and specialist consultations in
            the towns we serve. These are our own photographs, from our own camps.
          </p>
        </div>

        <div
          ref={containerRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Health camp photographs"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
          onFocus={() => setPlaying(false)}
          className="grid gap-6 rounded-2xl outline-none lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10"
        >
          {/* Stage */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black md:aspect-[16/10]">
            {slides.map((s, i) => (
              <CldImage
                key={s.publicId}
                publicId={s.publicId}
                alt={s.title}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className={cn(
                  "object-cover transition-opacity duration-500",
                  i === index ? "opacity-100" : "opacity-0",
                )}
                aria-hidden={i !== index}
              />
            ))}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
              <p className="type-numeric rounded-lg bg-black/45 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
                <span className="text-white/70">
                  {" / "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  {playing ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    prev();
                  }}
                  aria-label="Previous photograph"
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    next();
                  }}
                  aria-label="Next photograph"
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Caption + thumbnail rail */}
          <div className="flex flex-col justify-between">
            <div aria-live="polite" aria-atomic="true">
              <p className="eyebrow eyebrow-invert mb-3">{slide.badge}</p>
              <h3 key={slide.title} className="panel-in type-h3 text-white">
                {slide.title}
              </h3>
              <p key={slide.description} className="panel-in mt-4 leading-relaxed text-white/70">
                {slide.description}
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-4 gap-2">
              {slides.map((s, i) => (
                <li key={s.publicId}>
                  <button
                    type="button"
                    onClick={() => {
                      setPlaying(false);
                      go(i);
                    }}
                    aria-label={`Show photograph ${i + 1}: ${s.title}`}
                    aria-current={i === index ? "true" : undefined}
                    className={cn(
                      "relative block aspect-[4/3] w-full overflow-hidden rounded-lg ring-offset-2 ring-offset-[#0f172a] transition-all",
                      i === index
                        ? "ring-2 ring-brand-primary"
                        : "opacity-70 hover:opacity-100",
                    )}
                  >
                    <CldImage
                      publicId={s.publicId}
                      alt=""
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
