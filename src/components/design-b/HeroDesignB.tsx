"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Sparkles, Shield, Cpu, Activity } from "lucide-react";
import { BeamsBackground } from "../hero/BeamsBackground";
import { McpAgentCard } from "../hero/McpAgentCard";

export function HeroDesignB({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#060d28]">
      <BeamsBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Kinetic Typography & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Kokonut-style Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-6 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Next-Gen Engineering &amp; AI Systems</span>
              </motion.div>

              {/* Exact Headline from source of truth */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.06] mb-6"
              >
                The world doesn&apos;t need <br className="hidden sm:inline" />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#9abbe3]">
                  ordinary solutions
                </span>
              </motion.h1>

              {/* Exact Subtitle from source of truth */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-xl"
              >
                From the first idea to the final launch, we make technology work harder for your business
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
              >
                {/* Primary CTA - Start a project */}
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#3779cb] to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-medium text-sm tracking-wide shadow-[0_10px_30px_rgba(55,121,203,0.35)] hover:shadow-[0_15px_40px_rgba(55,121,203,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* Secondary CTA - FAQs */}
                <a
                  href="#faqs"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>FAQs</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </a>
              </motion.div>

              {/* Real Metrics Ticker Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/10 pt-6 w-full max-w-lg"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">50+</div>
                  <div className="text-xs font-mono text-slate-400 tracking-wider uppercase mt-1">Enterprise Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-cyan-300 tracking-tight">99.9%</div>
                  <div className="text-xs font-mono text-slate-400 tracking-wider uppercase mt-1">SLA Uptime</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">100%</div>
                  <div className="text-xs font-mono text-slate-400 tracking-wider uppercase mt-1">IP Handover</div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Live Interactive MCP Agent Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <McpAgentCard />
            </div>

          </div>
        </div>
      </BeamsBackground>
    </section>
  );
}

