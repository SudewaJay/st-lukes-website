"use client";

import { motion } from "framer-motion";

interface FeatureRowProps {
    title: string;
    desc: string;
    img: string;
    reverse?: boolean;
}

export default function FeatureRow({ title, desc, img, reverse = false }: FeatureRowProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center py-16`}
        >
            <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">{title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{desc}</p>
                <button className="mt-8 text-stLukes-500 font-semibold hover:text-stLukes-900 transition-colors flex items-center gap-2 group">
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            <div className="flex-1 w-full bg-stLukes-50/50 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
                {/* Soft background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-stLukes-100 rounded-full blur-3xl opacity-50"></div>

                <div className="relative">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-auto rounded-2xl shadow-2xl shadow-slate-200/50 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out"
                    />
                </div>
            </div>
        </motion.div>
    );
}
