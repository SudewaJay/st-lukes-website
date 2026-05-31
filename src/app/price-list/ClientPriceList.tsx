"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import type { PriceCategory } from "@/lib/priceList";

const CATEGORY_COLORS: Record<string, string> = {
  "Haematology": "bg-rose-50 border-rose-200 text-rose-700",
  "Coagulation": "bg-rose-50 border-rose-200 text-rose-700",
  "Blood Sugar / Diabetes": "bg-amber-50 border-amber-200 text-amber-700",
  "Lipids & Cardiac": "bg-cyan-50 border-cyan-200 text-cyan-700",
  "Liver Function": "bg-blue-50 border-blue-200 text-blue-700",
  "Renal / Kidney": "bg-blue-50 border-blue-200 text-blue-700",
  "Thyroid & Hormones": "bg-purple-50 border-purple-200 text-purple-700",
  "Inflammation & Immunology": "bg-purple-50 border-purple-200 text-purple-700",
  "Infectious Disease": "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700",
  "Vitamins": "bg-emerald-50 border-emerald-200 text-emerald-700",
  "Urine & Fluid Analysis": "bg-amber-50 border-amber-200 text-amber-700",
  "Comprehensive Panels": "bg-emerald-50 border-emerald-200 text-emerald-700",
};

const formatLKR = (n: number) => n.toLocaleString("en-LK");

export default function ClientPriceList({ data }: { data: PriceCategory[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => ["All", ...data.map((c) => c.category)], [data]);

  const filteredData = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return data
      .filter((cat) => selectedCategory === "All" || cat.category === selectedCategory)
      .map((cat) => ({
        ...cat,
        tests: cat.tests.filter((t) =>
          term ? t.name.toLowerCase().includes(term) : true
        ),
      }))
      .filter((cat) => cat.tests.length > 0);
  }, [data, searchTerm, selectedCategory]);

  const visibleCount = filteredData.reduce((n, c) => n + c.tests.length, 0);
  const hasReduced = filteredData.some((c) => c.tests.some((t) => t.was));

  return (
    <div>
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 sticky top-20 z-30">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search any test (e.g. FBC, Thyroid, Lipid)…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-stLukes-500 focus:bg-white transition-colors text-slate-900 placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-stLukes-500 focus:bg-white transition-colors text-slate-900 cursor-pointer"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-900">{visibleCount}</strong> test
            {visibleCount === 1 ? "" : "s"}
          </span>
          {hasReduced && (
            <span className="flex items-center gap-1.5">
              <s className="text-slate-400">old price</s> = recently reduced
            </span>
          )}
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <p className="text-slate-500">No tests match your search.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredData.map((cat) => (
            <section
              key={cat.category}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <header className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900">{cat.category}</h2>
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    CATEGORY_COLORS[cat.category] ?? "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  {cat.tests.length} {cat.tests.length === 1 ? "test" : "tests"}
                </span>
              </header>
              <ul className="divide-y divide-slate-100">
                {cat.tests.map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center justify-between gap-4 px-5 py-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-slate-700 text-sm">
                      {t.name}
                      {t.note && (
                        <span className="text-slate-400 text-xs ml-2">({t.note})</span>
                      )}
                    </span>
                    <span className="flex items-baseline gap-2 whitespace-nowrap">
                      {t.was && (
                        <s className="text-slate-400 text-xs">LKR {formatLKR(t.was)}</s>
                      )}
                      <strong className="text-slate-900 text-sm">
                        LKR {formatLKR(t.price)}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <p className="text-center text-xs text-slate-500 mt-8">
        Prices subject to change. Call{" "}
        <a href="tel:+94711231954" className="text-stLukes-600 font-semibold">
          071 123 1954
        </a>{" "}
        to confirm before booking.
      </p>
    </div>
  );
}
