"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/data/services";
import { ArrowUpRight, Code2, Palette, Server, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState("development");

  const icons: Record<string, React.ReactNode> = {
    development: <Code2 className="w-4 h-4" />,
    design: <Palette className="w-4 h-4" />,
    infrastructure: <Server className="w-4 h-4" />,
    marketing: <TrendingUp className="w-4 h-4" />,
  };

  const currentCategory = servicesData.find((cat) => cat.id === activeTab) || servicesData[0];

  return (
    <section id="expertise" className="py-24 md:py-36 bg-[#09143f] text-white relative overflow-hidden border-t border-[#1b2b65]">
      {/* Background Subtle Ambient Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-mobrilz-blue font-mono text-xs tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities &amp; Engineering Practices</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08]">
            Engineered for <br className="hidden sm:inline" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
              modern scale
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            Comprehensive full lifecycle engineering, design, and growth services tailored to elevate and scale your business.
          </p>
        </div>

        {/* Tab Controls with Gliding Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/10">
          {servicesData.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="services-tab-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3779cb] to-[#275599] shadow-sm z-0"
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full bg-white/5 border border-white/10 z-0" />
                )}
                <span className="relative z-10">{icons[category.id]}</span>
                <span className="relative z-10">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCategory.items.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(55, 121, 203, 0.2)"
              className="flex flex-col justify-between p-5 border-[#1b2b65] bg-[#060d28]/70 hover:border-blue-400/50"
            >
              <div>
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 mb-5 border border-white/10">
                  <img
                    src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Production Ready</span>
                </span>
                <a
                  href="#cta"
                  className="p-1.5 rounded-full bg-white/5 hover:bg-[#3779cb] text-slate-400 hover:text-white transition-colors"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
