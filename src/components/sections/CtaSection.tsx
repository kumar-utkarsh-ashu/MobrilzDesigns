"use client";

import React from "react";
import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";

export function CtaSection({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  return (
    <section id="cta" className="pt-20 md:pt-28 pb-28 md:pb-36 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Card with 32px rounded corners & subtle border */}
        <div className="relative w-full rounded-[32px] overflow-hidden bg-white min-h-[500px] p-8 md:p-14 lg:p-20 border border-slate-200/80 shadow-sm flex items-center">
          
          {/* Concentric Radial Glow Circles with Kinetic Radar Motion */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none flex items-center justify-center opacity-70 select-none">
            <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-400/5 animate-pulse-slow" />
            <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 animate-pulse-slow" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/15" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-blue-500/20" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 max-w-2xl flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-mobrilz-blue font-mono text-xs tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Initiate Sprint Engineering</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-mobrilz-navy tracking-tight leading-[1.08] mb-6">
              Have something <br className="hidden sm:inline" />
              <span className="font-semibold text-mobrilz-blue">to build?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
              Let&apos;s build software that moves your enterprise forward. Fast onboarding, dedicated senior engineers, and full IP handover from day one.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenEstimator}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3779cb] hover:bg-[#275599] text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#faqs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-mobrilz-navy font-medium text-sm tracking-wide transition-all duration-300"
              >
                <span>FAQs</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
