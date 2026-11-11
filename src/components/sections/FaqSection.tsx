"use client";

import React, { useState } from "react";
import { faqsData } from "@/lib/data/faqs";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export function FaqSection({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-32 bg-[#060d28] text-white relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:w-[42%] lg:sticky lg:top-28 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15]">
                Frequently Asked <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
                  Questions
                </span>
              </h2>
              <p className="max-w-[480px] text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Before kicking off your next sprint or dedicated build, get clarity on pricing models, IP ownership, timezones, and senior team orchestration.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenEstimator}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0a1638]/70 hover:bg-[#0f2152] text-white text-xs sm:text-sm font-medium tracking-wide border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 shadow-sm backdrop-blur-sm"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:w-[58%] w-full flex flex-col gap-3">
            {faqsData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#09143f] border border-[#1b2b65] hover:border-[#3779cb]/50 transition-colors duration-300 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 sm:p-7 text-left focus:outline-none transition-colors"
                  >
                    <span className="text-base sm:text-lg font-semibold tracking-tight text-white leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 text-slate-300 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-sky-400 bg-sky-500/10" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
