"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, Clock, MapPin } from "lucide-react";

/**
 * Closing section. The background photograph drifts a few pixels with the
 * cursor — enough to make the section feel alive as you arrive at it, small
 * enough that nobody notices it as an effect.
 */
export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (
      window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)")
        .matches
    )
      return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - r.left) / r.width - 0.5) * 20}px`);
    el.style.setProperty("--py", `${((e.clientY - r.top) / r.height - 0.5) * 14}px`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--px", "0px");
    ref.current?.style.setProperty("--py", "0px");
  };

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate overflow-hidden bg-surface-dark text-text-inverse"
    >
      <div
        ref={ref}
        aria-hidden="true"
        className="absolute inset-[-24px] -z-10"
        style={{ ["--px" as string]: "0px", ["--py" as string]: "0px" }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform motion-reduce:transform-none"
          style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
        >
          <Image
            src="/hero-photo.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/85 via-[#0f172a]/80 to-[#0f172a]/95" />
      </div>

      <div className="container-content section-padding text-center">
        <p className="eyebrow eyebrow-invert mb-4">Ready when you are</p>

        <h2 className="type-h2 mx-auto max-w-3xl text-white">
          Find a test. Find a location. Or ask us to come to you.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
          Walk into the Ja-Ela laboratory at No. 67, Old Negombo Road, or book a
          home visit and a qualified phlebotomist will come to your door.
        </p>

        <dl className="mx-auto mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm text-white/60 sm:flex-row">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-primary" aria-hidden="true" />
            <dt className="sr-only">Opening hours</dt>
            <dd>Mon–Sat 07:00–19:30 · Sun 07:30–12:30</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-brand-primary" aria-hidden="true" />
            <dt className="sr-only">Address</dt>
            <dd>No. 67, Old Negombo Road, Ja-Ela</dd>
          </div>
        </dl>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:+94711231954"
            className="btn btn-primary"
            data-track="final_cta_call"
          >
            <Phone size={17} aria-hidden="true" />
            Call 071 123 1954
          </a>
          <a
            href="https://wa.me/94711231954?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn !border !border-white/25 !bg-white/10 !text-white hover:!bg-white/20"
            data-track="final_cta_whatsapp"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp Us
          </a>
          <Link href="/price-list" className="btn btn-ghost !text-white hover:!bg-white/10">
            View Test Prices
            <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
