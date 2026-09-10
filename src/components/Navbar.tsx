"use client";

import { useState, useEffect } from "react";
import { Menu, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu, { type NavLink } from "./MobileMenu";
import { cn } from "@/lib/cn";

const navLinks: NavLink[] = [
  { name: "Services", href: "/services" },
  { name: "Tests & Prices", href: "/price-list" },
  { name: "Packages", href: "/packages" },
  { name: "Technology", href: "/technology" },
  { name: "Locations", href: "/locations" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-surface/90 backdrop-blur-md transition-[box-shadow,border-color,padding] duration-300",
          isScrolled
            ? "border-b border-border py-2 shadow-[0_1px_16px_-8px_rgba(15,23,42,0.35)]"
            : "border-b border-transparent py-3.5",
        )}
      >
        <div className="container-content">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="St. Luke's Medical Laboratory — home"
            >
              <Image
                src="/logo.png"
                alt="St. Luke's Medical Laboratory"
                width={133}
                height={40}
                priority
                sizes="133px"
                className="h-9 w-auto md:h-10"
              />
            </Link>

            <nav
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href || pathname?.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-brand-primary-dark"
                        : "text-text-secondary hover:text-text-primary",
                    )}
                  >
                    {link.name}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 bottom-1 h-px origin-left bg-brand-primary-dark transition-transform duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:+94711231954"
                className="flex min-h-11 items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-brand-primary-dark"
                aria-label="Call St. Luke's on 071 123 1954"
                data-track="phone_click"
              >
                <Phone size={15} aria-hidden="true" />
                <span className="hidden xl:inline tabular-nums">071 123 1954</span>
              </a>

              <a
                href="tel:+94711231954"
                className="btn btn-primary !min-h-10 !rounded-lg !px-5 !text-sm"
                data-track="home_visit_start"
              >
                Book a Home Visit
                <ArrowRight size={15} className="btn-arrow" aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="-mr-1 flex h-11 w-11 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-surface-soft active:bg-border lg:hidden"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          links={navLinks}
        />
      </div>
    </>
  );
}
