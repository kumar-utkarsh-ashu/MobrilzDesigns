"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Zap, ShieldCheck } from "lucide-react";

interface CtaDesignBProps {
  onOpenEstimator?: () => void;
}

export function CtaDesignB({ onOpenEstimator }: CtaDesignBProps) {
  return (
    <section id="cta" className="w-full bg-[#030712] border-b border-white/10 py-28 relative overflow-hidden">
      
      {/* Concentric Breathing Radar Rings */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none flex items-center justify-center opacity-60 select-none">
        <div className="absolute w-[900px] h-[900px] rounded-full border border-cyan-500/10 animate-pulse" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-blue-500/20" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/30" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs tracking-wider uppercase backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Launch Your Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Ready to engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              the next standard?
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Partner with a dedicated engineering pod of senior developers and architects. Sprint kickoffs within 7 business days with 100% IP ownership.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenEstimator}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(6,182,212,0.35)] hover:shadow-[0_15px_45px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2 group"
            >
              <span>Calculate Project Scope</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#faqs"
              className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-semibold transition-colors"
            >
              Review SLA &amp; Pricing
            </a>
          </div>

          <div className="pt-6 flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Mutual NDA Guaranteed
            </span>
            <span>•</span>
            <span>Zero Recruitment Markup</span>
          </div>

        </div>
      </div>
    </section>
  );
}

