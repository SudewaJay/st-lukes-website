"use client";

import { Check, Star } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { packages, formatLKR } from "@/lib/packages";
import { JsonLd } from "./JsonLd";
import { packagesSchema } from "@/lib/seo";

export default function Pricing() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto" id="packages">
            <JsonLd data={packagesSchema} />
            <div className="text-center mb-16">
                <ScrollReveal>
                    <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Health Checkup Packages</h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6">Proactive care tailored <br className="hidden md:block" /> for your needs</h3>
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                {packages.map((pkg, idx) => (
                    <ScrollReveal key={pkg.name} delay={idx * 0.2} className={`h-full ${pkg.recommended ? 'z-10 -mx-2 md:-mx-4' : 'z-0'}`}>
                        <div
                            className={`rounded-3xl p-8 flex flex-col h-full bg-white transition-all duration-300
                ${pkg.recommended
                                    ? 'border-2 border-stLukes-500 shadow-2xl shadow-stLukes-500/10 scale-105 z-10'
                                    : 'border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-2'
                                }
              `}
                        >
                            {pkg.recommended && (
                                <span className="inline-flex items-center gap-1 bg-stLukes-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-6">
                                    <Star size={12} fill="currentColor" /> Recommended
                                </span>
                            )}
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                            <p className="text-slate-500 text-sm h-10">{pkg.desc}</p>

                            <div className="my-8">
                                <span className="text-4xl font-bold text-slate-900">
                                    LKR {formatLKR(pkg.priceLKR)}
                                </span>
                                <span className="text-slate-500 font-medium">/package</span>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8 mt-auto">
                                    {pkg.includes.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <Check className={`w-5 h-5 shrink-0 ${pkg.recommended ? 'text-stLukes-500' : 'text-slate-400'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a href="tel:+94711231954" className={`w-full py-4 rounded-xl font-semibold mt-auto transition-colors flex items-center justify-center
                ${pkg.recommended
                                    ? 'bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white shadow-lg shadow-stLukesRed-500/25'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                                }
              `}>
                                Book Package
                            </a>

                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
