"use client";

import { ArrowUpRight, Star, CheckCircle2, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const avatarColors = [
  "bg-emerald-400",
  "bg-teal-400",
  "bg-cyan-500",
  "bg-stLukes-500",
];
const avatarInitials = ["D", "S", "R", "+"];

const stats = [
  { value: "20+", label: "Collection Centres" },
  { value: "500+", label: "Partner Doctors" },
  { value: "24hr", label: "Report Turnaround" },
  { value: "ISO", label: "Certified Lab" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: shouldReduceMotion ? 0 : delay,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#051a0c]">

      {/* ── Background layer ─────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        {/* Hero photo — place your image at /public/hero-photo.jpg */}
        <Image
          src="/hero-photo.jpeg"
          alt="St. Luke's Medical Laboratory diagnostic centre in Ja-Ela, Sri Lanka"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Dark gradient overlay — keeps text readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051a0c]/80 via-[#051a0c]/55 to-[#051a0c]/25" />
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Ambient green glow */}
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-stLukes-500/10 blur-[140px] pointer-events-none" />
      </div>


      {/* ── Main content (anchored to bottom) ────────────────────────── */}
      <div className="relative z-20 flex-1 flex flex-col justify-end pb-10 pt-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">

            {/* Left — headline + CTAs */}
            <div>
              <motion.p
                {...fadeUp(0.1)}
                className="inline-flex items-center gap-2 text-stLukes-400 text-sm font-semibold uppercase tracking-widest mb-5"
              >
                <MapPin size={14} />
                Ja-Ela, Sri Lanka · 20+ Centres
              </motion.p>

              <motion.h1
                {...fadeUp(0.2)}
                className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold text-white leading-[1.06] tracking-tight mb-5"
              >
                Trusted Medical Laboratory<br />
                <span className="text-stLukes-400">in Ja-Ela.</span>
              </motion.h1>
              <motion.p
                {...fadeUp(0.25)}
                className="text-white/70 text-base sm:text-lg italic mb-9"
              >
                Together for better health — blood tests, ECG &amp; home visits with 24-hour reports.
              </motion.p>

              <motion.div
                {...fadeUp(0.35)}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="tel:+94711231954"
                  className="inline-flex items-center justify-center gap-2 bg-stLukes-500 hover:bg-stLukes-600 text-white font-semibold px-8 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-stLukes-500/30 hover:-translate-y-0.5 min-h-[52px] cursor-pointer"
                >
                  BOOK HOME VISIT
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[52px] cursor-pointer"
                >
                  OUR SERVICES
                  <ArrowUpRight size={17} />
                </a>
              </motion.div>
            </div>

            {/* Right — description + social proof */}
            <div className="flex flex-col gap-7">
              <motion.p
                {...fadeUp(0.3)}
                className="text-white/75 text-lg leading-snug max-w-sm"
              >
                Providing world-class diagnostic services with advanced facilities, expert doctors, and compassionate care — right in your neighbourhood.
              </motion.p>

              <motion.div
                {...fadeUp(0.45)}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                {/* Star rating */}
                <div>
                  <div className="flex items-center gap-0.5 mb-1.5" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={17} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">4.9</span>
                    <span className="text-white/45 text-sm">/5.0</span>
                  </div>
                </div>

                {/* vertical rule */}
                <div className="hidden sm:block w-px h-14 bg-white/20" aria-hidden="true" />

                {/* Avatar stack + trust copy */}
                <div>
                  <div className="flex items-center -space-x-2.5 mb-2" aria-hidden="true">
                    {avatarColors.map((bg, i) => (
                      <div
                        key={i}
                        className={`w-9 h-9 ${bg} rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                      >
                        {avatarInitials[i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/65 text-sm">Trusted by 500+ Doctors Globally</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Stats strip ──────────────────────────────────────────── */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-stLukes-400 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white font-bold text-xl leading-none mb-0.5">{s.value}</p>
                  <p className="text-white/50 text-xs">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Checkered bottom border ───────────────────────────────────── */}
      <div
        className="relative z-20 h-5 w-full flex-shrink-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#58b330 0% 25%, transparent 0% 50%)",
          backgroundSize: "20px 20px",
          opacity: 0.55,
        }}
      />
    </section>
  );
}
