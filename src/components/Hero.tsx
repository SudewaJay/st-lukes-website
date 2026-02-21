import { ArrowRight, Activity, ShieldCheck, Clock } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background styling elements */}
            <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-stLukes-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-stLukes-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left z-10">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stLukes-50 border border-stLukes-100 text-stLukes-500 text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stLukes-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-stLukes-500"></span>
                                </span>
                                State-of-the-Art Diagnostics
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Accurate Diagnostics, <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stLukes-500 to-stLukes-600">
                                    Close to Home.
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Based in Ja-Ela with over 20 collection centres across the region, St. Luke's Medical Laboratory provides reliable, fast, and accessible medical testing you can trust.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-stLukesRed-500/30 hover:shadow-xl hover:shadow-stLukesRed-500/40 flex items-center justify-center gap-2 group text-lg">
                                    View Test Menu
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9?g_st=ic" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all border border-slate-200 shadow-sm hover:shadow-md text-lg flex items-center justify-center">
                                    Find Nearest Centre
                                </a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200/60 pt-8">
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-3xl font-bold text-slate-900">Fast &</p>
                                    <p className="text-sm text-slate-500 font-medium">Accurate Reports</p>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-3xl font-bold text-slate-900">20+</p>
                                    <p className="text-sm text-slate-500 font-medium">Collecting Centres</p>
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-3xl font-bold text-slate-900">500+</p>
                                    <p className="text-sm text-slate-500 font-medium">Trusted Doctors</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative z-10">
                        <ScrollReveal delay={0.2} direction="left">
                            <div className="relative w-full aspect-square max-w-lg mx-auto lg:mr-0">
                                <div className="absolute inset-0 bg-gradient-to-tr from-stLukes-100 to-white rounded-[2rem] shadow-2xl rotate-3 transform-gpu"></div>
                                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex items-center justify-center flex-col p-8 z-10">
                                    {/* Abstract Graphic representing Lab */}
                                    <div className="relative w-full h-full bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                        <div className="space-y-6 w-full px-8 relative z-10">

                                            {/* Fake UI Elements */}
                                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 animate-[pulse_3s_ease-in-out_infinite]">
                                                <div className="bg-stLukes-100 p-3 rounded-lg text-stLukes-500"><Activity size={24} /></div>
                                                <div>
                                                    <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
                                                    <div className="h-3 w-16 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 ml-8 animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '500ms' }}>
                                                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600"><ShieldCheck size={24} /></div>
                                                <div>
                                                    <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                                                    <div className="h-3 w-20 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1000ms' }}>
                                                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600"><Clock size={24} /></div>
                                                <div>
                                                    <div className="h-4 w-20 bg-slate-200 rounded mb-2"></div>
                                                    <div className="h-3 w-24 bg-slate-100 rounded"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -right-6 top-1/4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20 animate-[bounce_4s_infinite]">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-slate-700">Results Ready</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
