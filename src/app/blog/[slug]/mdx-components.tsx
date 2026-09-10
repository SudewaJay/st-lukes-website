import type { MDXComponents } from "mdx/types";

/**
 * The article body is styled here rather than with a typography plugin — the
 * set of elements the posts actually use is small, and this keeps the design
 * tokens in charge of the reading experience.
 */
export const articleComponents: MDXComponents = {
  h2: (p) => (
    <h2
      className="type-h2 mt-12 mb-4 scroll-mt-24 text-text-primary"
      {...p}
    />
  ),
  h3: (p) => (
    <h3 className="type-h3 mt-9 mb-3 scroll-mt-24 text-text-primary" {...p} />
  ),
  p: (p) => (
    <p className="mb-5 text-[1.0625rem] leading-[1.75] text-text-secondary" {...p} />
  ),
  a: (p) => (
    <a
      className="link-reveal font-medium text-brand-primary-dark"
      {...p}
    />
  ),
  ul: (p) => <ul className="mb-6 list-disc space-y-2 pl-5" {...p} />,
  ol: (p) => <ol className="mb-6 list-decimal space-y-2 pl-5" {...p} />,
  li: (p) => (
    <li
      className="pl-1 leading-relaxed text-text-secondary marker:text-brand-primary"
      {...p}
    />
  ),
  strong: (p) => <strong className="font-semibold text-text-primary" {...p} />,
  blockquote: (p) => (
    <blockquote
      className="my-7 border-l-2 border-brand-primary bg-brand-primary-soft px-6 py-4 text-text-secondary"
      {...p}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: (p) => (
    <div className="my-7 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[480px] border-collapse text-sm" {...p} />
    </div>
  ),
  th: (p) => (
    <th
      className="border-b border-border bg-surface-soft px-4 py-3 text-left font-semibold text-text-primary"
      {...p}
    />
  ),
  td: (p) => (
    <td className="border-b border-border px-4 py-3 text-text-secondary" {...p} />
  ),
  code: (p) => (
    <code
      className="rounded bg-surface-soft px-1.5 py-0.5 text-[0.9em] text-text-primary"
      {...p}
    />
  ),
};
