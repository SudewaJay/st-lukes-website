"use client";

import { Activity, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 border-b border-slate-800 pb-8 md:border-0 md:pb-0">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <img src="/logo.png" alt="St. Luke's Medical Laboratory" className="h-12 w-auto bg-white/95 p-2 rounded-xl" />
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
                            Reliable, fast, and accessible diagnostic excellence delivered right to your neighbourhood.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#why-us" className="hover:text-stLukes-500 transition-colors">Why Choose Us</Link></li>
                            <li><Link href="#services" className="hover:text-stLukes-500 transition-colors">Our Services</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-stLukes-500 transition-colors">How It Works</Link></li>
                            <li><Link href="#pricing" className="hover:text-stLukes-500 transition-colors">Pricing Plans</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Health Tips Newsletter</h4>
                        <p className="text-sm text-slate-400 mb-4">Subscribe to receive the latest updates, wellness advice, and exclusive health packages.</p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => { e.preventDefault() }}>
                            <input type="email" placeholder="Your Email Address" className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-stLukes-500" required />
                            <button type="submit" className="bg-stLukesRed-500 hover:bg-stLukesRed-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">Subscribe</button>
                        </form>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 text-stLukes-500 mt-0.5" />
                                <span>No. 67, Old Negombo Road,<br />Ja-Ela, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-stLukes-500" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-stLukes-500" />
                                <span>support@stlukeslab.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} St. Luke's Medical Laboratory. All rights reserved.
                        Developed by <a href="https://uniixstudio.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stLukes-500 transition-colors font-medium">Uniix Studio</a>
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
