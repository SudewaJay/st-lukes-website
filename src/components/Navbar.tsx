"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu, { type NavLink } from "./MobileMenu";

const TRANSPARENT_HERO_ROUTES = ["/", "/price-list"];

const navLinks: NavLink[] = [
    { name: "Services", href: "/services" },
    { name: "Technology", href: "/technology" },
    { name: "Our Packages", href: "/packages" },
    { name: "Locations", href: "/locations" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Price List", href: "/price-list" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const hasTransparentHero = TRANSPARENT_HERO_ROUTES.includes(pathname ?? "/");
    const useSolidStyle = isScrolled || !hasTransparentHero;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navStyle = useSolidStyle
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
        : "bg-transparent py-5";

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navStyle}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-2 group" aria-label="St. Luke's Medical Laboratory home">
                            <img src="/logo.png" alt="St. Luke's Medical Laboratory" className="h-10 w-auto" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium transition-colors text-sm ${useSolidStyle ? "text-slate-600 hover:text-stLukes-500" : "text-white/85 hover:text-white"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+94711231954"
                                className="bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md shadow-stLukesRed-500/20 hover:shadow-lg hover:shadow-stLukesRed-500/30 text-sm flex items-center justify-center"
                            >
                                Book Home Visit
                            </a>
                        </nav>

                        {/* Mobile menu trigger */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            className={`md:hidden w-11 h-11 -mr-1 rounded-full flex items-center justify-center transition-colors ${
                                useSolidStyle
                                    ? "text-slate-900 hover:bg-slate-100 active:bg-slate-200"
                                    : "text-white hover:bg-white/15 active:bg-white/25"
                            }`}
                        >
                            <Menu size={24} />
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
