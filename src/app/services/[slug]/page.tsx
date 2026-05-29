import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { services, getService } from "@/lib/services";
import { locations } from "@/lib/locations";
import { SITE } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.name,
    description: svc.shortDesc,
    alternates: { canonical: `/services/${svc.slug}` },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": svc.schemaType,
    name: svc.name,
    description: svc.shortDesc,
    url: `${SITE}/services/${svc.slug}`,
    provider: { "@id": `${SITE}/#organization` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services/${svc.slug}` },
      { "@type": "ListItem", position: 3, name: svc.name, item: `${SITE}/services/${svc.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <JsonLd data={schema} />
      <JsonLd data={breadcrumb} />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-stLukes-50">
        <div className="mx-auto max-w-4xl">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-stLukes-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{svc.name}</span>
          </nav>
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Diagnostic Service
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            {svc.name}
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl">{svc.shortDesc}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">What it is</h2>
            <p className="text-slate-600">{svc.what}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Why it matters</h2>
            <p className="text-slate-600">{svc.why}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">How to prepare</h2>
            <p className="text-slate-600">{svc.preparation}</p>
          </div>

          <div className="p-8 rounded-3xl bg-stLukes-50 border border-stLukes-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Ready to book?</h2>
            <p className="text-slate-600 mb-4">
              See pricing on our{" "}
              <Link href="/price-list" className="text-stLukes-600 underline">
                price list
              </Link>{" "}
              or call to schedule a home visit.
            </p>
            <a
              href="tel:+94711231954"
              className="inline-flex items-center bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Call +94 71 123 1954
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Available across our service areas
            </h2>
            <div className="flex flex-wrap gap-2">
              {locations.map((l) => (
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

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Other services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {services
                .filter((s) => s.slug !== svc.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block p-5 rounded-2xl border border-slate-200 hover:border-stLukes-500 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-slate-900 mb-1">{s.name}</h3>
                    <p className="text-sm text-slate-600">{s.shortDesc}</p>
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
