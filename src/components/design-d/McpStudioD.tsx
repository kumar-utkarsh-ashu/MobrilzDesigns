"use client";

import React, { useState } from "react";
import { Terminal, Play, CheckCircle, Cpu, Zap, Database, Cloud } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface SimulationScenario {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  command: string;
  logs: string[];
  latency: string;
  status: string;
}

const scenarios: SimulationScenario[] = [
  {
    id: "salla",
    name: "Salla Catalog Ingestion",
    icon: <Database className="w-4 h-4 text-cyan-400" />,
    description: "Ingest & synchronize 50,000 Saudi merchant SKUs with automated Arabic translation vectorization.",
    command: "mcp-agent execute --provider=salla --sync=bulk --tenant=alnajah_sa",
    logs: [
      "[INFO] Connecting to Salla Partner OAuth Gateway...",
      "[AUTH] Handshake verified for tenant alnajah_sa (Riyadh Node)",
      "[STREAM] Ingesting 50,000 catalog SKUs via Bulk JSONL endpoint...",
      "[VECTOR] Generating 1536-dim embeddings for Arabic product descriptors...",
      "[DB] Upserting into PostgreSQL pgvector partition...",
      "[DONE] Catalog sync finalized in 1.42s (Zero downtime cutover)",
    ],
    latency: "18ms",
    status: "READY",
  },
  {
    id: "vector",
    name: "Vector RAG Semantic Search",
    icon: <Cpu className="w-4 h-4 text-indigo-400" />,
    description: "Execute hybrid cosine semantic + relational SQL filtering over 100k enterprise documents.",
    command: "mcp-agent query --vector='q1 enterprise compliance audit' --threshold=0.88",
    logs: [
      "[QUERY] Received search token: 'q1 enterprise compliance audit'",
      "[EMBED] Text transformed via text-embedding-3-small (1536 dims)",
      "[HYBRID] Combining BM25 full-text + HNSW vector index...",
      "[FILTER] Applying tenant isolation predicate: organization_id == 8421",
      "[RAG] 5 high-relevance chunks retrieved (similarity: 0.942)",
      "[OUTPUT] Streaming SSE answer to Preact Shadow DOM Widget...",
    ],
    latency: "26ms",
    status: "STREAMING",
  },
  {
    id: "autoscale",
    name: "Multi-Cloud Autoscaling",
    icon: <Cloud className="w-4 h-4 text-sky-400" />,
    description: "Simulate 10,000 req/sec viral traffic spike with Kubernetes horizontal pod autoscaling.",
    command: "kubectl scale deployment mobrilz-api --replicas=32 --region=eu-central-1",
    logs: [
      "[MONITOR] Traffic threshold breached: 10,480 req/sec (+420% delta)",
      "[HPA] HorizontalPodAutoscaler triggered: CPU target > 75%",
      "[K8S] Spawning 24 additional worker pods across 3 availability zones...",
      "[ALB] Route53 weighted health checks passing (HTTP 200)",
      "[CACHE] Redis Enterprise hit ratio: 98.4%",
      "[STABLE] P99 Latency stabilized at 22ms. Zero packet drops.",
    ],
    latency: "22ms",
    status: "OPTIMIZED",
  },
];

export function McpStudioD() {
  const [activeScenario, setActiveScenario] = useState<string>("salla");
  const [isRunning, setIsRunning] = useState(false);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>(scenarios[0].logs);

  const selected = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  const runSimulation = () => {
    setIsRunning(true);
    setDisplayedLogs([]);

    selected.logs.forEach((log, index) => {
      setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, log]);
        if (index === selected.logs.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 260);
    });
  };

  const handleSelect = (id: string) => {
    setActiveScenario(id);
    const target = scenarios.find((s) => s.id === id);
    if (target) {
      setDisplayedLogs(target.logs);
      setIsRunning(false);
    }
  };

  return (
    <section id="mcp-studio" className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Live Architectural Playground</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive Enterprise MCP Studio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            Test how Mobrilz agentic tools and cloud services operate under simulated production workloads.
          </p>
        </div>

        {/* Studio Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Scenarios Selector */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Select Architecture Testbed:
            </span>
            {scenarios.map((sc) => {
              const isActive = sc.id === activeScenario;
              return (
                <div
                  key={sc.id}
                  onClick={() => handleSelect(sc.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#09143f] border-cyan-400/60 shadow-[0_10px_25px_rgba(6,182,212,0.3)]"
                      : "bg-[#060d28]/60 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-bold text-white text-sm">
                      {sc.icon}
                      <span>{sc.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-white/5">
                      {sc.latency}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {sc.description}
                  </p>
                </div>
              );
            })}

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Security Isolation</span>
                <span className="text-emerald-400">SOC2 Type II</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Data Residency</span>
                <span className="text-cyan-400">Saudi & European VPC</span>
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Terminal Console */}
          <div className="lg:col-span-8 rounded-3xl bg-[#030712] border border-white/20 shadow-2xl overflow-hidden font-mono flex flex-col justify-between min-h-[460px]">
            {/* Terminal Window Header */}
            <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2">mcp-runtime@mobrilz-cloud:~</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  {selected.status}
                </span>
                <MagneticWrapper strength={0.3}>
                  <button
                    type="button"
                    disabled={isRunning}
                    onClick={runSimulation}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isRunning ? "Simulating..." : "Run Test"}</span>
                  </button>
                </MagneticWrapper>
              </div>
            </div>

            {/* Terminal Output Log Area */}
            <div className="p-6 text-xs text-slate-300 space-y-2.5 overflow-y-auto font-mono flex-1">
              <div className="text-cyan-400 flex items-center gap-2 pb-2 border-b border-white/5">
                <span className="text-slate-500">$</span>
                <span>{selected.command}</span>
              </div>

              {displayedLogs.map((log, lIdx) => (
                <div key={lIdx} className="leading-relaxed">
                  <span className="text-emerald-400 mr-2">›</span>
                  <span
                    className={
                      log.includes("[DONE]") || log.includes("[STABLE]")
                        ? "text-emerald-300 font-bold"
                        : log.includes("[AUTH]") || log.includes("[INFO]")
                        ? "text-cyan-300"
                        : "text-slate-300"
                    }
                  >
                    {log}
                  </span>
                </div>
              ))}

              {isRunning && (
                <div className="flex items-center gap-2 text-cyan-400 pt-2 animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  <span>Processing sub-routine streams...</span>
                </div>
              )}
            </div>

            {/* Terminal Status Bar */}
            <div className="px-5 py-2.5 bg-white/5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Live Architecture Sandbox
              </span>
              <span>P99: {selected.latency}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

