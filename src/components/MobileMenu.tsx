"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone, MapPin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type NavLink = { name: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
};

export default function MobileMenu({ open, onClose, links }: Props) {
  // Lock body scroll while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-slate-900/55 backdrop-blur-sm md:hidden"
          />

          {/* Sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[88%] max-w-sm bg-white shadow-2xl flex flex-col md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 flex-shrink-0">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2"
                aria-label="St. Luke's Medical Laboratory home"
              >
                <img src="/logo.png" alt="St. Luke's" className="h-9 w-auto" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <ul className="space-y-0.5">
                {links.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-slate-900 font-medium hover:bg-stLukes-50 hover:text-stLukes-600 active:bg-stLukes-100 transition-colors"
                    >
                      <span>{link.name}</span>
                      <span aria-hidden="true" className="text-slate-300">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA + contact */}
            <div className="px-5 pt-4 pb-6 border-t border-slate-100 bg-slate-50/60 flex-shrink-0 space-y-3">
              <a
                href="tel:+94711231954"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-stLukesRed-500 hover:bg-stLukesRed-600 active:bg-stLukesRed-700 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-stLukesRed-500/25 transition-colors"
              >
                <Phone size={18} />
                Book Home Visit
              </a>
              <div className="text-xs text-slate-500 space-y-1.5 pt-2">
                <a
                  href="tel:+94711231954"
                  className="flex items-center gap-2 hover:text-stLukes-600"
                  onClick={onClose}
                >
                  <Phone size={13} className="text-stLukes-500" />
                  071 123 1954
                </a>
                <a
                  href="mailto:medilabstlukes@gmail.com"
                  className="flex items-center gap-2 hover:text-stLukes-600"
                  onClick={onClose}
                >
                  <Mail size={13} className="text-stLukes-500" />
                  medilabstlukes@gmail.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="text-stLukes-500 mt-0.5 flex-shrink-0" />
                  <span>No. 67, Old Negombo Road, Ja-Ela</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
