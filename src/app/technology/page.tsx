import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCw, FileCheck } from "lucide-react";
import { PageShell } from "@/components/ui/PageShell";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import { Reveal } from "@/components/ui/Reveal";
import { analyzers } from "@/lib/analyzers";

export const metadata: Metadata = {
  title: "Lab Technology — Our Diagnostic Analyzers",
  description:
    "St. Luke's Medical Laboratory in Ja-Ela runs internationally proven diagnostic analyzers — CLIA immunoassay, BioSystems A15 biochemistry, Audicom electrolyte and Medonic hematology.",
  alternates: { canonical: "/technology" },
};

const quality = [
  {
    icon: RefreshCw,
    title: "Calibrated daily",
    body: "Every analyzer is calibrated at the start of each working day, before a single patient sample is run.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-control samples",
    body: "Known-value control samples run alongside patient samples, so a drifting instrument is caught the same day.",
  },
  {
    icon: FileCheck,
    title: "Fully automated",
    body: "Automated platforms remove the manual steps where human error creeps into a result.",
  },
];

export default function TechnologyPage() {
  return (
    <PageShell>
      <section className="border-b border-border bg-brand-primary-soft pb-14 pt-28 md:pt-32">
        <div className="container-content">
          <p className="eyebrow mb-4">Lab technology</p>
          <h1 className="type-h1 max-w-3xl text-text-primary">
            The instruments behind your result.
          </h1>
          <p className="mt-5 max-w-2xl type-body-large">
            Most laboratories will not tell you what your sample was run on. Here
            are all {analyzers.length} of ours, what each one measures, and how we
            keep them honest.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content">
          <EquipmentShowcase />
        </div>
      </section>

      <section className="section-padding bg-surface-dark text-text-inverse">
        <div className="container-content">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow eyebrow-invert mb-3">Quality control</p>
            <h2 className="type-h2 text-white">
              An analyzer is only as good as its last calibration.
            </h2>
          </div>

          <ul className="grid gap-6 md:grid-cols-3">
            {quality.map((q, i) => {
              const Icon = q.icon;
              return (
                <Reveal as="li" key={q.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/15 text-brand-primary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="type-h4 text-white">{q.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                      {q.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="type-h2 text-text-primary">
              See what each test costs.
            </h2>
            <p className="mt-3 text-text-secondary">
              Every test these analyzers run is on our public price list, in LKR.
            </p>
          </div>
          <Link href="/price-list" className="btn btn-primary shrink-0">
            View test prices
            <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
