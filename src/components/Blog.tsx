"use client";

import { ArrowRight, Calendar, User } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const posts = [
    {
        title: "Understanding Your Fasting Blood Sugar Results",
        excerpt: "A comprehensive guide to interpreting what your fasting glucose numbers mean for your long-term health and diabetes risk.",
        category: "Health Tips",
        date: "Feb 15, 2026",
        author: "Dr. L. Perera",
        delay: 0,
    },
    {
        title: "Why Regular Lipid Profiling is Crucial",
        excerpt: "Cholesterol isn't just a buzzword. Discover why monitoring your HDL, LDL, and triglycerides can save your life.",
        category: "Cardiology",
        date: "Feb 10, 2026",
        author: "Medical Team",
        delay: 0.1,
    },
    {
        title: "Preparing for Your First ECG: What to Expect",
        excerpt: "Nervous about your upcoming electrocardiogram? We break down the simple, painless process step by step.",
        category: "Patient Guide",
        date: "Feb 05, 2026",
        author: "Sarah F.",
        delay: 0.2,
    }
];

export default function Blog() {
    return (
        <section className="py-24 bg-white" id="blog">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <ScrollReveal>
                            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Health Hub</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Latest Insights & Advice.
                            </h3>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.2}>
                        <button className="flex items-center gap-2 text-stLukes-500 font-semibold hover:text-stLukes-600 transition-colors group border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-50">
                            Visit Our Blog
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <ScrollReveal key={index} delay={post.delay}>
                            <article className="group cursor-pointer h-full flex flex-col border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-stLukes-100 transition-all duration-300">
                                {/* Image Placeholder */}
                                <div className="aspect-[16/9] w-full bg-slate-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-stLukes-50 group-hover:bg-stLukes-100 transition-colors duration-500"></div>
                                    {/* Abstract shapes to simulate image */}
                                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-stLukes-200 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:scale-125 transition-transform duration-700"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-stLukes-600 rounded-full">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-white">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} /> {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} /> {post.author}
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-stLukes-500 transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-semibold text-stLukes-500 mt-auto">
                                        Read Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
