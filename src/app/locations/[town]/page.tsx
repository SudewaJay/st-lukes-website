import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { locations, getLocation } from "@/lib/locations";
import { medicalBusinessSchema, SITE } from "@/lib/seo";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return locations.map((l) => ({ town: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ town: string }> }
): Promise<Metadata> {
  const { town } = await params;
  const loc = getLocation(town);
  if (!loc) return {};
  return {
    title: `Medical Laboratory in ${loc.name} | Blood Tests & Home Visits`,
    description: `St. Luke's Medical Laboratory serves ${loc.name} with blood tests, ECG, full-body checkups and home sample collection. 24hr reports, transparent LKR pricing. Call 071 123 1954.`,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage(
  { params }: { params: Promise<{ town: string }> }
) {
  const { town } = await params;
  const loc = getLocation(town);
  if (!loc) notFound();

  const schema = {
    ...medicalBusinessSchema,
    "@id": `${SITE}/locations/${loc.slug}#service`,
    areaServed: { "@type": "City", name: loc.name },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE}/locations/${loc.slug}` },
      { "@type": "ListItem", position: 3, name: loc.name, item: `${SITE}/locations/${loc.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JsonLd data={schema} />
      <JsonLd data={breadcrumb} />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-stLukes-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Locations</span>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{loc.name}</span>
          </nav>
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {loc.isHQ ? "Headquarters" : "Service Area"}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Medical Laboratory in {loc.name}
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">{loc.intro}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Blood Tests &amp; Diagnostics in {loc.name}
          </h2>
          <p className="text-slate-600 mb-6">
            From routine Complete Blood Count (CBC) and Lipid Profile to specialist Liver Function Test (LFT), Kidney Profile, Thyroid panels and Dengue NS1 — we cover the full range of testing {loc.name} residents need, with most reports back within 24 hours.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Home Sample Collection in {loc.name}
          </h2>
          <p className="text-slate-600 mb-4">
            A qualified phlebotomist will visit your home or office in {loc.name}. Samples are transported under temperature control to our Ja-Ela lab. {loc.distanceFromHQ}.
          </p>
          <p className="text-slate-600 mb-8">
            Book a home visit on{" "}
            <a href="tel:+94711231954" className="text-stLukes-600 font-semibold underline">
              071 123 1954
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Local landmarks we serve in {loc.name}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 mb-12">
            {loc.landmarks.map((lm) => (
              <li key={lm} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stLukes-500" />
                {lm}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Popular services in {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="block p-5 rounded-2xl border border-slate-200 hover:border-stLukes-500 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900 mb-1">{svc.name}</h3>
                <p className="text-sm text-slate-600">{svc.shortDesc}</p>
              </Link>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Need a test in {loc.name}?
            </h2>
            <p className="text-slate-600 mb-4">
              See our full <Link href="/price-list" className="text-stLukes-600 underline">price list</Link> or call us to book a home visit.
            </p>
            <a
              href="tel:+94711231954"
              className="inline-flex items-center bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Call 071 123 1954
            </a>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Other areas we serve</h2>
            <div className="flex flex-wrap gap-2">
              {locations
                .filter((l) => l.slug !== loc.slug)
                .map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-stLukes-100 text-sm font-medium text-slate-700 hover:text-stLukes-700 transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
