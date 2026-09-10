import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Clock } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import ClientPriceList from "./ClientPriceList";
import { priceList, allTests } from "@/lib/priceList";

export const metadata: Metadata = {
  title: "Lab Test Price List (LKR) — Ja-Ela",
  description:
    "Transparent LKR pricing for all blood tests, profiles and panels at St. Luke's Medical Laboratory, Ja-Ela. No hidden charges.",
  alternates: { canonical: "/price-list" },
};

export default function PriceListPage() {
  const totalTests = allTests.length;
  const cheapest = Math.min(...allTests.map((t) => t.price));

  return (
    <PageShell>
      <section className="border-b border-border bg-brand-primary-soft pb-12 pt-28 md:pb-14 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Transparent pricing</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            Every price, published.
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
        <ClientPriceList data={priceList} />
      </div>

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
