"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDown, Cpu, Server, Database, Globe, CheckCircle2, Shield, Activity, Sparkles } from "lucide-react";

interface HeroDesignAProps {
  onOpenEstimator?: () => void;
}

interface NodeDetail {
  id: string;
  label: string;
  subtitle: string;
  tech: string;
  latency: string;
  throughput: string;
  status: string;
  details: string;
}

const ARCHITECTURE_NODES: NodeDetail[] = [
  {
    id: "edge",
    label: "Client Edge Tier",
    subtitle: "Next.js 14 & React Native",
    tech: "Edge CDN • Global PoPs",
    latency: "14ms",
    throughput: "12,400 req/s",
    status: "Healthy",
    details: "Sub-50ms TTFB across North America, Europe, and Middle East with hybrid static-dynamic hydration."
  },
  {
    id: "gateway",
    label: "API & Event Gateway",
    subtitle: "FastAPI & Envoy Proxy",
    tech: "gRPC • Kafka Streams",
    latency: "8ms",
    throughput: "45,000 req/s",
    status: "Active",
    details: "Automated JWT rotation, mTLS zero-trust communication, rate limiting, and distributed tracing."
  },
  {
    id: "compute",
    label: "Microservices Cluster",
    subtitle: "Node.js & Python Services",
    tech: "Kubernetes • Auto-Scale",
    latency: "22ms",
    throughput: "28,000 req/s",
    status: "Optimized",
    details: "Stateless container pods auto-scaling from 4 to 128 replicas within 12 seconds under load spikes."
  },
  {
    id: "data",
    label: "pgvector & AI Pipeline",
    subtitle: "PostgreSQL & Vector Store",
    tech: "OpenAI • Claude • HNSW",
    latency: "34ms",
    throughput: "3,800 queries/s",
    status: "Operational",
    details: "Sub-millisecond cosine distance lookups with 1536-dimensional embeddings for enterprise RAG."
  }
];

export function HeroDesignA({ onOpenEstimator }: HeroDesignAProps) {
  const [selectedNode, setSelectedNode] = useState<NodeDetail>(ARCHITECTURE_NODES[0]);

  return (
    <section id="hero" className="relative w-full bg-gradient-to-b from-[#081033] via-[#09143f] to-[#0a1545] text-white border-b border-blue-900/40 overflow-hidden pt-14 pb-24">
      {/* Precision Drafting Grid Canvas with Glowing Coordinate Hairlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3779cb 1px, transparent 1px),
            linear-gradient(to bottom, #3779cb 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px"
        }}
      />

      {/* Ambient Blueprint Aura Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] pointer-events-none" />

      {/* Decorative Technical Coordinate Labels */}
      <div className="absolute top-4 left-8 text-[10px] font-mono text-blue-400/60 select-none tracking-widest hidden lg:block">
        SYS.ARCH.DRAFTING_GRID :: LAT: 28.6139° N / LONG: 77.2090° E
      </div>
      <div className="absolute top-4 right-8 text-[10px] font-mono text-blue-400/60 select-none tracking-widest hidden lg:block">
        BUILD SPEC: ISO-27001 / SOC2 / 99.99% SLA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Swiss Architectural Typography on Deep Navy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>ARCHITECTURAL ENGINEERING &amp; AI SYSTEMS</span>
            </div>

            {/* Exact Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              The world doesn&apos;t need <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#9abbe3]">
                ordinary solutions
              </span>
            </h1>

            {/* Exact Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
              From the first idea to the final launch, we make technology work harder for your business.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all duration-200 group"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#faqs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm tracking-wide backdrop-blur-md transition-all duration-200"
              >
                <span>FAQs</span>
                <ArrowDown className="w-4 h-4 text-blue-300" />
              </a>
            </div>

            {/* Architectural Trust Points with Glass Cards */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">50+</div>
                <div className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">Enterprise Builds</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">99.9%</div>
                <div className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">SLA Uptime</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
                <div className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">IP Ownership</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Blueprint Canvas */}
          <div className="lg:col-span-6">
            <div className="bg-[#0b1747]/90 rounded-2xl border border-blue-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl">
              
              {/* Drafting Header Bar */}
              <div className="bg-[#081033] px-5 py-3.5 border-b border-blue-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono font-medium text-blue-200">
                    topology_viewer.live.spec
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    LIVE TELEMETRY
                  </span>
                </div>
              </div>

              {/* Topology Nodes Grid */}
              <div className="p-6">
                <div className="text-xs font-mono text-blue-300/80 uppercase tracking-wider mb-3">
                  Interactive Topology Pipeline (Select Node to Inspect)
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {ARCHITECTURE_NODES.map((node, idx) => {
                    const isSelected = selectedNode.id === node.id;
                    const icons = [Globe, Shield, Server, Database];
                    const Icon = icons[idx];

                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setSelectedNode(node)}
                        className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? "bg-blue-600/30 border-blue-400 shadow-lg ring-1 ring-blue-400 text-white"
                            : "bg-white/5 border-white/10 hover:border-blue-400/40 hover:bg-white/10 text-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className={`p-1.5 rounded-lg ${isSelected ? "bg-blue-500 text-white" : "bg-white/10 text-blue-300"}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-blue-300">
                            0{idx + 1}/NODE
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white truncate">{node.label}</div>
                        <div className="text-[11px] text-slate-300 truncate">{node.subtitle}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Live Node Telemetry Inspection Sheet */}
                <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-300">{selectedNode.label}</span>
                      <p className="text-[11px] text-slate-300">{selectedNode.tech}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                      {selectedNode.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedNode.details}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div className="p-2.5 rounded-lg bg-black/20 border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">P99 Latency</span>
                      <span className="text-sm font-mono font-bold text-blue-300">{selectedNode.latency}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/20 border border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Peak Ingestion</span>
                      <span className="text-sm font-mono font-bold text-white">{selectedNode.throughput}</span>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Architecture Footer Status */}
              <div className="px-5 py-3 bg-[#081033] border-t border-blue-500/20 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Continuous Health Checks Active
                </span>
                <span className="font-mono text-[11px] text-blue-300">
                  Node Sync: 100%
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
