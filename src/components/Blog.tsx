import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export default async function Blog() {
    const posts = (await getAllPosts()).slice(0, 3);
    if (posts.length === 0) return null;

    return (
        <section className="py-24 bg-white" id="blog">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <ScrollReveal>
                            <h2 className="text-sm font-bold tracking-widest text-stLukes-500 uppercase mb-3">Health Tips &amp; Lab-Test Guides</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Latest Insights &amp; Advice.
                            </h3>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.2}>
                        <Link href="/blog" className="flex items-center gap-2 text-stLukes-500 font-semibold hover:text-stLukes-600 transition-colors group border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-50">
                            Visit Our Blog
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <ScrollReveal key={post.slug} delay={index * 0.1}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group cursor-pointer h-full flex flex-col border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-stLukes-100 transition-all duration-300"
                            >
                                <div className="aspect-[16/9] w-full bg-slate-100 relative overflow-hidden">
                                    {post.image && (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-stLukes-600 rounded-full">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-white">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} /> {formatPostDate(post.date)}
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
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
