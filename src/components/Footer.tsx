import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { testPages } from "@/lib/testPages";

const columns = [
  {
    heading: "Explore",
    links: [
      { name: "Services", href: "/services" },
      { name: "Tests & Prices", href: "/price-list" },
      { name: "Health Packages", href: "/packages" },
      { name: "Lab Technology", href: "/technology" },
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "Blood Tests", href: "/services/blood-tests" },
      { name: "ECG & Cardiac", href: "/services/ecg-cardiac-tests" },
      { name: "Home Collection", href: "/services/home-blood-collection" },
      {
        name: "Corporate Screening",
        href: "/services/corporate-health-screening",
      },
    ],
  },
  {
    heading: "Locations",
    links: [
      { name: "Ja-Ela (HQ)", href: "/locations/ja-ela" },
      { name: "Kandana", href: "/locations/kandana" },
      { name: "Wattala", href: "/locations/wattala" },
      { name: "Ragama", href: "/locations/ragama" },
      { name: "Negombo", href: "/locations/negombo" },
      { name: "All locations", href: "/locations" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white/70">
      {/* Closing band — the last chance to act, before the sitemap. */}
      <div className="border-b border-white/10">
        <div className="container-content flex flex-col items-start justify-between gap-5 py-10 md:flex-row md:items-center">
          <p className="type-h3 max-w-md text-white">
            Not sure which test you need? Call us — we will tell you the price
            before you come in.
          </p>
          <a href="tel:+94711231954" className="btn btn-primary shrink-0" data-track="phone_click">
            <Phone size={17} aria-hidden="true" />
            Call 071 123 1954
          </a>
        </div>
      </div>

      <div className="container-content grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="/" className="mb-5 inline-block" aria-label="St. Luke's Medical Laboratory — home">
            <Image
              src="/logo.png"
              alt="St. Luke's Medical Laboratory"
              width={160}
              height={48}
              sizes="160px"
              loading="lazy"
              className="h-12 w-auto rounded-xl bg-white/95 p-2"
            />
          </Link>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/55">
            An independent diagnostic laboratory in Ja-Ela, serving ten towns
            with published LKR pricing and 24-hour reports.
          </p>

          <div className="flex items-start gap-3 text-sm">
            <Clock size={16} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
            <div>
              <p className="font-medium text-white/90">Opening hours</p>
              <p className="mt-0.5 text-xs text-white/55">Mon–Sat 07:00 – 19:30</p>
              <p className="text-xs text-white/55">Sun 07:30 – 12:30</p>
            </div>
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} className="lg:col-span-2" aria-label={col.heading}>
            <h2 className="mb-5 text-sm font-semibold text-white">{col.heading}</h2>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="-mx-2 flex min-h-9 items-center rounded px-2 text-sm text-white/60 transition-colors hover:text-brand-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="lg:col-span-2">
          <h2 className="mb-5 text-sm font-semibold text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
              <span className="text-white/60">
                No. 67, Old Negombo Road,
                <br />
                Ja-Ela, Sri Lanka
              </span>
            </li>
            <li>
              <a
                href="tel:+94711231954"
                className="-mx-2 flex min-h-9 items-center gap-3 rounded px-2 text-white/60 transition-colors hover:text-brand-primary"
                data-track="phone_click"
              >
                <Phone size={16} className="shrink-0 text-brand-primary" aria-hidden="true" />
                <span className="tabular-nums">071 123 1954</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/94711231954?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-2 flex min-h-9 items-center gap-3 rounded px-2 text-white/60 transition-colors hover:text-brand-primary"
                data-track="whatsapp_click"
              >
                <MessageCircle size={16} className="shrink-0 text-brand-primary" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:medilabstlukes@gmail.com"
                className="-mx-2 flex min-h-9 items-center gap-3 rounded px-2 break-all text-white/60 transition-colors hover:text-brand-primary"
              >
                <Mail size={16} className="shrink-0 text-brand-primary" aria-hidden="true" />
                medilabstlukes@gmail.com
              </a>
            </li>
            <li className="pt-1">
              <a
                href="https://maps.app.goo.gl/ssRxtUg5VJDPYVdL9"
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta link-reveal text-sm !text-brand-primary"
              >
                Get directions
                <ArrowRight size={13} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav className="border-t border-white/10" aria-label="Popular test prices">
        <div className="container-content py-8">
          <h2 className="mb-3 text-sm font-semibold text-white">Popular test prices</h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {testPages.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/price-list/${t.slug}`}
                  className="flex min-h-9 items-center text-sm text-white/60 transition-colors hover:text-brand-primary"
                >
                  {t.shortName} test price
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/45 md:flex-row">
          <p>
            © {new Date().getFullYear()} St. Luke&apos;s Medical Laboratory. All
            rights reserved. · Developed by{" "}
            <a
              href="https://uniixstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 transition-colors hover:text-brand-primary"
            >
              Uniix Studio
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="flex min-h-11 items-center transition-colors hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="flex min-h-11 items-center transition-colors hover:text-white/80"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Clears the sticky mobile action bar. */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  );
}
