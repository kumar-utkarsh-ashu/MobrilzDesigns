"use client";

import React, { useState, useRef } from "react";
import { Terminal, Play, CheckCircle, Cpu, Zap, Database, Cloud, Sparkles } from "lucide-react";
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
  const terminalRef = useRef<HTMLDivElement>(null);

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
      }, (index + 1) * 350);
    });
  };

  const handleScenarioChange = (id: string) => {
    setActiveScenario(id);
    const scen = scenarios.find((s) => s.id === id);
    if (scen) {
      setDisplayedLogs(scen.logs);
      setIsRunning(false);
    }
  };

  return (
    <section
      id="mcp-studio"
      className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Anthropic Model Context Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive Enterprise MCP Studio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Test simulated autonomous agent workflows with real-time SSE streaming logs.
          </p>
        </div>

        {/* Terminal Sandbox Card */}
        <div
          ref={terminalRef}
          className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-b from-[#09143f]/90 to-[#030718]/95 border border-white/20 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl transition-all duration-300 hover:border-cyan-400/50"
        >
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Scenario Selector Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {scenarios.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => handleScenarioChange(scen.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activeScenario === scen.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                      : "bg-white/5 text-slate-300 hover:text-white border border-white/10"
                  }`}
                >
                  {scen.icon}
                  <span>{scen.name}</span>
                </button>
              ))}
            </div>

            {/* Run Button */}
            <MagneticWrapper strength={0.25}>
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-[#3779cb] hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-mono text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? "Running Agent Pipeline..." : "Execute MCP Simulation"}</span>
              </button>
            </MagneticWrapper>
          </div>

          {/* Description & Status */}
          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-300 font-light">
              {selected.description}
            </span>
            <div className="flex items-center gap-3 text-cyan-400 flex-shrink-0">
              <span>Latency: {selected.latency}</span>
              <span>•</span>
              <span className="text-emerald-400">Status: {selected.status}</span>
            </div>
          </div>

          {/* Terminal Console View */}
          <div className="mt-2 rounded-2xl bg-[#010410] border border-cyan-500/30 p-5 font-mono text-xs overflow-hidden shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-slate-300 ml-1">mcp-agent-session-live</span>
              </div>
              <span className="text-cyan-400">84 tokens/s</span>
            </div>

            <div className="text-cyan-300 mb-3 font-semibold">
              $ {selected.command}
            </div>

            <div className="space-y-1.5 min-h-[140px] text-slate-300 text-[11px] leading-relaxed">
              {displayedLogs.map((log, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-bottom-1 duration-200">
                  <span className="text-cyan-400">{log.slice(0, log.indexOf("]") + 1)}</span>
                  <span>{log.slice(log.indexOf("]") + 1)}</span>
                </div>
              ))}
              {isRunning && (
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="w-2 h-3.5 bg-cyan-400 animate-pulse" />
                  <span>Streaming neural token inference...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
