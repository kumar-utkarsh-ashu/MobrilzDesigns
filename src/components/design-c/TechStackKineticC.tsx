"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Database, Cloud, Terminal } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "cloud" | "ai";
  desc: string;
  badge: string;
}

const techItems: TechItem[] = [
  // Frontend
  { name: "Next.js 14", category: "frontend", desc: "App Router & Edge Server Rendering", badge: "Core Web" },
  { name: "React 18", category: "frontend", desc: "Concurrent Mode & Suspense Transitions", badge: "Library" },
  { name: "TypeScript", category: "frontend", desc: "Strict Type Safety & Zero Any Policy", badge: "Language" },
  { name: "Tailwind CSS", category: "frontend", desc: "Utility-First Design Tokens", badge: "Styling" },
  { name: "Three.js / WebGL", category: "frontend", desc: "Hardware-Accelerated 3D Pipelines", badge: "3D Graphics" },
  { name: "Flutter & React Native", category: "frontend", desc: "120 FPS Cross-Platform Apps", badge: "Mobile" },

  // Backend
  { name: "Node.js & Bun", category: "backend", desc: "High-Throughput Asynchronous Runtimes", badge: "Runtime" },
  { name: "FastAPI & Python", category: "backend", desc: "SSE Streaming & AI Middleware", badge: "Python" },
  { name: "Go (Golang)", category: "backend", desc: "Microsecond Concurrency Services", badge: "Compiled" },
  { name: "GraphQL & REST", category: "backend", desc: "Type-Safe Client API Gateways", badge: "API" },

  // Cloud & Data
  { name: "PostgreSQL & pgvector", category: "cloud", desc: "ACID RDBMS + Vector Embeddings", badge: "Database" },
  { name: "Redis Enterprise", category: "cloud", desc: "Sub-Millisecond In-Memory Caching", badge: "Cache" },
  { name: "Kubernetes & EKS", category: "cloud", desc: "Auto-Healing Container Clusters", badge: "DevOps" },
  { name: "Terraform & OpenTofu", category: "cloud", desc: "Declarative Infrastructure as Code", badge: "IaC" },
  { name: "AWS & GCP Multi-Cloud", category: "cloud", desc: "Global Edge CDN & Redundancy", badge: "Cloud" },

  // AI & MCP
  { name: "Model Context Protocol", category: "ai", desc: "Anthropic MCP Tool Integration", badge: "Agentic" },
  { name: "OpenAI GPT-4o & Haiku", category: "ai", desc: "Ultra-Fast Reasoning & Tool Calling", badge: "LLMs" },
  { name: "LangChain & LlamaIndex", category: "ai", desc: "Multi-Step Retrieval Orchestration", badge: "RAG" },
];

export function TechStackKineticC() {
  const [activeFilter, setActiveFilter] = useState<"all" | "frontend" | "backend" | "cloud" | "ai">("all");

  const filtered = techItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section className="relative z-20 w-full py-28 bg-[#060d28] col-lines overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Production Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Battle-Tested Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            Zero deprecated frameworks. Every layer is benchmarked for memory safety, concurrency, and multi-tenant isolation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: "All Layers" },
            { id: "frontend", label: "Frontend & 3D" },
            { id: "backend", label: "Backend Runtimes" },
            { id: "cloud", label: "Cloud & Database" },
            { id: "ai", label: "Enterprise AI & MCP" },
          ].map((btn) => (
            <MagneticWrapper key={btn.id} strength={0.25}>
              <button
                type="button"
                onClick={() => setActiveFilter(btn.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                  activeFilter === btn.id
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)] font-bold scale-105"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            </MagneticWrapper>
          ))}
        </div>

        {/* Kinetic Technology Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28 }}
                className="group relative p-6 rounded-2xl bg-[#09143f]/60 hover:bg-[#09143f]/90 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(55,121,203,0.2)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {item.badge}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-1 my-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Architecture SLA</span>
                  <span className="text-cyan-400">99.9% Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

