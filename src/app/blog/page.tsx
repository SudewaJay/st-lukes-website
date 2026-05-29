import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Health Hub — Tips & Test Guides",
  description:
    "Health tips, lab-test explainers and wellness advice from St. Luke's Medical Laboratory, Ja-Ela.",
  alternates: { canonical: "/blog" },
};

const upcoming = [
  {
    title: "Understanding Your Fasting Blood Sugar Results",
    excerpt:
      "A comprehensive guide to interpreting what your fasting glucose numbers mean for your long-term health and diabetes risk.",
  },
  {
    title: "Why Regular Lipid Profiling is Crucial",
    excerpt:
      "Cholesterol isn't just a buzzword. Discover why monitoring your HDL, LDL, and triglycerides can save your life.",
  },
  {
    title: "Preparing for Your First ECG: What to Expect",
    excerpt:
      "Nervous about your upcoming electrocardiogram? We break down the simple, painless process step by step.",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Health Hub
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Health Tips &amp; Lab-Test Guides
          </h1>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            Plain-English explainers on blood tests, ECG, full-body checkups and everyday wellness from the St. Luke&apos;s clinical team in Ja-Ela. Full articles publish soon — here&apos;s what&apos;s coming next.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-100 p-6 bg-slate-50">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-stLukes-600 mb-3">
                  Coming soon
                </span>
                <h2 className="text-lg font-bold text-slate-900 mb-2">{post.title}</h2>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 bg-stLukes-50 rounded-3xl border border-stLukes-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Need a test now?</h2>
            <p className="text-slate-600 mb-4">
              Browse our full <Link href="/price-list" className="text-stLukes-600 underline">price list</Link> or call{" "}
              <a href="tel:+94711231954" className="text-stLukes-600 underline">+94 71 123 1954</a> to book a home visit.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
