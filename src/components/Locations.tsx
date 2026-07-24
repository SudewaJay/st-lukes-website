import { MapPin, Navigation, PhoneCall, Building2 } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ui/ScrollReveal";
import { locations } from "@/lib/locations";

export default function Locations() {
    const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const hqMapSrc = mapsKey
        ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${encodeURIComponent(
              "St. Luke's Medical Laboratory, No. 67 Old Negombo Road, Ja-Ela, Sri Lanka"
          )}&zoom=14`
        : null;
    return (
        <section className="py-24 bg-stLukes-50 overflow-hidden relative" id="locations">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-stLukes-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div>
                        <ScrollReveal>
                            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Home Visits Across Ja-Ela, Wattala, Katunayake &amp; Negombo</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                                Accessible Care, Wherever You Are.
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our fully equipped laboratory is in Ja-Ela, Sri Lanka &mdash; walk in any day for your tests. And to make diagnostics effortless, a qualified phlebotomist brings home sample collection right to your door across ten towns, from Ja-Ela and Wattala up to Seeduwa, Katunayake and Negombo.
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
                                        <h4 className="font-bold text-slate-900 mb-1">Home Sample Collection</h4>
                                        <p className="text-slate-600 text-sm">A qualified phlebotomist visits your home or office across all ten towns we serve &mdash; most reports back within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.25}>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {locations.map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        href={`/locations/${loc.slug}`}
                                        className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-stLukes-500 hover:text-stLukes-600 transition-colors"
                                    >
                                        {loc.name}
                                    </Link>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9?g_st=ic" target="_blank" rel="noopener noreferrer" className="bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md shadow-stLukesRed-500/20 flex items-center justify-center gap-2">
                                    <Navigation size={20} />
                                    View Locations Map
                                </a>
                                <a href="tel:+94711231954" className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-semibold transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2">
                                    <PhoneCall size={20} />
                                    Call Us Now
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-100 relative">
                                {/* Real map of our Ja-Ela laboratory */}
                                <div className="aspect-[4/3] bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                                    {hqMapSrc ? (
                                        <iframe
                                            src={hqMapSrc}
                                            title="St. Luke's Medical Laboratory — Ja-Ela"
                                            className="absolute inset-0 w-full h-full border-0"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]" />
                                            <div className="flex flex-col items-center gap-2 text-center px-6">
                                                <MapPin size={48} className="text-stLukes-300" />
                                                <p className="text-sm font-semibold text-slate-600">
                                                    St. Luke&apos;s Medical Laboratory
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    No. 67, Old Negombo Road, Ja-Ela
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                            <Building2 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium uppercase">Our Lab</p>
                                            <p className="font-bold text-slate-900">Ja-Ela HQ</p>
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
