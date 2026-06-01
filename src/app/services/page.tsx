import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Medical Diagnostic Services in Ja-Ela",
  description:
    "Blood tests, ECG, home sample collection and corporate health screening from St. Luke's Medical Laboratory, Ja-Ela. Transparent LKR pricing. 24-hour reports.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Medical Diagnostic Services in Ja-Ela
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">
            From routine blood tests to specialist cardiac diagnostics and corporate health programmes — every service comes with transparent LKR pricing and 24-hour reports.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="group block p-7 rounded-3xl border border-slate-200 bg-white hover:border-stLukes-500 hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-stLukes-600">
                {svc.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.shortDesc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-stLukes-500">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Looking for a specific test?</h2>
          <p className="text-slate-600 mb-4">
            See our full{" "}
            <Link href="/price-list" className="text-stLukes-600 underline">
              price list
            </Link>{" "}
            or call to book.
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
