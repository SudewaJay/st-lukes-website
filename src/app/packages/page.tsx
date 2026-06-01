import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { packages, formatLKR } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Health Checkup Packages — Transparent LKR Pricing",
  description:
    "Four curated health checkup packages from St. Luke's Medical Laboratory, Ja-Ela — Full Body Health Check, Joint Pain & Fatigue Profile, Kidney Health Profile and Diabetic Kidney Profile. Transparent LKR pricing, 24-hour reports.",
  alternates: { canonical: "/packages" },
};

const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Health Checkup Packages — St. Luke's Medical Laboratory",
  itemListElement: packages.map((p) => ({
    "@type": "Offer",
    name: p.name,
    priceCurrency: "LKR",
    price: String(p.priceLKR),
    itemOffered: { "@type": "MedicalTest", name: p.includes.join(", ") },
  })),
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JsonLd data={packagesSchema} />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Health Checkup Packages
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Proactive care tailored for your needs
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">
            Curated bundles of tests grouped by what you actually want to find out — designed to be useful, not gimmicky. Every package available with home sample collection across Ja-Ela &amp; nearby towns.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((p) => (
            <div
              key={p.slug}
              className={`rounded-3xl p-7 flex flex-col bg-white transition-all duration-300 ${
                p.recommended
                  ? "border-2 border-stLukes-500 shadow-2xl shadow-stLukes-500/10"
                  : "border border-slate-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {p.recommended && (
                <span className="inline-flex items-center gap-1 bg-stLukes-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-5">
                  <Star size={11} fill="currentColor" /> Recommended
                </span>
              )}
              <h2 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h2>
              <p className="text-stLukes-600 text-xs font-semibold uppercase tracking-wide mb-3">
                {p.tagline}
              </p>
              <div className="my-5">
                <span className="text-3xl font-bold text-slate-900">LKR {formatLKR(p.priceLKR)}</span>
                <span className="text-slate-500 font-medium text-sm">/package</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex-grow">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Includes</p>
                <ul className="space-y-2 mb-6">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.recommended ? "text-stLukes-500" : "text-slate-400"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tel:+94711231954"
                className={`w-full py-3 rounded-xl font-semibold mt-auto transition-colors flex items-center justify-center text-sm ${
                  p.recommended
                    ? "bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white shadow-lg shadow-stLukesRed-500/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Book this package
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Want a custom panel?</h2>
          <p className="text-slate-600 mb-4">
            Browse individual tests on our{" "}
            <Link href="/price-list" className="text-stLukes-600 underline">
              full price list
            </Link>{" "}
            or call to design a panel that matches your doctor&apos;s request.
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
