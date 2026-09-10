"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { locations } from "@/lib/locations";
import { cn } from "@/lib/cn";

const steps = [
  { n: "01", title: "Request", description: "Call or WhatsApp with the tests you need and a preferred time." },
  { n: "02", title: "We arrange", description: "We confirm the published LKR price and book a collection slot." },
  { n: "03", title: "Sample collection", description: "A trained phlebotomist collects your sample at home or work." },
  { n: "04", title: "Results", description: "Most reports are ready within 24 hours and delivered digitally." },
];

export default function HomeCollection() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = nodes.indexOf(visible.target as HTMLLIElement);
        if (i >= 0) setActive(i);
      },
      { threshold: 0.6, rootMargin: "-20% 0px -30% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section-padding bg-surface-dark text-text-inverse" id="home-collection">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <figure className="m-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[4/5]">
            <Image
              src="/hero-photo.jpeg"
              alt="Home sample collection arranged from St. Luke's laboratory in Ja-Ela"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* Below the photograph, not over it. A list this long never had
              enough scrim behind it to stay readable. */}
          <figcaption className="mt-4 text-sm leading-relaxed text-white/60">
            Serving {locations.map((l) => l.name).join(", ")}.
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow eyebrow-invert mb-3">Home sample collection</p>
          <h2 className="type-h2 text-white">
            Healthcare, without the journey.
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
            A qualified phlebotomist visits your home or office. Same tests, same published prices, same 24-hour reports.
          </p>

          <div className="mt-8 mb-8 h-px bg-white/10" aria-hidden="true">
            <div
              className="h-px bg-brand-primary transition-[width] duration-300"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>

          <ol className="space-y-2">
            {steps.map((step, i) => (
              <li
                key={step.n}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full gap-4 rounded-xl px-3 py-3 text-left transition-colors",
                    i === active ? "bg-white/8" : "hover:bg-white/5",
                  )}
                >
                  <span className={cn("font-display text-xl", i === active ? "text-brand-primary" : "text-white/55")}>
                    {step.n}
                  </span>
                  <span>
                    <span className="block font-semibold">{step.title}</span>
                    <span className="mt-1 block text-sm text-white/70">{step.description}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:+94711231954" className="btn btn-primary" data-track="home_visit_start">
              <Phone size={18} />
              Request a Home Visit
            </a>
            <a
              href="https://wa.me/94711231954?text=Hi%2C%20I%27d%20like%20to%20book%20a%20home%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/15"
              data-track="whatsapp_click"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
