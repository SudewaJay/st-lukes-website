import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testCount } from "@/lib/priceList";
import TestFinder from "@/components/TestFinder";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HomePricing() {
  return (
    <section className="section-padding bg-surface" id="pricing-preview">
      <div className="container-content">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="Know the price before you visit."
          description="Every test price is published in LKR — no hidden charges, no surprises at the counter."
          action={
            <Link
              href="/price-list"
              className="link-cta text-sm"
              data-track="price_view"
            >
              All {testCount} test prices
              <ArrowRight size={16} className="btn-arrow" />
            </Link>
          }
        />
        <TestFinder variant="compact" />
      </div>
    </section>
  );
}
