"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Sparkles, Shield, Cpu, Activity } from "lucide-react";
import { BeamsBackground } from "./BeamsBackground";
import { McpAgentCard } from "./McpAgentCard";

export function HeroSection({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <BeamsBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Kinetic Typography & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Kokonut-style Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 font-mono text-xs tracking-wider uppercase mb-6 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-mobrilz-blue animate-pulse" />
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
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#9abbe3]">
                  ordinary solutions
                </span>
              </motion.h1>

              {/* Exact Subtitle from source of truth */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-10"
              >
                From the first idea to the final launch, we make technology work harder for your business
              </motion.p>

              {/* Exact Action Buttons from source of truth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] hover:from-[#408eeb] hover:to-[#3779cb] text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-[1.02]"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href="#faqs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm tracking-wide border border-white/15 transition-all duration-300 backdrop-blur-sm hover:border-white/25"
                >
                  <span>FAQs</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </motion.div>

              {/* Verified Enterprise Metric Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 w-full max-w-lg"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    <span>50+</span>
                  </div>
                  <div className="text-xs text-slate-400 font-light mt-0.5">Enterprise Projects</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    <span>99.9%</span>
                  </div>
                  <div className="text-xs text-slate-400 font-light mt-0.5">SLA Uptime</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    <span>100%</span>
                  </div>
                  <div className="text-xs text-slate-400 font-light mt-0.5">IP Handover</div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Live Interactive AI Agent Studio Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5 w-full flex justify-center"
            >
              <McpAgentCard />
            </motion.div>

          </div>
        </div>
      </BeamsBackground>
    </section>
  );
}
