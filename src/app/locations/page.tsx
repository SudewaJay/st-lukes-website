import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Areas We Serve — Ja-Ela, Wattala, Seeduwa, Katunayake & Negombo",
  description:
    "St. Luke's Medical Laboratory serves Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama, Thudella, Seeduwa, Katunayake and Negombo — walk-in tests at our Ja-Ela lab plus home sample collection across the Negombo Road corridor.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Network
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Our Collection Centres Across Ja-Ela &amp; Beyond
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">
            Our lab is on Old Negombo Road, Ja-Ela — walk in any day for your tests. From there we bring home sample collection right along the Negombo Road corridor and up to the airport and Negombo: Kandana, Welisara, Ragama, Wattala, Batagama, Thudella, Seeduwa, Katunayake and Negombo. Every test is priced transparently in LKR, with most reports back within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group block p-6 rounded-3xl border border-slate-200 bg-white hover:border-stLukes-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-stLukes-50 text-stLukes-500 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-stLukes-600">
                    {loc.name}
                  </h2>
                  {loc.isHQ && (
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stLukes-600">
                      Headquarters
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{loc.blurb}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-stLukes-500">
                View {loc.name} page
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Don&apos;t see your town?</h2>
          <p className="text-slate-600 mb-4">
            Call us — we may still cover your area for home sample collection.
          </p>
          <a
            href="tel:+94711231954"
            className="inline-flex items-center bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Call 071 123 1954
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
