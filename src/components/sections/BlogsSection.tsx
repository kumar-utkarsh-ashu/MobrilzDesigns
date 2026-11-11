"use client";

import React from "react";
import { blogsData } from "@/lib/data/blogs";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function BlogsSection({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  return (
    <section id="blogs" className="py-24 md:py-36 bg-[#09143f] text-white relative overflow-hidden border-t border-[#1b2b65]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="md:max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-mobrilz-blue font-mono text-xs tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering &amp; AI Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Perspectives on <br className="hidden sm:inline" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
                engineering and AI
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start gap-4 md:max-w-md">
            <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              Stay one step ahead with architecture teardowns, MCP protocol deep dives, and technical roadmaps designed for high scale teams.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenEstimator}
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-blue-400/40 text-white bg-white/5 hover:bg-[#3779cb] hover:border-[#3779cb] transition-all duration-300 text-sm font-medium tracking-tight shadow-sm backdrop-blur-sm"
              >
                <span>Explore All Articles</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Editorial Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogsData.map((blog, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(55, 121, 203, 0.25)"
              className="flex flex-col p-4 pb-7 border-[#1b2b65] bg-[#060d28]/70 hover:border-blue-400/50"
            >
              {/* Media Frame */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#060d28] border border-white/10 mb-5">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#060d28]/90 backdrop-blur-md border border-white/20 text-sky-300 font-mono text-[10px] tracking-wider uppercase">
                  {blog.category}
                </div>
              </div>

              {/* Copy & Meta */}
              <div className="flex flex-col flex-1 justify-between gap-4 px-1">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3.5 border-t border-white/10 mt-auto">
                  <span>{blog.date}</span>
                  <a
                    href="#cta"
                    className="flex items-center gap-1 text-sky-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
