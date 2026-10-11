import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Clock } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import ClientPriceList from "./ClientPriceList";
import { priceList, allTests, findTest, formatLKR } from "@/lib/priceList";
import { testPages, headlineTest, testPageSlugMap } from "@/lib/testPages";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

const YEAR = new Date().getFullYear();

// Search snippets show these, so lead with the prices people search for most.
const SNIPPET_TESTS = [
  ["FBC", "Full Blood Count (FBC)"],
  ["FBS", "Fasting Blood Sugar (FBS)"],
  ["UFR", "Urine Full Report (UFR)"],
  ["TSH", "TSH"],
  ["HbA1c", "HbA1C"],
] as const;

const snippetPrices = SNIPPET_TESTS.map(([label, name]) => {
  const t = findTest(name);
  return t ? `${label} LKR ${formatLKR(t.price)}` : null;
})
  .filter(Boolean)
  .join(" · ");

export const metadata: Metadata = {
  title: {
    absolute: `Blood Test Prices in Sri Lanka ${YEAR} (LKR) | St. Luke's Lab`,
  },
  description: `${snippetPrices} — every lab test price in LKR at St. Luke's Medical Laboratory, Ja-Ela. Home collection at the same price, most reports in 24 hours.`,
  alternates: { canonical: "/price-list" },
};

const popular = testPages
  .map((page) => ({ page, head: headlineTest(page) }))
  .filter((p) => p.head);

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Price List", item: `${SITE}/price-list` },
  ],
};

const catalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Lab test price list (LKR)",
  url: `${SITE}/price-list`,
  itemListElement: allTests.map((t) => ({
    "@type": "Offer",
    price: t.price,
    priceCurrency: "LKR",
    itemOffered: { "@type": "MedicalTest", name: t.name },
    seller: { "@id": `${SITE}/#organization` },
  })),
};

export default function PriceListPage() {
  const totalTests = allTests.length;
  const cheapest = Math.min(...allTests.map((t) => t.price));

  return (
    <PageShell>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={catalogSchema} />
      <section className="border-b border-border bg-brand-primary-soft pb-12 pt-28 md:pb-14 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Every price, published</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            Blood &amp; lab test prices in Sri Lanka
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            The national chains will not tell you what a test costs until you
            are standing at their counter. Here is our entire list, in LKR, with
            no hidden charges.
          </p>

          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Tests listed
              </dt>
              <dd className="type-numeric mt-1 text-2xl font-bold text-text-primary">
                {totalTests}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Categories
              </dt>
              <dd className="type-numeric mt-1 text-2xl font-bold text-text-primary">
                {priceList.length}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                From
              </dt>
              <dd className="type-numeric mt-1 text-2xl font-bold text-text-primary">
                LKR {cheapest}
              </dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <Home size={15} className="text-brand-primary-dark" aria-hidden="true" />
              Home collection at the same price
            </li>
            <li className="flex items-center gap-2">
              <Clock size={15} className="text-brand-primary-dark" aria-hidden="true" />
              Most reports within 24 hours
            </li>
          </ul>
        </div>
      </section>

      <div className="container-content py-10 md:py-12">
        <ClientPriceList data={priceList} slugMap={testPageSlugMap} />
      </div>

      <section className="border-t border-border bg-surface">
        <div className="container-content py-12 md:py-14">
          <h2 className="type-h2 text-text-primary">Popular tests: price &amp; preparation</h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            What each test is for, whether you need to fast, and what it costs.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map(({ page, head }) => (
              <li key={page.slug}>
                <Link
                  href={`/price-list/${page.slug}`}
                  className="group flex min-h-14 items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-3.5 transition-colors hover:border-brand-primary-dark"
                >
                  <span className="font-semibold text-text-primary group-hover:text-brand-primary-dark">
                    {page.shortName} test price
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="type-numeric text-sm font-semibold text-text-secondary">
                      LKR {formatLKR(head!.price)}
                    </span>
                    <ArrowRight
                      size={15}
                      className="text-text-muted transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface-soft">
        <div className="container-content flex flex-col items-start justify-between gap-5 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="type-h3 text-text-primary">
              Several tests at once? A package may cost less.
            </h2>
            <p className="mt-2 max-w-lg text-text-secondary">
              Our bundled health screens group the tests people usually order
              together at one fixed price.
            </p>
          </div>
          <Link href="/packages" className="btn btn-primary shrink-0">
            Compare packages
            <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
