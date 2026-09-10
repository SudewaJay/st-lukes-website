import { Plus } from "lucide-react";

type Item = { q: string; a: string };

/**
 * Built on <details>, so it opens without JavaScript and is announced
 * correctly by screen readers. The answer is real content in the document, not
 * something the browser has to be told to fetch.
 */
export function Accordion({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.q}>
          <details className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-text-primary transition-colors hover:text-brand-primary-dark [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                size={18}
                aria-hidden="true"
                className="shrink-0 text-brand-primary-dark transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45"
              />
            </summary>
            <p className="pb-5 pr-8 text-sm leading-relaxed text-text-secondary">
              {item.a}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}
