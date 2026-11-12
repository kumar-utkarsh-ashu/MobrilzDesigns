"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { faqsData } from "@/lib/data/faqs";

interface FaqKineticCProps {
  onOpenEstimator?: () => void;
}

export function FaqKineticC({ onOpenEstimator }: FaqKineticCProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative z-20 w-full py-28 bg-[#09143f]/90 col-lines overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Diagnostic Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            Everything you need to know about milestone contracts, intellectual property, and team ramp-up.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqsData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#060d28]/95 border-cyan-400/50 shadow-[0_10px_30px_rgba(55,121,203,0.2)]"
                    : "bg-[#060d28]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-cyan-500/20 text-cyan-300 rotate-180"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed font-light border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

