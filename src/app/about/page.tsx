import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Clock, MapPin, Users, FlaskConical, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us — Trusted Medical Laboratory in Ja-Ela",
  description:
    "St. Luke's Medical Laboratory is an independent diagnostic lab in Ja-Ela, Sri Lanka — transparent LKR pricing, 24-hour reports, and home sample collection across Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama & Thudella.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Transparent pricing",
    body: "Every test price is published in LKR on our website. No hidden charges, no surprises at the counter.",
  },
  {
    icon: Clock,
    title: "24-hour reports",
    body: "Most reports — including routine blood tests, ECG and full-body panels — are ready within 24 hours and delivered digitally.",
  },
  {
    icon: MapPin,
    title: "Genuinely local",
    body: "We serve seven neighbouring towns by name — Ja-Ela, Kandana, Welisara, Ragama, Wattala, Batagama and Thudella.",
  },
  {
    icon: FlaskConical,
    title: "Modern equipment",
    body: "Our lab runs on internationally proven analyzers — BioSystems A15 biochemistry, CLIA immunoassay, Medonic hematology and Audicom electrolyte.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate care",
    body: "From walk-ins to nervous first-timers and elderly patients on home visits, every patient meets a friendly, professional team.",
  },
  {
    icon: Users,
    title: "Trusted by doctors",
    body: "Hundreds of partner physicians in the region rely on our reports to make confident clinical decisions for their patients.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE}/about`,
  name: "About St. Luke's Medical Laboratory",
  about: { "@id": `${SITE}/#organization` },
};

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JsonLd data={aboutSchema} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            About St. Luke&apos;s
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            A neighbourhood lab built around <span className="text-stLukes-500">trust, speed and clear pricing</span>.
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            St. Luke&apos;s Medical Laboratory is an independent diagnostic lab on Old Negombo Road, Ja-Ela. We believe great healthcare starts with two simple ideas — patients should know what a test costs before they pay for it, and reports should be back in their hands fast.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our story</h2>
          <p className="text-slate-700 leading-relaxed">
            We started St. Luke&apos;s because the people of Ja-Ela and the surrounding towns deserved a better lab. The national chains in Colombo don&apos;t publish their prices, don&apos;t name our towns, and treat patients like ticket numbers. We do the opposite — we publish every price in LKR, we serve seven local towns by name with home sample collection, and every patient gets the same standard of care our own families would expect.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Today our HQ in Ja-Ela runs a full panel of modern analyzers — BioSystems A15 biochemistry, CLIA immunoassay, Medonic hematology and Audicom electrolyte — and partners with hundreds of physicians across the region. Our Ja-Ela lab makes it easy to walk in, and our home-visit phlebotomists make it easy to never have to.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              What we stand for
            </h2>
            <p className="text-slate-600">
              Six commitments that shape every decision in this lab.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-stLukes-50 text-stLukes-500 flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Prices in LKR" },
              { value: "500+", label: "Partner Doctors" },
              { value: "24hr", label: "Report Turnaround" },
              { value: "10", label: "Towns Served" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-stLukes-500">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Visit us, or we&apos;ll come to you.
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Walk into our Ja-Ela headquarters at No. 67, Old Negombo Road, or book a home visit and a qualified phlebotomist will come to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+94711231954"
              className="inline-flex items-center justify-center bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-stLukesRed-500/25"
            >
              Call 071 123 1954
            </a>
            <Link
              href="/price-list"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 font-semibold px-8 py-3.5 rounded-full border border-slate-200"
            >
              See full price list
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
