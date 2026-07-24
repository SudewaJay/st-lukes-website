import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
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
  // Service-area towns (no walk-in branch) lead with the home-visit promise;
  // HQ / near towns can promise walk-in + home visits.
  const title = loc.isServiceArea
    ? `Blood Tests & Home Visits in ${loc.name} | St. Luke's Medical Lab`
    : `Medical Laboratory in ${loc.name} | Blood Tests & Home Visits`;
  const description = loc.isServiceArea
    ? `Home blood tests, ECG and full-body checkups in ${loc.name} — a qualified phlebotomist collects your sample at home or work, with 24hr digital reports and transparent LKR pricing. Call 071 123 1954.`
    : `St. Luke's Medical Laboratory serves ${loc.name} with blood tests, ECG, full-body checkups and home sample collection. 24hr reports, transparent LKR pricing. Call 071 123 1954.`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage(
  { params }: { params: Promise<{ town: string }> }
) {
  const { town } = await params;
  const loc = getLocation(town);
  if (!loc) notFound();

  // Service node for this area, linked back to the single org entity so we
  // never create competing duplicate MedicalBusiness records.
  const areaServed = [
    { "@type": "City", name: loc.name },
    ...(loc.neighbourhoods ?? []).map((n) => ({ "@type": "Place", name: n })),
  ];
  const schema = {
    ...medicalBusinessSchema,
    "@id": `${SITE}/locations/${loc.slug}#service`,
    name: `${medicalBusinessSchema.name} — ${loc.name}`,
    parentOrganization: { "@id": `${SITE}/#organization` },
    areaServed,
  };

  // Map: service-area towns centre on the town (honest — no branch there);
  // HQ and walk-in towns centre on the real Ja-Ela laboratory.
  const HQ_QUERY = "St. Luke's Medical Laboratory, No. 67 Old Negombo Road, Ja-Ela, Sri Lanka";
  const mapQuery = loc.isServiceArea ? `${loc.name}, Sri Lanka` : HQ_QUERY;
  const mapCaption = loc.isServiceArea
    ? `${loc.name} is a home-visit service area — our nearest laboratory is our Ja-Ela HQ (${loc.distanceFromHQ}).`
    : loc.isHQ
      ? "St. Luke's Medical Laboratory — No. 67, Old Negombo Road, Ja-Ela."
      : `Your nearest walk-in lab is our Ja-Ela HQ — and we come to you in ${loc.name} for home visits.`;
  const mapSectionHeading = loc.isServiceArea
    ? `Where we serve in ${loc.name}`
    : loc.isHQ
      ? "Find our laboratory"
      : `Your nearest St. Luke's laboratory`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE}/locations` },
      { "@type": "ListItem", position: 3, name: loc.name, item: `${SITE}/locations/${loc.slug}` },
    ],
  };

  const faqSchema =
    loc.faqs && loc.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE}/locations/${loc.slug}#faq`,
          mainEntity: loc.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JsonLd data={schema} />
      <JsonLd data={breadcrumb} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-stLukes-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-stLukes-600">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{loc.name}</span>
          </nav>
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            {loc.isHQ ? "Headquarters" : loc.isServiceArea ? "Home-Visit Service Area" : "Service Area"}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            {loc.isServiceArea
              ? `Blood Tests & Home Visits in ${loc.name}`
              : `Medical Laboratory in ${loc.name}`}
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">{loc.intro}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {loc.serviceAngle && (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Why {loc.name} patients choose St. Luke&apos;s
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">{loc.serviceAngle}</p>
            </>
          )}

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Blood Tests &amp; Diagnostics in {loc.name}
          </h2>
          <p className="text-slate-600 mb-6">
            From routine Complete Blood Count (CBC) and Lipid Profile to specialist Liver Function Test (LFT), Kidney Profile, Thyroid panels and Dengue NS1 — we cover the full range of testing {loc.name} residents need, with most reports back within 24 hours.
          </p>

          {loc.localFocus && loc.localFocus.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-slate-900 mt-8 mb-3">
                Most requested in {loc.name}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 mb-4">
                {loc.localFocus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stLukesRed-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            Home Sample Collection in {loc.name}
          </h2>
          <p className="text-slate-600 mb-4">
            {loc.isServiceArea ? (
              <>
                We don&apos;t run a walk-in branch in {loc.name} — instead a qualified phlebotomist comes to your home or office, collects the sample under proper conditions, and transports it to our Ja-Ela lab. {loc.distanceFromHQ}.
              </>
            ) : (
              <>
                A qualified phlebotomist will visit your home or office in {loc.name}. Samples are transported under temperature control to our Ja-Ela lab. {loc.distanceFromHQ}.
              </>
            )}
          </p>
          <p className="text-slate-600 mb-8">
            Book a home visit on{" "}
            <a href="tel:+94711231954" className="text-stLukes-600 font-semibold underline">
              071 123 1954
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            {mapSectionHeading}
          </h2>
          <div className="mb-12">
            <LocationMap
              query={mapQuery}
              caption={mapCaption}
              title={`Map of ${loc.name} — St. Luke's Medical Laboratory`}
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
            {loc.neighbourhoods && loc.neighbourhoods.length > 0
              ? `Neighbourhoods & landmarks we serve in ${loc.name}`
              : `Local landmarks we serve in ${loc.name}`}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 mb-6">
            {(loc.neighbourhoods && loc.neighbourhoods.length > 0
              ? loc.neighbourhoods
              : loc.landmarks
            ).map((lm) => (
              <li key={lm} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stLukes-500" />
                {lm}
              </li>
            ))}
          </ul>
          {loc.neighbourhoods && loc.neighbourhoods.length > 0 && (
            <p className="text-sm text-slate-500 mb-12">
              Key landmarks nearby: {loc.landmarks.join(", ")}.
            </p>
          )}

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

          {loc.faqs && loc.faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {loc.name} — frequently asked questions
              </h2>
              <div className="space-y-4">
                {loc.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-slate-200 p-5 open:border-stLukes-300 open:bg-stLukes-50/40"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-start justify-between gap-4">
                      {f.q}
                      <span className="text-stLukes-500 transition-transform group-open:rotate-45 shrink-0">+</span>
                    </summary>
                    <p className="text-slate-600 mt-3 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Need a test in {loc.name}?
            </h2>
            <p className="text-slate-600 mb-4">
              See our full <Link href="/price-list" className="text-stLukes-600 underline">price list</Link>{" "}
              or explore our <Link href="/packages" className="text-stLukes-600 underline">health packages</Link>, then call us to book a home visit.
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
