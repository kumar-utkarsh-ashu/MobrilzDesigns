"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { reviewsData } from "@/lib/data/reviews";

export function ReviewsDesignB() {
  return (
    <section id="reviews" className="w-full bg-[#060d28] border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
          <Quote className="w-3.5 h-3.5 text-cyan-400" />
          <span>Verified Client Voices</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Client Feedback &amp; Endorsements
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          What founders and engineering leaders say about shipping with Mobrilz.
        </p>
      </div>

      {/* Marquee Track 1 */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {reviewsData.map((rev) => (
          <div
            key={rev.name}
            className="shrink-0 w-[340px] sm:w-[400px] p-6 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-sm text-slate-300 leading-relaxed font-normal">
                {rev.quote}
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold flex items-center justify-center text-xs border border-cyan-500/40">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

