"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogsData } from "@/lib/data/blogs";

interface BlogsDesignAProps {
  onOpenEstimator?: () => void;
}

export function BlogsDesignA({ onOpenEstimator }: BlogsDesignAProps) {
  return (
    <section id="blog" className="w-full bg-white border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#09143f] text-xs font-semibold tracking-wider uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Engineering Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
              Technical Whitepapers & Research
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Deep dives on AI architecture, distributed systems, and modern mobile engineering.
            </p>
          </div>

          <a
            href="https://mobrilz.com/blog"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 group"
          >
            <span>View All Engineering Notes</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Whitepaper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <article
              key={blog.title}
              className="group rounded-2xl bg-slate-50/70 border border-slate-200 overflow-hidden hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#09143f]/90 text-white text-[10px] font-mono font-bold tracking-wide">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">{blog.date}</span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 mt-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://mobrilz.com/blog"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
                >
                  <span>Read Technical Breakdown</span>
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

