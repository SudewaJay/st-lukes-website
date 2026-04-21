"use client";

import { Phone, ArrowUpRight, Star, CheckCircle2, MapPin } from "lucide-react";
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
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#051a0c]">

      {/* ── Background layer ─────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        {/* Hero photo */}
        <Image
          src="/hero-photo.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay — keeps text readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051a0c]/92 via-[#051a0c]/70 to-[#051a0c]/45" />
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

      {/* ── Floating phone card ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -36, rotate: -4 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-36 left-6 lg:left-28 z-30 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="bg-white rounded-2xl px-4 py-3.5 shadow-2xl shadow-black/30 flex items-center gap-3">
          <div className="w-10 h-10 bg-stLukes-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone size={17} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm leading-none mb-1">+94 71 123 1954</p>
            <p className="text-slate-500 text-xs">Home Visit Available</p>
          </div>
        </div>
      </motion.div>

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
                className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold text-white leading-[1.06] tracking-tight mb-9"
              >
                Together for<br />
                <span className="text-stLukes-400">Better Health.</span>
              </motion.h1>

              <motion.div
                {...fadeUp(0.35)}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="tel:+94711231954"
                  className="inline-flex items-center justify-center gap-2 bg-stLukes-500 hover:bg-stLukes-600 text-white font-semibold px-7 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-stLukes-500/30 hover:-translate-y-0.5 min-h-[52px] cursor-pointer"
                >
                  BOOK HOME VISIT
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[52px] cursor-pointer"
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
                className="text-white/75 text-lg leading-relaxed max-w-sm"
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
