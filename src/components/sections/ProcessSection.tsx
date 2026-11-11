"use client";

import React from "react";
import { processStages } from "@/lib/data/services";
import { CheckCircle2, GitCommit, Zap, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#060d28] text-white relative overflow-hidden border-t border-[#1b2b65]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      {/* Ambient Lighting Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3779cb]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-xs tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-mobrilz-blue" />
            <span>Disciplined Agile Sprint Highway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
            How we turn vision into <br className="hidden sm:inline" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
              production software
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            A disciplined 4 stage sprint highway with continuous integration, milestone validation checkpoints, and transparent client deliverables from Day 1.
          </p>
        </div>

        {/* Anime.js-style Connected Milestone Highway */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {processStages.map((stage, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(55, 121, 203, 0.2)"
              className="flex flex-col justify-between p-6 sm:p-7 border-[#1b2b65] bg-[#09143f]/80 hover:border-blue-400/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                    {stage.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-blue-300 border border-white/10">
                    <GitCommit className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Milestone Deliverable Box */}
              <div className="pt-4 border-t border-white/10 bg-white/[0.02] -mx-6 -mb-6 p-6 rounded-b-3xl">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{stage.milestone}</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {stage.deliverable}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
