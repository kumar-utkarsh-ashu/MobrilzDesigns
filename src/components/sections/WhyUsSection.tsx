"use client";

import React from "react";
import { MessageSquare, Zap, Lock, ArrowUpRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function WhyUsSection({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  return (
    <section id="why-us" className="py-24 md:py-36 bg-[#09143f] text-white border-t border-[#1b2b65] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-mobrilz-blue font-mono text-xs tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Value &amp; Rigor</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Why Founders and Enterprises <br className="hidden sm:inline" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
                Partner with Us
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              We design and engineer high performance digital products, scaling ambitious brands with senior technical rigor and zero agency overhead.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] hover:from-[#408eeb] hover:to-[#3779cb] text-white text-sm font-medium transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.02]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid with Spotlight Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Communication */}
          <SpotlightCard
            spotlightColor="rgba(55, 121, 203, 0.25)"
            className="p-7 sm:p-8 border-[#1b2b65] bg-[#060d28]/70 hover:border-blue-400/50"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-sky-400 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-sky-400 uppercase font-semibold mb-1">
              Boundary Pushing Digital Craft
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Rapid &amp; Transparent Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Direct Slack and video communication with lead architects. Daily asynchronous standups, transparent sprints, and minimum 4 to 5 hours real time timezone overlap with US &amp; European business days.
            </p>
          </SpotlightCard>

          {/* Card 2: Velocity & Battle-Tested */}
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.2)"
            className="p-7 sm:p-8 border-[#1b2b65] bg-[#060d28]/70 hover:border-emerald-400/50"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-emerald-400 uppercase font-semibold mb-1">
              Fast &amp; High Velocity Delivery
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Battle Tested Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Decade of production hardened engineering. Clean maintainable code, CI/CD automated test suites, and 50 to 65% cost arbitrage with no quality compromise.
            </p>
          </SpotlightCard>

          {/* Card 3: 100% IP Ownership */}
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.2)"
            className="p-7 sm:p-8 border-[#1b2b65] bg-[#060d28]/70 hover:border-indigo-400/50"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono text-indigo-400 uppercase font-semibold mb-1">
              100% Yours
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Mutual NDA &amp; IP Protection
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              All commits, source code repositories, and intellectual property belong exclusively to your organization from Day 1. Zero vendor lock in, with strict enterprise confidentiality agreements.
            </p>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
