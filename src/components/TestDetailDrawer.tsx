"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { formatLKR, type FlatTest } from "@/lib/priceList";

/**
 * Bottom sheet on touch, side drawer on desktop. Traps focus, closes on
 * Escape, restores focus to whatever opened it, and locks the page behind it.
 * Shows only what the price list actually records — no invented preparation
 * instructions or per-test turnaround promises.
 */
export function TestDetailDrawer({
  test,
  detailHref,
  onClose,
}: {
  test: FlatTest | null;
  /** Dedicated /price-list/<slug> page, when the test has one. */
  detailHref?: string;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!test) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [test, onClose]);

  if (!test) return null;

  const message = encodeURIComponent(
    `Hi, I'd like to book ${test.name} (LKR ${formatLKR(test.price)}).`,
  );

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="drawer-backdrop absolute inset-0"
        aria-label="Close test details"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="test-drawer-title"
        tabIndex={-1}
        className="panel-in absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-2xl bg-surface p-6 shadow-xl outline-none md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[440px] md:rounded-none md:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-soft"
          aria-label="Close"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <p className="eyebrow mb-3">{test.category}</p>
        <h2 id="test-drawer-title" className="type-h3 pr-12 text-text-primary">
          {test.name}
        </h2>

        <p className="type-numeric mt-7 text-4xl font-bold text-text-primary">
          LKR {formatLKR(test.price)}
        </p>
        {test.was && (
          <p className="mt-1 text-sm text-text-muted">
            Reduced from <s>LKR {formatLKR(test.was)}</s>
          </p>
        )}
        {test.note && (
          <p className="mt-2 text-sm text-text-secondary">{test.note}</p>
        )}

        <p className="mt-7 text-sm leading-relaxed text-text-secondary">
          This is the published counter price. Confirm it when you book. Home
          sample collection is available across every town we serve, and most
          reports are ready within 24 hours.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          Some tests need 8–12 hours of fasting. Call us and we will tell you
          how to prepare for this one before you come in.
        </p>

        <div className="mt-9 flex flex-col gap-3">
          <a
            href="tel:+94711231954"
            className="btn btn-primary w-full"
            data-track="test_request"
          >
            <Phone size={17} aria-hidden="true" />
            Request this test
          </a>
          <a
            href={`https://wa.me/94711231954?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full"
            data-track="whatsapp_click"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Ask on WhatsApp
          </a>
          {detailHref && (
            <Link href={detailHref} className="btn btn-ghost w-full">
              What it's for &amp; how to prepare
              <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
