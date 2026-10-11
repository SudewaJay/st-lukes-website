import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Phone,
  MessageCircle,
  Home,
  FileText,
  Check,
} from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { SITE, NAP } from "@/lib/seo";
import { formatLKR } from "@/lib/priceList";
import {
  testPages,
  getTestPage,
  resolveTests,
  headlineTest,
  type TestPage,
} from "@/lib/testPages";
import { getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return testPages.map((t) => ({ slug: t.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const prepLine = (page: TestPage) =>
  page.fasting ? "Fast 8–12 hours beforehand." : "No fasting needed.";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const page = getTestPage(p.slug);
  const head = page && headlineTest(page);
  if (!page || !head) return {};

  const price = `LKR ${formatLKR(head.price)}`;
  return {
    title: {
      absolute: `${page.shortName} Test Price in Sri Lanka — ${price} | St. Luke's Lab`,
    },
    description: `${page.shortName} test at St. Luke's Medical Laboratory, Ja-Ela: ${price}. ${prepLine(page)} Most reports within 24 hours, home collection at the same price. Call ${NAP.phoneDisplay}.`,
    alternates: { canonical: `/price-list/${page.slug}` },
    openGraph: {
      title: `${page.shortName} Test Price in Sri Lanka — ${price}`,
      description: page.summary,
      url: `${SITE}/price-list/${page.slug}`,
    },
  };
}

export default async function TestPricePage({ params }: Props) {
  const p = await params;
  const page = getTestPage(p.slug);
  if (!page) notFound();
  const tests = resolveTests(page);
  const head = tests[0];
  if (!head || head.name !== page.testNames[0]) notFound();

  const extras = tests.slice(1);
  const guide = page.guide ? await getPost(page.guide) : undefined;
  const related = page.related
    .map((slug) => getTestPage(slug))
    .filter((t): t is TestPage => Boolean(t))
    .map((t) => ({ page: t, head: headlineTest(t) }))
    .filter((r) => r.head);

  const url = `${SITE}/price-list/${page.slug}`;
  const price = `LKR ${formatLKR(head.price)}`;

  // Price + preparation FAQs are generated from data so they never drift
  // from the price list.
  const faqs = [
    {
      q: `How much does a ${page.shortName} test cost in Sri Lanka?`,
      a: `At St. Luke's Medical Laboratory in Ja-Ela, the ${head.name} costs ${price}. That is the published counter price — home sample collection is available at the same price across the towns we serve.`,
    },
    {
      q: `Do I need to fast for a ${page.shortName} test?`,
      a: page.preparation,
    },
    {
      q: "How soon will I get my report?",
      a: "Most reports are ready within 24 hours and can be shared digitally.",
    },
    ...page.faqs,
  ];

  const testSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    "@id": `${url}#test`,
    name: head.name,
    alternateName: page.aliases,
    description: page.what,
    url,
    relevantSpecialty: "Pathology",
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    itemOffered: { "@id": `${url}#test` },
    price: head.price,
    priceCurrency: "LKR",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${SITE}/#organization` },
    url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Price List",
        item: `${SITE}/price-list`,
      },
      { "@type": "ListItem", position: 3, name: page.shortName, item: url },
    ],
  };

  const waText = encodeURIComponent(
    `Hi, I'd like to book a ${head.name} test (${price}).`,
  );

  return (
    <PageShell>
      <JsonLd data={testSchema} />
      <JsonLd data={offerSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbs} />

      <section className="border-b border-border bg-brand-primary-soft pb-12 pt-28 md:pb-14 md:pt-32">
        <div className="container-content">
          <Link
            href="/price-list"
            className="group mb-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary-dark"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Full price list
          </Link>

          <p className="eyebrow mb-4">{head.category}</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            {page.shortName} Test Price in Sri Lanka
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">{page.summary}</p>

          <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Price at St. Luke&apos;s, Ja-Ela
              </p>
              <p className="type-numeric mt-1 text-4xl font-bold text-text-primary md:text-5xl">
                {price}
              </p>
              {head.was && (
                <p className="mt-1 text-sm text-text-muted">
                  Reduced from <s>LKR {formatLKR(head.was)}</s>
                </p>
              )}
            </div>
            <ul className="flex flex-col gap-2 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <Clock size={15} className="text-brand-primary-dark" aria-hidden="true" />
                {prepLine(page)}
              </li>
              <li className="flex items-center gap-2">
                <FileText size={15} className="text-brand-primary-dark" aria-hidden="true" />
                Most reports within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <Home size={15} className="text-brand-primary-dark" aria-hidden="true" />
                Home collection at the same price
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/94711231954?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-track="whatsapp_click"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Book on WhatsApp
            </a>
            <a href={`tel:${NAP.phone}`} className="btn btn-secondary" data-track="phone_click">
              <Phone size={17} aria-hidden="true" />
              Call {NAP.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="type-h2 text-text-primary">
              What the {page.shortName} test measures
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">{page.what}</p>
            {page.aliases.length > 0 && (
              <p className="mt-3 text-sm text-text-muted">
                Also known as: {page.aliases.join(", ")}.
              </p>
            )}

            <h2 className="type-h2 mt-12 text-text-primary">
              Why doctors order it
            </h2>
            <ul className="mt-5 space-y-3">
              {page.whyOrdered.map((reason) => (
                <li key={reason} className="flex gap-3 text-text-secondary">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-primary-dark"
                    aria-hidden="true"
                  />
                  {reason}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-border-brand bg-brand-primary-soft p-6 md:p-8">
              <h2 className="type-h3 flex items-center gap-2.5 text-text-primary">
                <Clock size={20} className="text-brand-primary-dark" aria-hidden="true" />
                How to prepare
              </h2>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {page.preparation}
              </p>
            </div>

            {extras.length > 0 && (
              <>
                <h2 className="type-h2 mt-12 text-text-primary">
                  Related tests &amp; prices
                </h2>
                <ul className="mt-5 divide-y divide-border rounded-2xl border border-border">
                  {tests.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-center justify-between gap-4 px-5 py-3.5"
                    >
                      <span className="text-[15px] font-medium text-text-primary">
                        {t.name}
                      </span>
                      <span className="type-numeric shrink-0 font-semibold text-text-primary">
                        LKR {formatLKR(t.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="type-h2 mt-12 text-text-primary">
              Common questions
            </h2>
            <div className="mt-5">
              <Accordion items={faqs} />
            </div>

            {guide && (
              <Link
                href={`/blog/${guide.slug}`}
                className="group mt-10 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface-soft p-6 transition-colors hover:border-brand-primary-dark"
              >
                <span>
                  <span className="eyebrow mb-1 block">In-depth guide</span>
                  <span className="font-semibold text-text-primary">{guide.title}</span>
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-brand-primary-dark transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}

            <p className="mt-10 text-xs leading-relaxed text-text-muted">
              This page is general information, not medical advice. Only your
              doctor can interpret your result. Prices are subject to change —
              confirm when you book.
            </p>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface-soft p-6">
              <h2 className="type-h3 text-text-primary">
                Book a {page.shortName} test
              </h2>
              <p className="mt-2 text-sm text-text-secondary">
                Walk in at {NAP.street}, {NAP.city}, or book a home visit.
                Mon–Sat 7:00am–7:30pm, Sun 7:30am–12:30pm.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/94711231954?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full !text-sm"
                  data-track="whatsapp_click"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp us
                </a>
                <a
                  href={`tel:${NAP.phone}`}
                  className="btn btn-secondary w-full !text-sm"
                  data-track="phone_click"
                >
                  <Phone size={15} aria-hidden="true" />
                  Call {NAP.phoneDisplay}
                </a>
                <Link href="/packages" className="btn btn-ghost w-full !text-sm">
                  Compare health packages
                  <ArrowRight size={14} className="btn-arrow" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {related.length > 0 && (
              <nav
                className="rounded-2xl border border-border bg-surface p-6"
                aria-label="Related test prices"
              >
                <h2 className="type-h4 text-text-primary">Often tested with</h2>
                <ul className="mt-4 divide-y divide-border">
                  {related.map(({ page: r, head: rh }) => (
                    <li key={r.slug}>
                      <Link
                        href={`/price-list/${r.slug}`}
                        className="group flex min-h-11 items-center justify-between gap-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary-dark"
                      >
                        {r.shortName}
                        <span className="flex items-center gap-2">
                          <span className="type-numeric text-text-primary">
                            LKR {formatLKR(rh!.price)}
                          </span>
                          <ArrowRight
                            size={14}
                            className="shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
