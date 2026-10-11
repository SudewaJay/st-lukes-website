"use client";

import { useCallback, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { TestDetailDrawer } from "@/components/TestDetailDrawer";
import { allTests, formatLKR, type FlatTest } from "@/lib/priceList";
import { cn } from "@/lib/cn";

const POPULAR = ["Haematology", "Blood Sugar / Diabetes", "Lipids & Cardiac", "Thyroid & Hormones"];

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const q = query.trim();
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

export default function TestFinder({
  variant = "compact",
  slugMap = {},
}: {
  variant?: "compact" | "full";
  slugMap?: Record<string, string>;
}) {
  const listId = useId();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  // -1 until the user actually moves — highlighting the first row before any
  // interaction reads as a selection nobody made.
  const [active, setActive] = useState(-1);
  const [selected, setSelected] = useState<FlatTest | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(allTests.map((t) => t.category)))],
    [],
  );

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return allTests.filter((t) => {
      const catOk = category === "All" || t.category === category;
      // Match the category name too — "thyroid" should find the panel even
      // though the tests in it are called TSH, T3 and T4.
      const qOk =
        !term ||
        t.name.toLowerCase().includes(term) ||
        t.category.toLowerCase().includes(term);
      return catOk && qOk;
    });
  }, [query, category]);

  const visible = variant === "compact" && !query && category === "All" ? results.slice(0, 8) : results;

  const open = useCallback((t: FlatTest) => setSelected(t), []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, visible.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && visible[active]) {
      e.preventDefault();
      open(visible[active]);
    }
  };

  const chips = variant === "compact" ? ["All", ...POPULAR] : categories;

  return (
    <div>
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm md:p-5">
        <div className="relative">
          <label htmlFor={listId} className="sr-only">
            Search a test
          </label>
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            id={listId}
            type="search"
            autoComplete="off"
            placeholder="Search a test…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(-1);
            }}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded={visible.length > 0}
            aria-controls={`${listId}-results`}
            aria-activedescendant={visible[active] ? `${listId}-opt-${active}` : undefined}
            className="w-full rounded-xl border border-border bg-surface-soft py-3.5 pl-11 pr-12 text-text-primary placeholder:text-text-muted transition-colors focus:border-brand-primary-dark focus:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-text-muted hover:text-text-primary"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* One scrolling row on a phone; wraps once there is room. Four rows
            of wrapped chips pushed the actual results off the screen. */}
        <div className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCategory(c);
                setActive(-1);
              }}
              className={cn(
                "min-h-11 shrink-0 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                category === c
                  ? "bg-surface-dark text-text-inverse"
                  : "bg-surface-soft text-text-secondary hover:bg-brand-primary-soft hover:text-brand-primary-dark",
              )}
            >
              {c === "All" ? "All tests" : c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
        {visible.length === 0 ? (
          <div className="px-6 py-14 text-center">
            <p className="font-medium text-text-primary">No tests match “{query}”</p>
            <p className="mt-2 text-sm text-text-muted">
              Try FBC, sugar, lipid, or thyroid.
            </p>
            <button
              type="button"
              className="mt-5 text-sm font-semibold text-brand-primary-dark underline underline-offset-4"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear search
            </button>
          </div>
        ) : (
          <ul id={`${listId}-results`} role="listbox" className="divide-y divide-border">
            {visible.map((t, i) => (
              <li key={`${t.category}-${t.name}`} role="option" aria-selected={i === active} id={`${listId}-opt-${i}`}>
                <button
                  type="button"
                  onClick={() => open(t)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors",
                    i === active ? "bg-brand-primary-soft" : "hover:bg-surface-soft",
                  )}
                >
                  <span className="min-w-0">
                    <span className="block font-medium text-text-primary">
                      {highlight(t.name, query)}
                    </span>
                    {variant === "full" && (
                      <span className="mt-0.5 block text-xs text-text-muted">{t.category}</span>
                    )}
                  </span>
                  <span className="type-numeric shrink-0 font-semibold text-text-primary">
                    LKR {formatLKR(t.price)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {variant === "compact" && (
        <p className="mt-4 text-center text-sm text-text-muted">
          Showing {visible.length} of {allTests.length} published tests.{" "}
          <Link
            href="/price-list"
            className="link-cta"
          >
            View full price list
            <ArrowRight size={14} className="btn-arrow" aria-hidden="true" />
          </Link>
        </p>
      )}

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
