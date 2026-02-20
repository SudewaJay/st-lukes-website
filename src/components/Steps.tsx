"use client";

import { motion, Variants } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Book your appointment or test package",
        desc: "Choose from our wide range of tests and schedule a visit or home collection online.",
    },
    {
        num: "02",
        title: "Visit lab facilities or wait for home duty",
        desc: "Experience our state-of-the-art facilities or let our phlebotomists come to you.",
    },
    {
        num: "03",
        title: "Check results through portal or app",
        desc: "Get notified as soon as your results are ready and review them securely.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export default function Steps() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem] my-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple steps get to start <br /> your health journey</h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-3 gap-8"
            >
                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-sm font-semibold text-stLukes-500 uppercase tracking-wider">Step</span>
                            <span className="text-3xl font-light text-slate-300">{step.num}</span>
                        </div>
                        <div className="mt-auto">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
