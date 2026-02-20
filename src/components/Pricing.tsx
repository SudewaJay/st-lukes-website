"use client";

import { Check, Star } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const packages = [
    {
        name: "Basic Wellness Profile",
        desc: "Essential screening suitable for evaluating overall health status.",
        price: 49,
        features: [
            "Complete Blood Count (CBC)",
            "Fasting Blood Sugar (FBS)",
            "Urine Full Report (UFR)",
            "Standard Lipid Profile"
        ],
        highlighted: false,
        delay: 0,
    },
    {
        name: "Comprehensive Full Body",
        desc: "An in-depth health evaluation covering major vital organs.",
        price: 149,
        features: [
            "Everything in Basic Wellness",
            "Advanced Liver Function Test",
            "Comprehensive Kidney Profile",
            "Resting ECG & Cardiac Markers",
            "Thyroid Function Profile"
        ],
        highlighted: true,
        delay: 0.2,
    },
    {
        name: "Senior Citizen Care",
        desc: "Tailored health assessments designed specifically for older adults.",
        price: 99,
        features: [
            "Arthritis & Bone Density Markers",
            "Prostate/Ovarian Health Checks",
            "Vitamin D & B12 Levels",
            "Priority Home Collection"
        ],
        highlighted: false,
        delay: 0.4,
    }
];

export default function Pricing() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto" id="packages">
            <div className="text-center mb-16">
                <ScrollReveal>
                    <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Health Checkup Packages</h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6">Proactive care tailored <br className="hidden md:block" /> for your needs</h3>
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                {packages.map((pkg, idx) => (
                    <ScrollReveal key={idx} delay={pkg.delay} className={`h-full ${pkg.highlighted ? 'z-10 -mx-2 md:-mx-4' : 'z-0'}`}>
                        <div
                            className={`rounded-3xl p-8 flex flex-col h-full bg-white transition-all duration-300
                ${pkg.highlighted
                                    ? 'border-2 border-stLukes-500 shadow-2xl shadow-stLukes-500/10 scale-105 z-10'
                                    : 'border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-2'
                                }
              `}
                        >
                            {pkg.highlighted && (
                                <span className="inline-flex items-center gap-1 bg-stLukes-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-6">
                                    <Star size={12} fill="currentColor" /> Recommended
                                </span>
                            )}
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                            <p className="text-slate-500 text-sm h-10">{pkg.desc}</p>

                            <div className="my-8">
                                <span className="text-5xl font-bold text-slate-900">
                                    ${pkg.price}
                                </span>
                                <span className="text-slate-500 font-medium">/package</span>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8 mt-auto">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <Check className={`w-5 h-5 shrink-0 ${pkg.highlighted ? 'text-stLukes-500' : 'text-slate-400'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full py-4 rounded-xl font-semibold mt-auto transition-colors
                ${pkg.highlighted
                                    ? 'bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white shadow-lg shadow-stLukesRed-500/25'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                                }
              `}>
                                Book Package
                            </button>

                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
