"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Tag, CalendarCheck } from "lucide-react";

export default function StickyMobileActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero area (~500px)
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-border bg-surface/95 shadow-[0_-4px_16px_-6px_rgba(15,23,42,0.25)] backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      role="toolbar"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 divide-x divide-border">
        {/* Call */}
        <a
          href="tel:+94711231954"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-text-secondary hover:bg-brand-primary-soft hover:text-brand-primary-dark transition-colors min-h-[52px]"
          aria-label="Call St. Luke's"
          data-track="phone_click"
        >
          <Phone size={18} className="text-brand-primary-dark" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>

        {/* Prices — WhatsApp lives in the floating button above this bar */}
        <Link
          href="/price-list"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-text-secondary hover:bg-brand-primary-soft hover:text-brand-primary-dark transition-colors min-h-[52px]"
          data-track="price_view"
        >
          <Tag size={18} className="text-brand-primary-dark" aria-hidden="true" />
          <span className="text-[11px] font-semibold">Prices</span>
        </Link>

        {/* Book Visit */}
        <a
          href="tel:+94711231954"
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-brand-primary-dark text-text-inverse hover:bg-brand-primary-darker transition-colors min-h-[52px]"
          aria-label="Book a home visit"
          data-track="home_visit_start"
        >
          <CalendarCheck size={18} />
          <span className="text-[11px] font-semibold">Book Visit</span>
        </a>
      </div>
    </div>
  );
}
