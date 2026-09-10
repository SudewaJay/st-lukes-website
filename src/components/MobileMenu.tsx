"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export type NavLink = { name: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
};

/**
 * Slide-over navigation, animated with CSS transitions rather than an
 * animation library — this was the last component needing one, and the
 * transition is a slide plus a fade.
 *
 * The sheet stays mounted while closed but is hidden from assistive
 * technology and taken out of the tab order, so the exit transition can play.
 */
export default function MobileMenu({ open, onClose, links }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

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
  }, [open, onClose]);

  const tab = open ? 0 : -1;

  return (
    /* A viewport-sized clipping frame. Without it the closed sheet, parked at
       translate-x-full, widens the document and gives every page a horizontal
       scrollbar on a phone. */
    <div
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden lg:hidden"
      aria-hidden={!open}
      style={{ visibility: open ? "visible" : undefined }}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={tab}
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-[rgba(15,23,42,0.55)] backdrop-blur-sm transition-opacity duration-[250ms]",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        ref={panelRef}
        // Only a dialog while it is actually open. A permanently mounted
        // aria-modal element would otherwise sit in the accessibility tree of
        // every page and confuse anything looking for the current dialog.
        role={open ? "dialog" : undefined}
        aria-modal={open ? true : undefined}
        aria-label="Site navigation"
        className={cn(
          "absolute bottom-0 right-0 top-0 flex w-[88%] max-w-sm flex-col bg-surface shadow-2xl",
          // Server and client both render the closed state, so no transition
          // fires on hydration and the sheet never flashes in.
          "transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          open ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
          <Link
            href="/"
            onClick={onClose}
            tabIndex={tab}
            className="flex items-center"
            aria-label="St. Luke's Medical Laboratory — home"
          >
            <Image
              src="/logo.png"
              alt="St. Luke's Medical Laboratory"
              width={120}
              height={36}
              sizes="120px"
              className="h-9 w-auto"
            />
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            tabIndex={tab}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-soft active:bg-border"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  tabIndex={tab}
                  className="group flex min-h-12 items-center justify-between rounded-xl px-4 py-3.5 font-medium text-text-primary transition-colors hover:bg-brand-primary-soft hover:text-brand-primary-dark"
                >
                  <span>{link.name}</span>
                  <span
                    aria-hidden="true"
                    className="text-text-muted transition-transform duration-[250ms] group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="shrink-0 space-y-2.5 border-t border-border bg-surface-soft px-5 pb-6 pt-4"
          style={{
            paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+94711231954"
              onClick={onClose}
              tabIndex={tab}
              className="btn btn-primary !min-h-11 !rounded-xl !px-3 !text-sm"
              data-track="phone_click"
            >
              <Phone size={16} aria-hidden="true" />
              Call now
            </a>
            <a
              href="https://wa.me/94711231954?text=Hi%2C%20I%27d%20like%20to%20book%20a%20home%20visit."
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              tabIndex={tab}
              className="btn btn-secondary !min-h-11 !rounded-xl !px-3 !text-sm"
              data-track="whatsapp_click"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <div className="space-y-1 pt-2 text-xs text-text-muted">
            <a
              href="tel:+94711231954"
              tabIndex={tab}
              className="-mx-2 flex min-h-9 items-center gap-2 rounded px-2 transition-colors hover:text-brand-primary-dark"
              onClick={onClose}
            >
              <Phone size={13} className="text-brand-primary-dark" aria-hidden="true" />
              <span className="tabular-nums">071 123 1954</span>
            </a>
            <a
              href="mailto:medilabstlukes@gmail.com"
              tabIndex={tab}
              className="-mx-2 flex min-h-9 items-center gap-2 break-all rounded px-2 transition-colors hover:text-brand-primary-dark"
              onClick={onClose}
            >
              <Mail size={13} className="text-brand-primary-dark" aria-hidden="true" />
              medilabstlukes@gmail.com
            </a>
            <p className="flex items-start gap-2 py-1.5">
              <MapPin
                size={13}
                className="mt-0.5 shrink-0 text-brand-primary-dark"
                aria-hidden="true"
              />
              <span>No. 67, Old Negombo Road, Ja-Ela</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
