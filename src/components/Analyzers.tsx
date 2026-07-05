"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  Cpu,
  FlaskConical,
  Microscope,
  Activity,
  Droplets,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import { analyzers, type Analyzer } from "@/lib/analyzers";

const FALLBACK_ICON: Record<string, typeof Cpu> = {
  Immunoassay: Microscope,
  Biochemistry: FlaskConical,
  Electrolytes: Activity,
  Hematology: Droplets,
};

function AnalyzerImage({ a }: { a: Analyzer }) {
  const [errored, setErrored] = useState(false);
  const Icon = FALLBACK_ICON[a.category] ?? Cpu;

  if (errored) {
    return (
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-stLukes-50 to-stLukes-100 flex items-center justify-center">
        <Icon size={56} className="text-stLukes-500/70" />
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] w-full bg-slate-100 relative">
      <Image
        src={a.image}
        alt={`${a.name} used at St. Luke's Medical Laboratory`}
        fill
        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function Analyzers() {
  const [perView, setPerView] = useState(2);
  const [page, setPage] = useState(0);

  // 1 card per view on mobile, 2 on tablet/desktop
  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 640 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = Math.ceil(analyzers.length / perView);

  // keep the current page valid when the layout switches breakpoints
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const next = useCallback(
    () => setPage((p) => (p + 1) % pageCount),
    [pageCount],
  );
  const prev = useCallback(
    () => setPage((p) => (p - 1 + pageCount) % pageCount),
    [pageCount],
  );

  // touch swipe (mobile)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) next();
    else if (distance < -minSwipeDistance) prev();
  };

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-stLukes-500 via-stLukes-600 to-[#2c5e18] overflow-hidden"
      id="technology"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <ScrollReveal>
            <h2 className="text-sm font-bold tracking-widest text-stLukes-50/90 uppercase mb-3">
              Our Lab Technology
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Powered by world-class diagnostic analyzers
            </h3>
            <p className="text-stLukes-50/85 text-lg">
              Every sample we process is run on internationally proven, fully
              automated equipment — so your results are accurate, repeatable
              and back in your hands within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        {/* Slider */}
        <ScrollReveal delay={0.1}>
          <div className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${page * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 34 }}
              >
                {analyzers.map((a) => (
                  <div
                    key={a.slug}
                    className="min-w-full sm:min-w-[50%] px-2.5 sm:px-3"
                  >
                    <article className="h-full flex flex-col rounded-3xl bg-white shadow-xl shadow-black/10 overflow-hidden">
                      <AnalyzerImage a={a} />
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider text-stLukes-600 bg-stLukes-50 px-2 py-1 rounded-full mb-2.5">
                          {a.category}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                          {a.name}
                        </h4>
                        <p className="text-xs text-slate-500 mb-2.5">
                          {a.manufacturer}
                        </p>
                        <p className="text-sm text-slate-600 flex-grow">
                          {a.description}
                        </p>
                      </div>
                    </article>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Prev / Next */}
            <button
              onClick={prev}
              aria-label="Previous analyzers"
              className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-3 lg:-left-5 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white text-stLukes-600 shadow-lg hover:bg-stLukes-50 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next analyzers"
              className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3 lg:-right-5 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white text-stLukes-600 shadow-lg hover:bg-stLukes-50 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </ScrollReveal>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === page ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-stLukes-50/75 mt-8 max-w-2xl mx-auto">
            All analyzers are calibrated daily and run alongside internal &amp;
            external quality-control samples to guarantee accuracy.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
