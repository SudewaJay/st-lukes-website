"use client";

import { useEffect, useState } from "react";

const WA_URL = `https://wa.me/94711231954?text=${encodeURIComponent(
  "Hi St. Luke's, I'd like to ask about a lab test.",
)}`;

/**
 * Site-wide floating WhatsApp button, rendered once from the root layout so it
 * is on every route including the homepage. On phones it lifts above
 * StickyMobileActions once that bar appears (same 500px threshold); on
 * desktop it expands into a labelled pill.
 */
export default function FloatingWhatsApp() {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-raised={raised}
      data-track="whatsapp_click"
      aria-label="Chat with St. Luke's on WhatsApp (opens in a new tab)"
      className="wa-fab wa-fab-pulse fixed right-4 z-[45] flex h-14 w-14 items-center justify-center gap-2.5 rounded-full bg-whatsapp text-white shadow-[0_8px_24px_-6px_rgba(15,23,42,0.45)] hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 lg:right-6 lg:h-auto lg:w-auto lg:px-5 lg:py-3.5"
    >
      <svg
        viewBox="0 0 24 24"
        width={28}
        height={28}
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0 lg:h-6 lg:w-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      <span className="hidden text-[15px] font-semibold lg:inline">
        WhatsApp us
      </span>
    </a>
  );
}
