"use client";

import React, { useState, useRef, useEffect } from "react";
import { Cpu, Code, Database, Cloud, Terminal, Sparkles } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";
import { gsap } from "@/lib/motion/gsap";

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
  { name: "Three.js / WebGL", category: "frontend", desc: "Hardware-Accelerated 3D Graphics", badge: "3D Pipeline" },
  { name: "Flutter & React Native", category: "frontend", desc: "120 FPS Cross-Platform Mobile", badge: "Mobile" },

  // Backend
  { name: "Node.js & Bun", category: "backend", desc: "High-Throughput Asynchronous Runtimes", badge: "Runtime" },
  { name: "FastAPI & Python", category: "backend", desc: "SSE Streaming & AI Middleware", badge: "Python" },
  { name: "Go (Golang)", category: "backend", desc: "Microsecond Concurrency Microservices", badge: "Compiled" },
  { name: "GraphQL & REST", category: "backend", desc: "Type-Safe Client API Gateways", badge: "API" },

  // Cloud & Data
  { name: "PostgreSQL & pgvector", category: "cloud", desc: "ACID RDBMS + 1536-dim Embeddings", badge: "Database" },
  { name: "Redis Enterprise", category: "cloud", desc: "Sub-Millisecond In-Memory Caching", badge: "Cache" },
  { name: "Kubernetes & EKS", category: "cloud", desc: "Auto-Healing Container Clusters", badge: "DevOps" },
  { name: "Terraform & OpenTofu", category: "cloud", desc: "Declarative Infrastructure as Code", badge: "IaC" },
  { name: "AWS & GCP Multi-Cloud", category: "cloud", desc: "Global Edge CDN & Redundancy", badge: "Cloud" },

  // AI & MCP
  { name: "Model Context Protocol", category: "ai", desc: "Anthropic MCP Tool Server Architecture", badge: "Agentic" },
  { name: "OpenAI GPT-4o & Haiku", category: "ai", desc: "Ultra-Fast Multi-Step Reasoning", badge: "LLMs" },
  { name: "LangChain & LlamaIndex", category: "ai", desc: "Multi-Hop Retrieval Orchestration", badge: "RAG" },
];

export function TechStackKineticC() {
  const [activeFilter, setActiveFilter] = useState<"all" | "frontend" | "backend" | "cloud" | "ai">("all");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = techItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // GSAP Stagger on filter change
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-tech-item",
        { opacity: 0.4, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.03,
          ease: "back.out(1.2)",
          clearProps: "all",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full py-28 bg-[#060d28] col-lines overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Enterprise Production Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Battle-Tested Technologies
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Zero deprecated frameworks. Every layer is benchmarked for memory safety, concurrency, and multi-tenant isolation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
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
                    : "bg-white/5 text-slate-300 hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            </MagneticWrapper>
          ))}
        </div>

        {/* Kinetic Technology Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((item) => (
            <div
              key={item.name}
              className="gsap-tech-item group relative p-6 rounded-2xl bg-[#09143f]/80 border border-white/10 hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_35px_rgba(6,182,212,0.2)]"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {item.badge}
                </span>
              </div>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
