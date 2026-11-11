"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { faqsData } from "@/lib/data/faqs";

interface FaqDesignAProps {
  onOpenEstimator?: () => void;
}

export function FaqDesignA({ onOpenEstimator }: FaqDesignAProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full bg-[#fbfcfd] border-b border-slate-200 py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Operational FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear answers regarding contracts, pricing models, IP ownership, and sprint communication.
          </p>
        </div>

        {/* Diagnostic Accordions */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? "border-blue-600 shadow-md ring-1 ring-blue-500/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-blue-700">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a specific architectural inquiry?</h4>
              <p className="text-xs text-slate-500">Our engineering leads answer inquiries within 4 business hours.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenEstimator}
            className="px-5 py-2.5 rounded-lg bg-[#09143f] text-white text-xs font-semibold hover:bg-[#1a2b6d] transition-colors whitespace-nowrap"
          >
            Ask an Engineer
          </button>
        </div>

      </div>
    </section>
  );
}

