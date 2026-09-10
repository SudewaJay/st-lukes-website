import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EquipmentShowcase from "./EquipmentShowcase";

/**
 * Homepage technology band. Shares the showcase with /technology so there is
 * one equipment interaction on the site, not two that behave differently.
 */
export default function Analyzers() {
  return (
    <section className="section-padding bg-surface-soft" id="technology">
      <div className="container-content">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Our lab technology</p>
          <h2 className="type-h2 text-text-primary">
            Equipment patients can actually see.
          </h2>
          <p className="mt-4 type-body-large">
            Every sample runs on a fully automated, internationally proven
            analyzer, calibrated daily against quality-control samples.
          </p>
        </div>

        <EquipmentShowcase />

        <p className="mt-8">
          <Link
            href="/technology"
            className="link-cta link-reveal text-sm"
          >
            How we keep them accurate
            <ArrowRight size={14} className="btn-arrow" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
