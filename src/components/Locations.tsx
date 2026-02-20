"use client";

import { MapPin, Navigation, PhoneCall, Building2 } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

export default function Locations() {
    return (
        <section className="py-24 bg-stLukes-50 overflow-hidden relative" id="locations">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-stLukes-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div>
                        <ScrollReveal>
                            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Our Network</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                                Accessible Care, Wherever You Are.
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our main state-of-the-art laboratory is headquartered in Ja-Ela, Sri Lanka. To ensure you have convenient access to premium diagnostics, we maintain a growing network of over 20 collection centres region-wide.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-stLukes-500 flex items-center justify-center shrink-0">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Ja-Ela Headquarters</h4>
                                        <p className="text-slate-600 text-sm">No. 67, Old Negombo Road, Ja-Ela. Fully equipped central processing facility.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-stLukes-500 flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">20+ Collecting Centres</h4>
                                        <p className="text-slate-600 text-sm">Strategically located across the region for easy sample drop-off.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md shadow-stLukesRed-500/20 flex items-center justify-center gap-2">
                                    <Navigation size={20} />
                                    View Locations Map
                                </button>
                                <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2">
                                    <PhoneCall size={20} />
                                    Call Us Now
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-100 relative">
                                {/* Map abstract placeholder */}
                                <div className="aspect-[4/3] bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]"></div>
                                    <MapPin size={64} className="text-stLukes-200 animate-pulse" />

                                    {/* Map pins markers */}
                                    <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-stLukesRed-500 rounded-full animate-ping shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                                    <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-stLukesRed-500 rounded-full border-2 border-white"></div>

                                    <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-stLukes-500 rounded-full shadow-lg border-2 border-white hover:scale-150 transition-transform cursor-pointer"></div>
                                    <div className="absolute bottom-[20%] left-[40%] w-3 h-3 bg-stLukes-500 rounded-full shadow-lg border-2 border-white hover:scale-150 transition-transform cursor-pointer"></div>
                                    <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-stLukes-500 rounded-full shadow-lg border-2 border-white hover:scale-150 transition-transform cursor-pointer"></div>
                                    <div className="absolute top-[10%] left-[50%] w-3 h-3 bg-stLukes-500 rounded-full shadow-lg border-2 border-white hover:scale-150 transition-transform cursor-pointer"></div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <Navigation size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium uppercase">Nearest Centre</p>
                                            <p className="font-bold text-slate-900">2.5 km away</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
