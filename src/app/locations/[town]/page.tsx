import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Phone, Home, MessageCircle, Clock } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { LocationMap } from "@/components/LocationMap";
import { getLocation, locations } from "@/lib/locations";
import { SITE, medicalBusinessSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return locations.map((loc) => ({ town: loc.slug }));
}

type Props = {
  params: Promise<{ town: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const loc = getLocation(p.town);
  if (!loc) return {};

  return {
    title: `Medical Laboratory & Blood Tests in ${loc.name}`,
    description: loc.intro,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

const DEFAULT_TESTS = [
  "Full Blood Count (FBC)",
  "Fasting Blood Sugar (FBS)",
  "Lipid Profile (Cholesterol)",
  "Liver Function Test (LFT)",
  "Renal / Kidney Profile",
  "Dengue NS1 Antigen",
];

const bookingSteps = (town: string) => [
  "Call or WhatsApp us with the tests you need.",
  "We confirm the published LKR price and book a time.",
  `Our phlebotomist visits your address in ${town}.`,
  "Most reports are ready within 24 hours, delivered digitally.",
];

export default async function LocationPage({ params }: Props) {
  const p = await params;
  const loc = getLocation(p.town);
  if (!loc) notFound();

  const schema = {
    ...medicalBusinessSchema,
    "@id": `${SITE}/locations/${loc.slug}#organization`,
    areaServed: { "@type": "City", name: loc.name },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: loc.name,
        item: `${SITE}/locations/${loc.slug}`,
      },
    ],
  };

  // Per-town FAQPage schema, built from this town's own unique questions.
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

  const nearby = locations.filter((l) => l.slug !== loc.slug).slice(0, 6);

  return (
    <PageShell>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <Link
            href="/locations"
            className="group mb-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-dark"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All service areas
          </Link>

          <p className="eyebrow mb-4 flex items-center gap-2">
            {loc.isServiceArea ? (
              <>
                <Home size={13} aria-hidden="true" /> Home visit service area
              </>
            ) : (
              <>
                <Building2 size={13} aria-hidden="true" /> Walk-in &amp; home visits
              </>
            )}
          </p>

          <h1 className="type-h1 max-w-3xl text-text-primary">
            Medical lab &amp; blood tests in{" "}
            <span className="text-brand-primary-dark">{loc.name}</span>
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">{loc.blurb}</p>

          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5 text-sm">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                {loc.isHQ ? "Our address" : "Distance from our lab"}
              </dt>
              <dd className="mt-1.5 font-medium text-text-primary">
                {loc.isHQ
                  ? "No. 67, Old Negombo Road, Ja-Ela"
                  : loc.distanceFromHQ}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Opening hours
              </dt>
              <dd className="mt-1.5 font-medium text-text-primary">
                Mon–Sat 07:00–19:30 · Sun 07:30–12:30
              </dd>
            </div>
            {loc.postcode && (
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Postcode
                </dt>
                <dd className="mt-1.5 font-medium text-text-primary tabular-nums">
                  {loc.postcode}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="type-h2 text-text-primary">
              Diagnostics in {loc.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              {loc.intro}
            </p>
            {loc.serviceAngle && (
              <p className="mt-4 leading-relaxed text-text-secondary">
                {loc.serviceAngle}
              </p>
            )}

            {loc.neighbourhoods && loc.neighbourhoods.length > 0 && (
              <>
                <h2 className="type-h3 mt-12 text-text-primary">
                  Areas we cover in {loc.name}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {loc.neighbourhoods.map((n) => (
                    <li
                      key={n}
                      className="rounded-lg bg-brand-primary-soft px-3 py-1.5 text-sm text-brand-primary-darker"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {loc.landmarks && loc.landmarks.length > 0 && (
              <p className="mt-6 text-sm text-text-muted">
                Nearby landmarks: {loc.landmarks.join(" · ")}
              </p>
            )}

            <h2 className="type-h3 mt-12 text-text-primary">
              Commonly requested in {loc.name}
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {(loc.localFocus ?? DEFAULT_TESTS).map((test) => (
                <li
                  key={test}
                  className="rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm font-medium text-text-secondary"
                >
                  {test}
                </li>
              ))}
            </ul>
            <p className="mt-5">
              <Link
                href="/price-list"
                className="link-cta link-reveal text-sm"
              >
                See every test price in LKR
                <ArrowRight size={14} className="btn-arrow" aria-hidden="true" />
              </Link>
            </p>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface-soft p-6">
              <h2 className="type-h3 text-text-primary">
                Book a home visit in {loc.name}
              </h2>
              <ol className="mt-5 space-y-3.5">
                {bookingSteps(loc.name).map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span className="type-numeric flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark text-[11px] font-bold text-text-inverse">
                      {i + 1}
                    </span>
                    <span className="mt-0.5 text-text-secondary">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:+94711231954"
                  className="btn btn-primary w-full !text-sm"
                  data-track="phone_click"
                >
                  <Phone size={15} aria-hidden="true" />
                  Call 071 123 1954
                </a>
                <a
                  href={`https://wa.me/94711231954?text=${encodeURIComponent(
                    `Hi, I'm in ${loc.name} and need to book a home visit.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full !text-sm"
                  data-track="whatsapp_click"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-text-muted">
                <Clock size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                Fasting tests are best booked early morning.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                {loc.isHQ ? "Find us" : "Where your sample is processed"}
              </h2>
              <LocationMap
                query={
                  loc.mapQuery ??
                  "St. Luke's Medical Laboratory, No. 67 Old Negombo Road, Ja-Ela, Sri Lanka"
                }
                caption={
                  loc.isHQ
                    ? "Our central processing facility"
                    : "Our nearest processing facility"
                }
                title={
                  loc.isHQ
                    ? `Map of St. Luke's Medical Laboratory, ${loc.name}`
                    : "Map of St. Luke's Medical Laboratory, Ja-Ela"
                }
              />
            </div>
          </aside>
        </div>
      </section>

      {loc.faqs && loc.faqs.length > 0 && (
        <section className="section-padding bg-surface-soft">
          <div className="container-content max-w-3xl">
            <p className="eyebrow mb-3">Questions</p>
            <h2 className="type-h2 mb-8 text-text-primary">
              Frequently asked about {loc.name}
            </h2>
            <Accordion items={loc.faqs} />
          </div>
        </section>
      )}

      <section className="border-t border-border bg-surface py-12">
        <div className="container-content">
          <h2 className="mb-4 text-sm font-semibold text-text-muted">
            Also serving nearby towns
          </h2>
          <ul className="flex flex-wrap gap-2">
            {nearby.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/locations/${other.slug}`}
                  className="flex min-h-11 items-center rounded-lg border border-border bg-surface px-3.5 text-sm font-medium text-text-secondary transition-colors hover:border-brand-primary-dark hover:text-brand-primary-dark"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
