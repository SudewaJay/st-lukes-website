"use client";

import { useState, useMemo } from "react";
import { Search, Filter, FlaskConical, X } from "lucide-react";

type PriceItem = {
  name: string;
  price: number;
  category: string;
  notes?: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  "Biochemistry":        "bg-blue-50 border-blue-200 text-blue-700",
  "Hematology":          "bg-rose-50 border-rose-200 text-rose-700",
  "Serology & Immunology": "bg-purple-50 border-purple-200 text-purple-700",
  "Urine & Seminal Fluid": "bg-amber-50 border-amber-200 text-amber-700",
  "Renal & Biochemistry": "bg-cyan-50 border-cyan-200 text-cyan-700",
  "Profiles & Packages": "bg-emerald-50 border-emerald-200 text-emerald-700",
};

const CATEGORY_ACCENT: Record<string, string> = {
  "Biochemistry":          "bg-blue-500",
  "Hematology":            "bg-rose-500",
  "Serology & Immunology": "bg-purple-500",
  "Urine & Seminal Fluid": "bg-amber-500",
  "Renal & Biochemistry":  "bg-cyan-500",
  "Profiles & Packages":   "bg-emerald-500",
};

export default function ClientPriceList({ initialData }: { initialData: PriceItem[] }) {
  const [searchTerm, setSearchTerm]         = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(initialData.map((i) => i.category))).sort()],
    [initialData]
  );

  const filteredData = useMemo(() => {
    const normalize = (s: string) => s.replace(/\s+/g, "").toLowerCase();
    return initialData.filter((item) => {
      const matchSearch   = normalize(item.name).includes(normalize(searchTerm));
      const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory, initialData]);

  const displayData = useMemo(() => {
    if (selectedCategory !== "All") return { [selectedCategory]: filteredData };
    return filteredData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, PriceItem[]>);
  }, [filteredData, selectedCategory]);

  const hasResults = Object.keys(displayData).length > 0;

  return (
    <div className="space-y-6">

      {/* ── Search + Filter bar ─────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 md:p-6">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            aria-label="Search tests"
            placeholder="Search tests (e.g. FBS, FBC, Lipid Profile)…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-stLukes-500 focus:border-stLukes-500 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4 text-slate-400" />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-stLukes-500 text-white border-stLukes-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-stLukes-400 hover:text-stLukes-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results count ───────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-slate-500">
          {hasResults ? (
            <>
              Showing <span className="font-semibold text-slate-700">{filteredData.length}</span> test{filteredData.length !== 1 ? "s" : ""}
              {searchTerm && <> for &ldquo;<span className="font-semibold text-stLukes-600">{searchTerm}</span>&rdquo;</>}
            </>
          ) : null}
        </p>
        {(searchTerm || selectedCategory !== "All") && (
          <button
            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
            className="text-xs font-medium text-stLukes-600 hover:text-stLukes-700 underline cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* ── Content ─────────────────────────────────────────────────── */}
      {!hasResults ? (
        /* Empty state */
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center py-20 text-center px-6">
          <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-7 w-7 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">No tests found</h3>
          <p className="text-slate-500 text-sm max-w-xs">
            No results for &ldquo;{searchTerm}&rdquo;. Try a different spelling or clear your filters.
          </p>
          <button
            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
            className="mt-6 px-5 py-2.5 rounded-full bg-stLukes-500 text-white text-sm font-semibold hover:bg-stLukes-600 transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(displayData).map(([category, items]) => (
            <div key={category}>

              {/* Category heading */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-6 rounded-full ${CATEGORY_ACCENT[category] ?? "bg-stLukes-500"}`} aria-hidden="true" />
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[category] ?? "bg-slate-50 border-slate-200 text-slate-700"}`}>
                  <FlaskConical size={12} aria-hidden="true" />
                  {category}
                </div>
                <span className="text-xs text-slate-400">{items.length} test{items.length !== 1 ? "s" : ""}</span>
                <div className="flex-1 h-px bg-slate-100" aria-hidden="true" />
              </div>

              {/* Test cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-stLukes-300 transition-all duration-200 overflow-hidden"
                  >
                    {/* Accent top bar */}
                    <div className={`h-0.5 w-full ${CATEGORY_ACCENT[item.category] ?? "bg-stLukes-500"}`} />

                    <div className="px-4 py-4 flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-stLukes-600 transition-colors leading-snug">
                          {item.name}
                        </p>
                        {item.notes && (
                          <span className="inline-block mt-1.5 text-[10px] font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {item.notes}
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">LKR</p>
                        <p className="text-lg font-bold text-stLukes-600 tabular-nums">
                          {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Footer note ─────────────────────────────────────────────── */}
      {hasResults && (
        <p className="text-center text-xs text-slate-400 pt-4 pb-2">
          All prices are indicative and subject to change. Contact us for the latest pricing.
        </p>
      )}
    </div>
  );
}
