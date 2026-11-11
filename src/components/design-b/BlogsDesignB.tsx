"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogsData } from "@/lib/data/blogs";

export function BlogsDesignB() {
  return (
    <section id="blog" className="w-full bg-[#030712] border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Notes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Engineering Whitepapers
            </h2>
          </div>

          <a
            href="https://mobrilz.com/blog"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group"
          >
            <span>VIEW ALL PUBLICATIONS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Cybernetic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <article
              key={blog.title}
              className="group rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#060d28]/90 text-cyan-300 text-[10px] font-mono font-bold border border-white/10">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">{blog.date}</span>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 mt-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://mobrilz.com/blog"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300"
                >
                  <span>READ TEARDOWN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

