"use client";

import React, { useState } from "react";
import { Layers, Server, Cpu, Cloud, Smartphone, Globe, Shield } from "lucide-react";

interface TechTier {
  id: string;
  name: string;
  layer: string;
  description: string;
  technologies: { name: string; role: string; highlight: string }[];
}

const ARCHITECTURE_TIERS: TechTier[] = [
  {
    id: "presentation",
    name: "Presentation & Client Tier",
    layer: "Layer 01 // Frontend & Mobile",
    description: "Responsive web applications, mobile binaries, and edge-hydrated user interfaces.",
    technologies: [
      { name: "Next.js 14", role: "SSR & App Router", highlight: "Sub-50ms TTFB" },
      { name: "React Native", role: "Cross-Platform iOS/Android", highlight: "60 FPS Native" },
      { name: "Flutter", role: "Cross-Platform", highlight: "Single Codebase" },
      { name: "Swift", role: "Native iOS", highlight: "Metal Performance" },
      { name: "TypeScript", role: "Type Safety", highlight: "Strict Type System" },
      { name: "Tailwind CSS", role: "Design Token Utility", highlight: "Zero Runtime Overhead" }
    ]
  },
  {
    id: "services",
    name: "Microservices & API Gateway Tier",
    layer: "Layer 02 // Business Logic",
    description: "Distributed microservices, event buses, and high-throughput streaming APIs.",
    technologies: [
      { name: "Node.js", role: "Asynchronous APIs", highlight: "Event-Loop Efficiency" },
      { name: "FastAPI", role: "Python Microservices", highlight: "Asynchronous OpenAPI" },
      { name: "Go (Golang)", role: "High-Concurrency Workers", highlight: "Ultra-low Memory" },
      { name: "GraphQL", role: "Unified Schema", highlight: "Zero Over-Fetching" },
      { name: "Apache Kafka", role: "Event Streaming", highlight: "100k+ msg/s" },
      { name: "gRPC", role: "Internal Service RPC", highlight: "Protobuf Efficiency" }
    ]
  },
  {
    id: "ai",
    name: "AI & Intelligence Tier",
    layer: "Layer 03 // Vector Engine",
    description: "Vector embeddings, autonomous agent orchestration, and enterprise RAG pipelines.",
    technologies: [
      { name: "pgvector", role: "Vector Similarity Engine", highlight: "HNSW Indexing" },
      { name: "Claude 3.5 Sonnet", role: "Reasoning & Synthesis", highlight: "200k Context Window" },
      { name: "OpenAI GPT-4o", role: "Multimodal Generation", highlight: "Low Latency" },
      { name: "LangChain", role: "Agent Framework", highlight: "Tool-Calling Chains" },
      { name: "LlamaIndex", role: "Data Ingestion", highlight: "Hierarchical Indexing" }
    ]
  },
  {
    id: "infrastructure",
    name: "Cloud & Infrastructure Tier",
    layer: "Layer 04 // Cloud & CI/CD",
    description: "Container orchestration, multi-region cloud deployment, and automated CI/CD.",
    technologies: [
      { name: "AWS", role: "Enterprise Cloud", highlight: "Multi-Region VPC" },
      { name: "Google Cloud", role: "AI & BigQuery Infrastructure", highlight: "Global Fiber Network" },
      { name: "Docker", role: "Containerization", highlight: "Reproducible Builds" },
      { name: "Kubernetes", role: "Pod Orchestration", highlight: "Self-Healing Clusters" },
      { name: "Terraform", role: "Infrastructure as Code", highlight: "Immutable Deployments" },
      { name: "Redis", role: "Distributed In-Memory Cache", highlight: "Sub-millisecond P99" }
    ]
  }
];

export function TechStackDesignA() {
  const [activeTier, setActiveTier] = useState<string>("presentation");

  return (
    <section id="technologies" className="w-full bg-[#fbfcfd] border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Multi-Tier Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
            Enterprise Technology Blueprint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A layered engineering stack chosen for long-term scalability, strict security, and zero vendor lock-in.
          </p>
        </div>

        {/* 4 Stacked Horizontal Architecture Tiers */}
        <div className="space-y-4">
          {ARCHITECTURE_TIERS.map((tier) => {
            const isExpanded = activeTier === tier.id;
            return (
              <div
                key={tier.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-blue-600 shadow-md ring-1 ring-blue-500/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Tier Bar Header */}
                <button
                  type="button"
                  onClick={() => setActiveTier(tier.id)}
                  className="w-full px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left bg-white hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {tier.id === "presentation" ? "01" : tier.id === "services" ? "02" : tier.id === "ai" ? "03" : "04"}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono text-blue-600 uppercase font-semibold block">
                        {tier.layer}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-md hidden md:block">
                    {tier.description}
                  </p>
                </button>

                {/* Tier Technology Chips */}
                <div className={`px-6 pb-6 pt-2 border-t border-slate-100 ${isExpanded ? "block" : "hidden sm:block"}`}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {tier.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all"
                      >
                        <div className="text-xs font-bold text-slate-900">{tech.name}</div>
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">{tech.role}</div>
                        <span className="inline-block mt-2 px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-100">
                          {tech.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

