"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, HeartPulse, ShieldAlert, Award } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import CldImage from "./CldImage";

interface Slide {
    id: number;
    publicId: string;
    title: string;
    description: string;
    badge: string;
    icon: typeof HeartPulse;
}

const slides: Slide[] = [
    {
        id: 1,
        publicId: "v1781057107/484407834_659255019896801_3765573860770218545_n_uurwq0.jpg",
        title: "Free Blood Sugar & Diabetes Screening",
        description: "Helping community members detect early markers for diabetes with quick, accurate blood sugar testing administered by our trained phlebotomists.",
        badge: "Outreach Screening",
        icon: HeartPulse,
    },
    {
        id: 2,
        publicId: "v1781057107/484739243_659254396563530_2331351593399046075_n_ks7u5d.jpg",
        title: "Professional Doctor Consultations",
        description: "Patients receive immediate, personalized guidance from medical professionals who explain laboratory reports and suggest lifestyle improvements.",
        badge: "Medical Advice",
        icon: Award,
    },
    {
        id: 3,
        publicId: "v1781057107/485045013_659254436563526_4404986998653390691_n_y09qrg.jpg",
        title: "Vital Health Indicators Check",
        description: "Monitoring blood pressure and checking general health vitals to help residents maintain active and healthy lives.",
        badge: "Wellness Vitals",
        icon: ShieldAlert,
    },
    {
        id: 4,
        publicId: "v1781057107/484816069_659255086563461_6644517396448799252_n_i3xc5c.jpg",
        title: "Mobile Lab Support & Reporting",
        description: "Conducting diagnostic setups and sample verification on-site to ensure patients get reliable laboratory results as fast as possible.",
        badge: "On-Site Laboratory",
        icon: HeartPulse,
    },
];

export default function HealthCampCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const slideNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const slidePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Autoplay logic
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(slideNext, 6000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, currentIndex]);

    // Handle touch swipe for mobile responsiveness
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            slideNext();
        } else if (isRightSwipe) {
            slidePrev();
        }
    };

    const slideVariants: Variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
            },
        },
        exit: (dir: number) => ({
            x: dir < 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
            },
        }),
    };

    const CurrentIcon = slides[currentIndex].icon;

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden" id="health-camp">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <ScrollReveal>
                            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">
                                Serving Our Community
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                St. Luke's Free Health Camps.
                            </h3>
                            <p className="mt-4 text-slate-600 text-base md:text-lg">
                                We regularly organize free medical diagnostics, vital checks, and specialist consultations, bringing quality healthcare to local communities.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Carousel Area */}
                <ScrollReveal delay={0.1}>
                    <div 
                        className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-200/50 shadow-2xl group"
                        onMouseEnter={() => setIsPlaying(false)}
                        onMouseLeave={() => setIsPlaying(true)}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Slides Container */}
                        <div className="absolute inset-0 w-full h-full">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <div className="relative w-full h-full">
                                        {/* Image */}
                                        <CldImage 
                                            publicId={slides[currentIndex].publicId} 
                                            alt={slides[currentIndex].title}
                                            fill
                                            priority
                                            sizes="(min-width: 1200px) 1200px, 100vw"
                                            className="object-cover object-center brightness-[0.85] transition-all duration-700"
                                        />
                                        
                                        {/* Overlay Shadow for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                                        
                                        {/* Text Details Box */}
                                        <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:max-w-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[1.5rem] text-white shadow-lg">
                                            <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-stLukes-50 bg-stLukes-500 px-3 py-1 rounded-full mb-3 md:mb-4">
                                                <CurrentIcon size={12} className="animate-pulse" />
                                                {slides[currentIndex].badge}
                                            </span>
                                            <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2 leading-tight">
                                                {slides[currentIndex].title}
                                            </h4>
                                            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                                                {slides[currentIndex].description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
                            <button
                                onClick={slidePrev}
                                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/95 backdrop-blur-sm text-white hover:text-slate-900 border border-white/10 hover:border-white flex items-center justify-center transition-all duration-300 shadow-md group/btn scale-90 sm:scale-100 cursor-pointer"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={slideNext}
                                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/95 backdrop-blur-sm text-white hover:text-slate-900 border border-white/10 hover:border-white flex items-center justify-center transition-all duration-300 shadow-md group/btn scale-90 sm:scale-100 cursor-pointer"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-20 flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                        index === currentIndex ? "w-8 bg-stLukes-500" : "w-2.5 bg-white/45 hover:bg-white/80"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
