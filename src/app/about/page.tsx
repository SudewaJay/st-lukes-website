import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  MapPin,
  FlaskConical,
  HeartHandshake,
  FileText,
  Phone,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";
import { locations } from "@/lib/locations";
import { testCount } from "@/lib/priceList";
import { analyzers } from "@/lib/analyzers";

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
    body: "Every test price is published in LKR on this website. No hidden charges, and nothing you only find out at the counter.",
  },
  {
    icon: Clock,
    title: "24-hour reports",
    body: "Most reports, including routine blood tests, ECG and full-body panels, are ready within 24 hours and delivered digitally.",
  },
  {
    icon: MapPin,
    title: "Genuinely local",
    body: `We name the ${locations.length} towns we actually serve, from Ja-Ela up to Negombo, with home sample collection along the whole corridor.`,
  },
  {
    icon: FlaskConical,
    title: "Modern equipment",
    body: `Samples run on ${analyzers.length} internationally proven analyzers — biochemistry, immunoassay, haematology and electrolyte — calibrated daily.`,
  },
  {
    icon: HeartHandshake,
    title: "Compassionate care",
    body: "Walk-ins, nervous first-timers and elderly patients on home visits all meet the same professional team.",
  },
  {
    icon: FileText,
    title: "Reports you can share",
    body: "Results are delivered digitally in a format your physician can read, so you are never the one carrying paper between clinics.",
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
    <PageShell>
      <JsonLd data={aboutSchema} />

      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">About St. Luke&apos;s</p>
          <h1 className="type-h1 max-w-4xl text-text-primary">
            A neighbourhood lab built around{" "}
            <span className="text-brand-primary-dark">
              trust, speed and clear pricing
            </span>
            .
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            St. Luke&apos;s Medical Laboratory is an independent diagnostic lab
            on Old Negombo Road, Ja-Ela. Two ideas run the place: you should
            know what a test costs before you pay for it, and your report should
            come back fast.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">Our story</h2>
            <p className="mt-5 leading-relaxed text-text-secondary">
              We started St. Luke&apos;s because Ja-Ela and the towns around it
              deserved a better laboratory. The national chains in Colombo do
              not publish their prices, do not name our towns, and treat
              patients like ticket numbers.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              We do the opposite. Every price is published in LKR. We serve{" "}
              {locations.length} local towns by name with home sample
              collection. And every patient gets the standard of care we would
              want for our own families.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Our Ja-Ela headquarters runs a full panel of modern analyzers and
              works with physicians across the region. Walking in is easy. So is
              never having to.
            </p>
          </div>

          <div className="media-frame relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/hero-photo.jpeg"
              alt="Inside the St. Luke's Medical Laboratory diagnostic centre in Ja-Ela"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Only facts the rest of the site can substantiate. */}
      <section className="border-y border-border bg-surface-soft py-12">
        <div className="container-content">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "100%", label: "Prices published in LKR" },
              { value: "24hr", label: "Typical report turnaround" },
              { value: String(locations.length), label: "Towns served" },
              { value: String(testCount), label: "Tests on the public list" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="type-numeric block text-3xl font-bold text-brand-primary-dark md:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-text-muted">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content">
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="eyebrow mb-3">What we stand for</p>
            <h2 className="type-h2 text-text-primary">
              Six commitments that shape every decision here.
            </h2>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 0.05}>
                <div className="h-full border-t border-border pt-6">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary-dark">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="type-h4 text-text-primary">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">
              Visit us, or we&apos;ll come to you.
            </h2>
            <p className="mt-3 text-text-secondary">
              Walk into our Ja-Ela headquarters at No. 67, Old Negombo Road, or
              book a home visit and a qualified phlebotomist will come to your
              door.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="tel:+94711231954" className="btn btn-primary" data-track="phone_click">
              <Phone size={16} aria-hidden="true" />
              Call 071 123 1954
            </a>
            <Link href="/price-list" className="btn btn-secondary">
              See the price list
              <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
