"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { UserPlus, TestTube, FileCheck } from "lucide-react";

export default function SimpleSteps() {
    const steps = [
        {
            title: "Visit a Centre or Book Home Collection",
            description: "Walk into any of our 20+ centres or schedule a convenient home visit online or by phone.",
            icon: UserPlus,
            delay: 0,
        },
        {
            title: "Provide Sample",
            description: "Our friendly, professional phlebotomists will collect your sample quickly and painlessly.",
            icon: TestTube,
            delay: 0.2,
        },
        {
            title: "Access Digital Reports Fast",
            description: "Receive secure, accurate results on your device as soon as they are ready.",
            icon: FileCheck,
            delay: 0.4,
        },
    ];

    return (
        <section className="py-24 bg-white" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <ScrollReveal>
                        <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Simple Process</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            3 Steps to Better Health
                        </h3>
                    </ScrollReveal>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-stLukes-100 via-stLukes-200 to-stLukes-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <ScrollReveal key={index} delay={step.delay} className="flex flex-col items-center text-center">

                                    {/* Step Number Badge */}
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center mb-6 shadow-md absolute top-0 -translate-y-1/2 -ml-12 z-20 border-4 border-white">
                                        {index + 1}
                                    </div>

                                    {/* Icon Container */}
                                    <div className="w-24 h-24 rounded-full bg-white border-8 border-stLukes-50 flex items-center justify-center text-stLukes-500 mb-8 shadow-xl shadow-stLukes-500/10 group-hover:scale-110 transition-transform">
                                        <Icon size={32} />
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                                    <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
