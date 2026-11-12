"use client";

import React from "react";
import { Star, MessageSquare, Quote, CheckCircle } from "lucide-react";
import { reviewsData } from "@/lib/data/reviews";

export function ReviewsKineticC() {
  // Double the reviews for seamless infinite ticker
  const marqueeRow1 = [...reviewsData, ...reviewsData];
  const marqueeRow2 = [...reviewsData.slice().reverse(), ...reviewsData.slice().reverse()];

  return (
    <section className="relative z-20 w-full py-28 bg-[#060d28] col-lines overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Verified Social Proof</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          What Engineering Leaders Say
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 font-light max-w-xl mx-auto">
          Direct quotes from enterprise CTOs, founders, and product directors who rely on Mobrilz systems in production.
        </p>
      </div>

      {/* Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden flex gap-6 mb-6">
        <div className="flex gap-6 animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {marqueeRow1.map((item, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] p-6 rounded-2xl bg-[#09143f]/80 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-cyan-400/40" />
              </div>

              <p className="text-slate-200 text-sm font-light leading-relaxed mb-6 italic">
                {item.quote}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-[#3779cb] flex items-center justify-center font-bold text-white text-xs shadow-md">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="relative w-full overflow-hidden flex gap-6">
        <div className="flex gap-6 animate-[marquee-reverse_42s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {marqueeRow2.map((item, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] p-6 rounded-2xl bg-[#09143f]/80 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-cyan-400/40" />
              </div>

              <p className="text-slate-200 text-sm font-light leading-relaxed mb-6 italic">
                {item.quote}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3779cb] to-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

