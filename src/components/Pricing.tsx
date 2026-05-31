"use client";

import { Check, Star } from "lucide-react";
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
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="packages">
            <JsonLd data={packagesSchema} />
            <div className="text-center mb-16">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {packages.map((p, idx) => (
                    <ScrollReveal key={p.slug} delay={idx * 0.1} className="h-full">
                        <div
                            className={`rounded-3xl p-7 flex flex-col h-full bg-white transition-all duration-300 ${
                                p.recommended
                                    ? "border-2 border-stLukes-500 shadow-2xl shadow-stLukes-500/10"
                                    : "border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
                            }`}
                        >
                            {p.recommended && (
                                <span className="inline-flex items-center gap-1 bg-stLukes-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-5">
                                    <Star size={11} fill="currentColor" /> Recommended
                                </span>
                            )}
                            <h4 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h4>
                            <p className="text-stLukes-600 text-xs font-semibold uppercase tracking-wide mb-3">
                                {p.tagline}
                            </p>

                            <div className="my-5">
                                <span className="text-3xl font-bold text-slate-900">
                                    LKR {formatLKR(p.priceLKR)}
                                </span>
                                <span className="text-slate-500 font-medium text-sm">/package</span>
                            </div>

                            <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.description}</p>

                            <div className="flex-grow">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Includes
                                </p>
                                <ul className="space-y-2 mb-6">
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
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
