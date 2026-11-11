"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { faqsData } from "@/lib/data/faqs";

interface FaqDesignBProps {
  onOpenEstimator?: () => void;
}

export function FaqDesignB({ onOpenEstimator }: FaqDesignBProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full bg-[#060d28] border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Operational Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Everything you need to know about pricing, IP ownership, and ramp-up times.
          </p>
        </div>

        {/* Drawers */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-b from-white/[0.08] to-white/[0.03] border-cyan-500/50 shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      SYS_0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

