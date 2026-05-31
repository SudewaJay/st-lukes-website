import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Health Hub — Lab Test Guides & Wellness Tips",
  description:
    "Health tips and lab-test explainers from St. Luke's Medical Laboratory, Ja-Ela.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-stLukes-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Health Hub
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Health Tips &amp; Lab-Test Guides
          </h1>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl">
            Plain-English explainers on blood tests, ECG, full-body checkups and everyday wellness from the St. Luke&apos;s clinical team in Ja-Ela. Full articles publish soon — here&apos;s what&apos;s coming next.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group h-full flex flex-col rounded-3xl border border-slate-100 overflow-hidden bg-white shadow-sm hover:shadow-xl hover:border-stLukes-100 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-stLukes-600 rounded-full">
                    {post.category}
                  </div>
                  <span className="absolute top-4 right-4 bg-stLukes-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Coming soon
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-stLukes-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 bg-stLukes-50 rounded-3xl border border-stLukes-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Need a test now?</h2>
            <p className="text-slate-600 mb-4">
              Browse our full{" "}
              <Link href="/price-list" className="text-stLukes-600 underline">
                price list
              </Link>{" "}
              or call{" "}
              <a href="tel:+94711231954" className="text-stLukes-600 underline">
                071 123 1954
              </a>{" "}
              to book a home visit.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
