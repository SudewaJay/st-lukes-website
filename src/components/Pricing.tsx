"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import { packages, formatLKR } from "@/lib/packages";
import { JsonLd } from "./JsonLd";

const packagesSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Health Checkup Packages — St. Luke's Medical Laboratory",
    itemListElement: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        priceCurrency: "LKR",
        price: String(p.priceLKR),
        itemOffered: { "@type": "MedicalTest", name: p.includes.join(", ") },
    })),
};

export default function Pricing() {
    const [perView, setPerView] = useState(3);
    const [page, setPage] = useState(0);

    // 1 card on mobile, 2 on tablet, 3 on desktop
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxPage = Math.max(0, packages.length - perView);
    const pageCount = maxPage + 1;

    // keep the current page valid when the layout switches breakpoints
    useEffect(() => {
        setPage((p) => Math.min(p, maxPage));
    }, [maxPage]);

    const next = useCallback(
        () => setPage((p) => (p >= maxPage ? 0 : p + 1)),
        [maxPage],
    );
    const prev = useCallback(
        () => setPage((p) => (p <= 0 ? maxPage : p - 1)),
        [maxPage],
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
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="packages">
            <JsonLd data={packagesSchema} />
            <div className="text-center mb-10 md:mb-12">
                <ScrollReveal>
                    <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">
                        Health Checkup Packages
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Proactive care tailored<br className="hidden md:block" /> for your needs
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Transparent LKR pricing. No hidden charges. Every package available with home sample collection across Ja-Ela &amp; nearby towns.
                    </p>
                </ScrollReveal>
            </div>

            {/* Carousel */}
            <ScrollReveal>
                <div className="relative">
                    <div
                        className="overflow-hidden"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <motion.div
                            className="flex items-stretch"
                            animate={{ x: `-${page * (100 / perView)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 34 }}
                        >
                            {packages.map((p) => (
                                <div
                                    key={p.slug}
                                    className="px-3 shrink-0"
                                    style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
                                >
                                    <div
                                        className={`rounded-3xl p-6 flex flex-col h-full bg-white transition-all duration-300 ${
                                            p.recommended
                                                ? "border-2 border-stLukes-500 shadow-2xl shadow-stLukes-500/10"
                                                : "border border-slate-200 shadow-sm hover:shadow-lg"
                                        }`}
                                    >
                                        {p.recommended && (
                                            <span className="inline-flex items-center gap-1 bg-stLukes-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">
                                                <Star size={11} fill="currentColor" /> Recommended
                                            </span>
                                        )}
                                        <h4 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h4>
                                        <p className="text-stLukes-600 text-xs font-semibold uppercase tracking-wide mb-3">
                                            {p.tagline}
                                        </p>

                                        <div className="my-4">
                                            <span className="text-3xl font-bold text-slate-900">
                                                LKR {formatLKR(p.priceLKR)}
                                            </span>
                                            <span className="text-slate-500 font-medium text-sm">/package</span>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.description}</p>

                                        <div className="flex-grow">
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                                Includes
                                            </p>
                                            <ul className="space-y-1.5 mb-5">
                                                {p.includes.map((item) => (
                                                    <li key={item} className="flex items-start gap-2 text-slate-600 text-xs">
                                                        <Check
                                                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                                                                p.recommended ? "text-stLukes-500" : "text-slate-400"
                                                            }`}
                                                        />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <a
                                            href="tel:+94711231954"
                                            className={`w-full py-3 rounded-xl font-semibold mt-auto transition-colors flex items-center justify-center text-sm ${
                                                p.recommended
                                                    ? "bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white shadow-lg shadow-stLukesRed-500/25"
                                                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                                            }`}
                                        >
                                            Book this package
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Prev / Next */}
                    <button
                        onClick={prev}
                        aria-label="Previous packages"
                        className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-3 lg:-left-5 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white text-stLukes-600 border border-slate-200 shadow-lg hover:bg-stLukes-50 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next packages"
                        className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-3 lg:-right-5 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white text-stLukes-600 border border-slate-200 shadow-lg hover:bg-stLukes-50 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </ScrollReveal>

            {/* Pagination dots */}
            {pageCount > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: pageCount }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                i === page ? "w-8 bg-stLukes-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                            }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
