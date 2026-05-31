import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientPriceList from "./ClientPriceList";
import { priceList } from "@/lib/priceList";

export const metadata: Metadata = {
  title: "Lab Test Price List (LKR) — Ja-Ela",
  description:
    "Transparent LKR pricing for all blood tests, profiles and panels at St. Luke's Medical Laboratory, Ja-Ela. No hidden charges.",
  alternates: { canonical: "/price-list" },
};

export default function PriceListPage() {
  const totalTests = priceList.reduce((n, c) => n + c.tests.length, 0);
  const totalCategories = priceList.length;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <div className="relative bg-[#051a0c] overflow-hidden pt-32 pb-16">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-stLukes-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-stLukes-600/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stLukes-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Lab Test Price List
          </h1>
          <p className="text-white/60 text-lg mb-8">
            All prices in LKR. No hidden charges. Home sample collection available across Ja-Ela &amp; nearby towns.
          </p>

          <div className="flex items-center justify-center gap-8 mb-6">
            {[
              { value: `${totalTests}+`, label: "Tests Available" },
              { value: `${totalCategories}`, label: "Categories" },
              { value: "LKR", label: "Currency" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-4"
          aria-hidden="true"
          style={{
            backgroundImage: "repeating-conic-gradient(#58b330 0% 25%, transparent 0% 50%)",
            backgroundSize: "16px 16px",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <ClientPriceList data={priceList} />
      </div>

      <Footer />
    </main>
  );
}
