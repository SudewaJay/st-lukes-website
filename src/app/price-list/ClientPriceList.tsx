"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import type { PriceCategory, FlatTest } from "@/lib/priceList";
import { formatLKR } from "@/lib/priceList";
import { TestDetailDrawer } from "@/components/TestDetailDrawer";
import { cn } from "@/lib/cn";

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="mark-hit">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

/**
 * The price list is the site's competitive weapon, so it is built as a
 * search-first utility rather than a static table: type to filter instantly,
 * arrow through results, press Enter to open the detail sheet.
 */
export default function ClientPriceList({
  data,
  slugMap = {},
}: {
  data: PriceCategory[];
  slugMap?: Record<string, string>;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<FlatTest | null>(null);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // `?q=` pre-fills the search — the WebSite SearchAction schema points here.
  // Read on mount rather than via useSearchParams so the page stays static.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  const categories = useMemo(
    () => ["All", ...data.map((c) => c.category)],
    [data],
  );

  const groups = useMemo(() => {
    const term = query.trim().toLowerCase();
    return data
      .filter((cat) => category === "All" || cat.category === category)
      .map((cat) => {
        // A category that itself matches keeps all its tests. Someone typing
        // "thyroid" means the panel, not a test literally called Thyroid —
        // the individual names are TSH, T3, T4.
        const categoryMatches = cat.category.toLowerCase().includes(term);
        return {
          ...cat,
          tests: cat.tests.filter(
            (t) =>
              !term ||
              categoryMatches ||
              t.name.toLowerCase().includes(term) ||
              (t.note ?? "").toLowerCase().includes(term),
          ),
        };
      })
      .filter((cat) => cat.tests.length > 0);
  }, [data, query, category]);

  // Flattened, in render order — this is what the arrow keys walk.
  const flat = useMemo<FlatTest[]>(
    () =>
      groups.flatMap((g) => g.tests.map((t) => ({ ...t, category: g.category }))),
    [groups],
  );

  // Position of each test in the flattened list, so a row knows whether the
  // keyboard cursor is on it without mutating a counter mid-render.
  const rowIndex = useMemo(() => {
    const map = new Map<string, number>();
    flat.forEach((t, i) => map.set(`${t.category}::${t.name}`, i));
    return map;
  }, [flat]);

  const visibleCount = flat.length;
  const hasReduced = flat.some((t) => t.was);

  const reset = () => {
    setQuery("");
    setCategory("All");
    setCursor(-1);
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && flat[cursor]) {
      e.preventDefault();
      setSelected(flat[cursor]);
    } else if (e.key === "Escape" && query) {
      e.preventDefault();
      reset();
    }
  };

  return (
    <div>
      {/* Search bar. Sticky under the header so it stays reachable while
          scrolling a 58-row list. */}
      <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-border bg-surface/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="relative">
          <label htmlFor="test-search" className="sr-only">
            Search for a test by name
          </label>
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            id="test-search"
            type="search"
            autoComplete="off"
            placeholder="Search any test — FBC, thyroid, lipid, vitamin D…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(-1);
            }}
            onKeyDown={onKeyDown}
            aria-describedby="result-count"
            className="w-full rounded-xl border border-border bg-surface-soft py-3.5 pl-11 pr-12 text-text-primary transition-colors placeholder:text-text-muted focus:border-brand-primary-dark focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          {query && (
            <button
              type="button"
              onClick={reset}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-text-muted transition-colors hover:text-text-primary"
              aria-label="Clear search"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCategory(c);
                setCursor(-1);
              }}
              aria-pressed={category === c}
              className={cn(
                "min-h-11 shrink-0 rounded-lg px-3.5 text-sm font-medium transition-colors",
                category === c
                  ? "bg-surface-dark text-text-inverse"
                  : "bg-surface-soft text-text-secondary hover:bg-brand-primary-soft hover:text-brand-primary-dark",
              )}
            >
              {c === "All" ? "All tests" : c}
            </button>
          ))}
        </div>

        <p
          id="result-count"
          aria-live="polite"
          className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted"
        >
          <span>
            <strong className="font-semibold text-text-primary tabular-nums">
              {visibleCount}
            </strong>{" "}
            {visibleCount === 1 ? "test" : "tests"} shown
          </span>
          {hasReduced && (
            <span className="rounded-md bg-brand-primary-soft px-2 py-0.5 text-brand-primary-darker">
              <s>struck-through</s> prices were recently reduced
            </span>
          )}
        </p>
      </div>

      {groups.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface px-6 py-16 text-center">
          <p className="type-h3 text-text-primary">
            No test matches &ldquo;{query}&rdquo;
          </p>
          <p className="mx-auto mt-3 max-w-sm text-sm text-text-secondary">
            Try a broader word — blood, sugar, lipid, thyroid — or call us and
            we will find it for you.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="btn btn-secondary !text-sm">
              Clear search
            </button>
            <a href="tel:+94711231954" className="btn btn-primary !text-sm">
              Call 071 123 1954
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {groups.map((cat) => (
            <section key={cat.category} aria-labelledby={`cat-${cat.category}`}>
              <div className="mb-3 flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <h2
                  id={`cat-${cat.category}`}
                  className="type-h3 text-text-primary"
                >
                  {cat.category}
                </h2>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted tabular-nums">
                  {cat.tests.length} {cat.tests.length === 1 ? "test" : "tests"}
                </span>
              </div>

              <ul className="divide-y divide-border">
                {cat.tests.map((t) => {
                  const i = rowIndex.get(`${cat.category}::${t.name}`) ?? -1;
                  return (
                    <li key={t.name}>
                      <button
                        type="button"
                        onClick={() =>
                          setSelected({ ...t, category: cat.category })
                        }
                        onMouseEnter={() => setCursor(i)}
                        className={cn(
                          "group flex w-full items-center justify-between gap-4 px-3 py-3.5 text-left transition-colors",
                          i === cursor
                            ? "bg-brand-primary-soft"
                            : "hover:bg-surface-soft",
                        )}
                      >
                        <span className="min-w-0">
                          <span className="block text-[15px] font-medium text-text-primary">
                            {highlight(t.name, query)}
                          </span>
                          {t.note && (
                            <span className="mt-0.5 block text-xs text-text-muted">
                              {t.note}
                            </span>
                          )}
                        </span>
                        <span className="flex shrink-0 items-baseline gap-2">
                          {t.was && (
                            <s className="text-xs text-text-muted tabular-nums">
                              LKR {formatLKR(t.was)}
                            </s>
                          )}
                          <span className="type-numeric font-semibold text-text-primary">
                            LKR {formatLKR(t.price)}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-text-muted transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      )}

      <p className="mt-12 text-center text-xs text-text-muted">
        Prices are subject to change. Call{" "}
        <a
          href="tel:+94711231954"
          className="link-reveal font-semibold text-brand-primary-dark"
        >
          071 123 1954
        </a>{" "}
        to confirm before booking.
      </p>

      <TestDetailDrawer
        test={selected}
        detailHref={
          selected && slugMap[selected.name]
            ? `/price-list/${slugMap[selected.name]}`
            : undefined
        }
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
