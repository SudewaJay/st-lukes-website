import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { analyzers } from "@/lib/analyzers";

export const metadata: Metadata = {
  title: "Lab Technology — Our Diagnostic Analyzers",
  description:
    "St. Luke's Medical Laboratory in Ja-Ela runs internationally proven diagnostic analyzers — CLIA immunoassay, BioSystems A15 biochemistry, Audicom electrolyte and Medonic hematology.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Lab Technology
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Powered by world-class diagnostic analyzers
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">
            Every sample we process is run on fully automated, internationally proven equipment — so your results are accurate, repeatable, and back in your hands within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {analyzers.map((a, i) => (
            <article
              key={a.slug}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src={a.image}
                  alt={`${a.name} used at St. Luke's Medical Laboratory`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-stLukes-600 bg-stLukes-50 px-2.5 py-1 rounded-full mb-3">
                  {a.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-snug">
                  {a.name}
                </h2>
                <p className="text-sm text-slate-500 mb-4">{a.manufacturer}</p>
                <p className="text-slate-700 leading-relaxed mb-5">{a.description}</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key tests
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4">
                    {a.tests.map((t) => (
                      <li key={t} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-stLukes-500 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Quality control matters</h2>
          <p className="text-slate-600 mb-4">
            All analyzers are calibrated daily and run alongside internal &amp; external quality-control samples. That&apos;s how we guarantee the accuracy your physician relies on.
          </p>
          <Link
            href="/price-list"
            className="inline-flex items-center bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            See test prices
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
