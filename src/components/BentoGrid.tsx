"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { Microscope, FlaskConical, Clock, Fingerprint, Activity, ClipboardCheck } from "lucide-react";

export default function BentoGrid() {
    const cards = [
        {
            title: "Advanced Microscopy",
            description: "High-resolution cellular analysis and detailed pathology using state-of-the-art optical systems.",
            icon: Microscope,
            colSpan: "col-span-1 md:col-span-2",
            bgClass: "bg-gradient-to-br from-stLukes-50 to-stLukes-100",
            delay: 0,
        },
        {
            title: "Rapid Turnaround",
            description: "Most routine results delivered within 24 hours.",
            icon: Clock,
            colSpan: "col-span-1",
            bgClass: "bg-white border border-slate-100 shadow-sm",
            delay: 0.1,
        },
        {
            title: "Genomic Profiling",
            description: "Precision DNA and RNA analysis for personalized medical insights.",
            icon: Fingerprint,
            colSpan: "col-span-1",
            bgClass: "bg-white border text-center border-slate-100 shadow-sm",
            delay: 0.2,
        },
        {
            title: "Comprehensive Panels",
            description: "From routine blood work to complex biochemical assays. We cover over 500+ unique tests.",
            icon: FlaskConical,
            colSpan: "col-span-1 md:col-span-2",
            bgClass: "bg-slate-900 text-white",
            delay: 0.3,
        },
        {
            title: "Continuous Monitoring",
            description: "Track your health metrics over time securely.",
            icon: Activity,
            colSpan: "col-span-1",
            bgClass: "bg-stLukes-500 text-white",
            delay: 0.4,
        },
        {
            title: "Certified Experts",
            description: "Our lab is staffed by board-certified pathologists and skilled technicians.",
            icon: ClipboardCheck,
            colSpan: "col-span-1 md:col-span-2",
            bgClass: "bg-gradient-to-tr from-indigo-50 to-white border border-indigo-100",
            delay: 0.5,
        },
    ];

    return (
        <section className="py-24 bg-white" id="why-us">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <ScrollReveal>
                        <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Our Core Capabilities</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Technology Meets Expertise.
                        </h3>
                        <p className="text-slate-600 text-lg">
                            We leverage cutting-edge equipment and rigorous quality control to deliver insights you can trust.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        // Determine text colors based on background
                        const isDark = card.bgClass.includes("bg-slate-900") || card.bgClass.includes("bg-stLukes-500");
                        const titleClass = isDark ? "text-white" : "text-slate-900";
                        const descClass = isDark ? "text-slate-300" : "text-slate-600";
                        const iconBgClass = isDark ? "bg-white/10 text-white" : "bg-white text-stLukes-500 shadow-sm border border-slate-100";

                        return (
                            <ScrollReveal
                                key={index}
                                delay={card.delay}
                                className={`${card.colSpan} h-full`}
                            >
                                <div className={`relative h-full rounded-3xl p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${card.bgClass} flex flex-col justify-between group`}>

                                    {/* Decorative background element for dark cards */}
                                    {isDark && (
                                        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none"></div>
                                    )}

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10 ${iconBgClass}`}>
                                        <Icon size={24} />
                                    </div>

                                    <div className="relative z-10">
                                        <h4 className={`text-xl font-bold mb-2 ${titleClass}`}>{card.title}</h4>
                                        <p className={`text-sm leading-relaxed ${descClass}`}>{card.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
