"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles, Layers } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  latency: string;
  benchmark: string;
}

const MATRIX_TECHS: TechItem[] = [
  { name: "pgvector", category: "AI & Vector", latency: "1.2ms", benchmark: "HNSW 1536-dim" },
  { name: "Claude 3.5 Sonnet", category: "Reasoning LLM", latency: "24ms TTFT", benchmark: "200k Context" },
  { name: "OpenAI GPT-4o", category: "Multimodal AI", latency: "18ms TTFT", benchmark: "Low-Latency Audio/Vision" },
  { name: "Next.js 14", category: "Web Frontend", latency: "14ms TTFB", benchmark: "React Server Components" },
  { name: "React Native", category: "Mobile Engine", latency: "60 FPS", benchmark: "New Architecture Fabric" },
  { name: "Flutter", category: "Mobile SDK", latency: "60 FPS", benchmark: "Impeller Engine" },
  { name: "FastAPI", category: "Python Backend", latency: "6ms P99", benchmark: "Asynchronous OpenAPI" },
  { name: "Node.js", category: "API Gateway", latency: "8ms P99", benchmark: "V8 Event Loop" },
  { name: "Kubernetes", category: "Orchestration", latency: "< 12s scale", benchmark: "Auto-Pod Healing" },
  { name: "Docker", category: "Containers", latency: "Zero Drift", benchmark: "OCI Compliant" },
  { name: "Apache Kafka", category: "Event Bus", latency: "< 2ms", benchmark: "100k msg/s" },
  { name: "Redis", category: "Distributed Cache", latency: "0.4ms", benchmark: "In-Memory Cluster" }
];

export function TechStackDesignB() {
  const [hovered, setHovered] = useState<TechItem | null>(null);

  return (
    <section id="technologies" className="w-full bg-[#060d28] border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Throughput Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Cybernetic Technology Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Hardware-accelerated libraries, modern runtimes, and distributed infrastructure.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {MATRIX_TECHS.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={() => setHovered(tech)}
              onMouseLeave={() => setHovered(null)}
              className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-cyan-500/60 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-default group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  {tech.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {tech.latency}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">{tech.benchmark}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

