"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Cpu, Palette, Sparkles, Terminal, Activity, ArrowUpRight } from "lucide-react";

interface ServiceBento {
  title: string;
  category: string;
  desc: string;
  icon: React.ElementType;
  metric: string;
  technologies: string[];
  colSpan: string;
}

const BENTO_SERVICES: ServiceBento[] = [
  {
    title: "Autonomous AI Agents & Enterprise RAG",
    category: "AI ENGINEERING LAB",
    desc: "Custom domain-tuned LLM agents using Model Context Protocol (MCP), pgvector semantic search, and structured streaming pipelines.",
    icon: Cpu,
    metric: "84 tokens/s • 0 hallucination",
    technologies: ["pgvector", "Claude 3.5 Sonnet", "OpenAI GPT-4o", "LangChain"],
    colSpan: "lg:col-span-8"
  },
  {
    title: "High-FPS Mobile Applications",
    category: "MOBILE RUNTIME",
    desc: "Offline-first cross-platform and native apps engineered for 60fps gesture fluidness.",
    icon: Smartphone,
    metric: "Crash-free: 99.96%",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    colSpan: "lg:col-span-4"
  },
  {
    title: "Distributed Microservices & Cloud APIs",
    category: "EVENT-DRIVEN BACKEND",
    desc: "Stateless container architectures auto-scaling from 0 to 100k requests per second with zero-downtime cutover.",
    icon: Globe,
    metric: "P95 Latency: < 42ms",
    technologies: ["FastAPI", "Node.js", "Docker", "Kubernetes", "Redis"],
    colSpan: "lg:col-span-6"
  },
  {
    title: "Next-Gen Design Systems & Web Architecture",
    category: "DIGITAL EXPERIENCE",
    desc: "Sub-second PageSpeed, WCAG 2.1 AA accessibility, and atomic design tokens in Storybook.",
    icon: Palette,
    metric: "100 Lighthouse Performance",
    technologies: ["Next.js 14", "Tailwind CSS", "shadcn/ui", "Figma"],
    colSpan: "lg:col-span-6"
  }
];

export function ExpertiseDesignB() {
  return (
    <section id="services" className="w-full bg-[#060d28] border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Engineering Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Core Technical Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            High-leverage engineering services structured for modern enterprise demands.
          </p>
        </div>

        {/* Holographic Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {BENTO_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-8 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden ${item.colSpan}`}
              >
                {/* Glowing Corner Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800 px-3 py-1 rounded-full">
                      {item.metric}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-slate-400 tracking-wider uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#cta"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>EXPLORE STACK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

