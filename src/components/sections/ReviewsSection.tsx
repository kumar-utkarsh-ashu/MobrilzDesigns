"use client";

import React from "react";
import { reviewsData } from "@/lib/data/reviews";
import { Star, Quote, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-36 bg-[#060d28] text-white border-t border-[#1b2b65] relative overflow-hidden">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-[#3779cb]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-mobrilz-blue font-mono text-xs tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Client Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Built on trust, <br className="hidden sm:inline" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
                real relationships
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-light text-sm sm:text-base text-slate-300 leading-relaxed md:text-right">
              Honest notes from founders, product leaders, and enterprise engineering teams we have designed, architected, and shipped software with.
            </p>
          </div>
        </div>

        {/* Bento Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-6">
          
          {/* Featured Large Card 1 */}
          <SpotlightCard
            spotlightColor="rgba(55, 121, 203, 0.3)"
            className="flex flex-col justify-between p-7 sm:p-10 border-[#1b2b65] bg-[#09143f]/90"
          >
            <Quote className="absolute right-6 top-6 text-white/10 w-20 h-20 pointer-events-none" />

            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <blockquote className="font-light text-xl sm:text-3xl leading-snug tracking-tight text-white mb-8">
                {reviewsData[0].quote}
              </blockquote>
            </div>

            <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-mono font-semibold shadow-md">
                {reviewsData[0].initials}
              </div>
              <div>
                <h3 className="font-semibold text-base text-white">
                  {reviewsData[0].name}
                </h3>
                <p className="text-xs text-sky-300/80">
                  {reviewsData[0].role}
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* 4 Stacked Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviewsData.slice(1).map((rev, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(55, 121, 203, 0.2)"
                className="flex flex-col justify-between p-6 border-[#1b2b65] bg-[#09143f]/70 hover:border-blue-400/40"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    {rev.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-semibold">
                    {rev.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-white truncate">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 truncate">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
