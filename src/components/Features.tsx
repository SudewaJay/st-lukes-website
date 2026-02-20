"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { ArrowRight, Droplet, FlaskConical, HeartPulse, BriefcaseMedical, Activity, Stethoscope } from "lucide-react";

export default function Features() {
    const services = [
        {
            title: "General Blood Tests",
            description: "Comprehensive blood analysis including Complete Blood Count (CBC) and Lipid profiles to monitor essential health markers.",
            icon: Droplet,
            delay: 0,
        },
        {
            title: "Urine Analysis",
            description: "Routine screening to detect and manage a wide range of disorders, from kidney function to urinary tract infections.",
            icon: FlaskConical,
            delay: 0.1,
        },
        {
            title: "ECG & Cardiac Tests",
            description: "Accurate electrocardiograms and cardiovascular health assessments performed by experienced technicians.",
            icon: HeartPulse,
            delay: 0.2,
        },
        {
            title: "Corporate Health Screenings",
            description: "Tailored pre-employment medical checks and annual wellness programs for companies of all sizes.",
            icon: BriefcaseMedical,
            delay: 0.3,
        },
        {
            title: "Biochemical Profiles",
            description: "Detailed analysis of liver, kidney, and metabolic functions to provide a complete picture of your internal health.",
            icon: Activity,
            delay: 0.4,
        },
        {
            title: "Specialised Diagnostics",
            description: "Advanced hormonal level testing and customized panels required for specific physician referrals.",
            icon: Stethoscope,
            delay: 0.5,
        },
    ];

    return (
        <section className="py-24 bg-slate-50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <ScrollReveal>
                            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Comprehensive Services</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Specialized Testing for Every Need.
                            </h3>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.2}>
                        <button className="flex items-center gap-2 text-stLukes-500 font-semibold hover:text-stLukes-600 transition-colors group">
                            View All Test Menus
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <ScrollReveal key={index} delay={service.delay}>
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-stLukes-100 transition-all duration-300 group cursor-pointer h-full flex flex-col">

                                    <div className="w-14 h-14 rounded-2xl bg-stLukes-50 text-stLukes-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-stLukes-500 group-hover:text-white transition-all duration-300">
                                        <Icon size={28} />
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-stLukes-500 transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-stLukes-500 transition-colors">
                                        Learn more <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
