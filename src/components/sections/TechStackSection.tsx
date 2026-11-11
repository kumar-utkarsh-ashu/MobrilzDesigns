"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { techStackData } from "@/lib/data/services";
import { Globe, Smartphone, Cloud, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function TechStackSection() {
  const [activeStack, setActiveStack] = useState<"web" | "mobile" | "cloud" | "ai">("web");

  const stackIcons = {
    web: <Globe className="w-4 h-4" />,
    mobile: <Smartphone className="w-4 h-4" />,
    cloud: <Cloud className="w-4 h-4" />,
    ai: <Sparkles className="w-4 h-4" />,
  };

  const current = techStackData[activeStack];

  return (
    <section id="technologies" className="py-24 md:py-36 bg-[#060d28] text-white relative overflow-hidden border-t border-[#1b2b65]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono text-xs tracking-wider uppercase mb-4">
            <span>Enterprise Technology Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
            Agile Driven Web &amp; <br className="hidden sm:inline" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
              Mobile App Development Services
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            Full stack architectural blueprint connecting scalable cloud microservices, reactive frontends, and cross platform native mobile ecosystems under unified enterprise CI/CD.
          </p>
        </div>

        {/* Stack Nav Pills with Gliding Spring Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {(["web", "mobile", "cloud", "ai"] as const).map((key) => {
            const isSelected = activeStack === key;
            return (
              <button
                key={key}
                onClick={() => setActiveStack(key)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  isSelected ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="tech-stack-tab-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] shadow-md shadow-blue-500/20 z-0"
                  />
                )}
                {!isSelected && (
                  <span className="absolute inset-0 rounded-full bg-[#09143f] border border-[#1b2b65] z-0" />
                )}
                <span className="relative z-10">{stackIcons[key]}</span>
                <span className="relative z-10 capitalize">
                  {key === "ai" ? "Enterprise AI & MCP" : key}
                </span>
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {current.categories.map((cat, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(55, 121, 203, 0.2)"
              className="p-6 border-[#1b2b65] bg-[#09143f]/80 hover:border-blue-400/50"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-blue-400/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
