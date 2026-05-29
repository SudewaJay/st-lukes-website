"use client";

import Image from "next/image";
import { useState } from "react";
import { Cpu, FlaskConical, Microscope, Activity, Droplets } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { analyzers, type Analyzer } from "@/lib/analyzers";

const FALLBACK_ICON: Record<string, typeof Cpu> = {
  Immunoassay: Microscope,
  Biochemistry: FlaskConical,
  Electrolytes: Activity,
  Hematology: Droplets,
};

function AnalyzerImage({ a }: { a: Analyzer }) {
  const [errored, setErrored] = useState(false);
  const Icon = FALLBACK_ICON[a.category] ?? Cpu;

  if (errored) {
    return (
      <div className="aspect-[4/3] w-full bg-gradient-to-br from-stLukes-50 to-stLukes-100 flex items-center justify-center">
        <Icon size={72} className="text-stLukes-500/70" />
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full bg-slate-100 relative">
      <Image
        src={a.image}
        alt={`${a.name} used at St. Luke's Medical Laboratory`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

export default function Analyzers() {
  return (
    <section className="py-24 bg-white" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">
              Our Lab Technology
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Powered by world-class diagnostic analyzers
            </h3>
            <p className="text-slate-600 text-lg">
              Every sample we process is run on internationally proven, fully
              automated equipment — so your results are accurate, repeatable
              and back in your hands within 24 hours.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyzers.map((a, i) => (
            <ScrollReveal key={a.slug} delay={i * 0.1}>
              <article className="h-full flex flex-col rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden hover:shadow-xl hover:border-stLukes-100 transition-all duration-300">
                <AnalyzerImage a={a} />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider text-stLukes-600 bg-stLukes-50 px-2 py-1 rounded-full mb-3">
                    {a.category}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {a.name}
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">{a.manufacturer}</p>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    {a.description}
                  </p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Key tests
                    </p>
                    <ul className="space-y-1">
                      {a.tests.map((t) => (
                        <li
                          key={t}
                          className="text-xs text-slate-600 flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-stLukes-500 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center text-sm text-slate-500 mt-10 max-w-2xl mx-auto">
            All analyzers are calibrated daily and run alongside internal &amp;
            external quality-control samples to guarantee accuracy.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
