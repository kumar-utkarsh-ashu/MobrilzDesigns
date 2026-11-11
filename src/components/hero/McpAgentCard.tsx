"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Cloud, Sparkles, CheckCircle2, Play, Code2 } from "lucide-react";

export function McpAgentCard() {
  const [activeTab, setActiveTab] = useState<"database" | "deploy" | "rag">("database");
  const [isRunning, setIsRunning] = useState(false);
  const [outputLog, setOutputLog] = useState<string[]>([
    "✓ MCP Client initialized (session: mcp-session-0914)",
    "✓ Connected to Enterprise pgvector & Microservice Cluster",
    "• Ready to route autonomous model requests..."
  ]);

  const executeSimulation = (type: "database" | "deploy" | "rag") => {
    setActiveTab(type);
    setIsRunning(true);
    setOutputLog((prev) => [...prev, `→ Running MCP Tool: [${type}_orchestration]...`]);

    setTimeout(() => {
      if (type === "database") {
        setOutputLog((prev) => [
          ...prev,
          "  ↳ Querying hybrid vector + metadata index [2.4ms]",
          "  ↳ Found 14 matching enterprise records (confidence: 0.984)",
          "✓ Database tool call executed successfully"
        ]);
      } else if (type === "deploy") {
        setOutputLog((prev) => [
          ...prev,
          "  ↳ Validating Kubernetes Helm charts & Docker signatures",
          "  ↳ Blue-Green zero downtime cutover triggered",
          "✓ Deployed to production edge nodes (12 regions)"
        ]);
      } else {
        setOutputLog((prev) => [
          ...prev,
          "  ↳ Embedding context window: 128k tokens cached",
          "  ↳ RAG synthesis via Claude 3.5 Sonnet & GPT-4o",
          "✓ Stream complete: 84 tokens/sec, 0 hallucinations"
        ]);
      }
      setIsRunning(false);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-[#09143f]/90 backdrop-blur-xl border border-blue-500/30 shadow-[0_20px_50px_rgba(6,13,40,0.6)] overflow-hidden text-left font-sans">
      {/* Jiro-style top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#060d28]/70">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-blue-200/70 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-mobrilz-blue" />
            mobrilz-mcp-agent.v2
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ACTIVE
          </span>
        </div>
      </div>

      {/* Tool Selector Tabs */}
      <div className="flex items-center gap-1 px-4 pt-3 pb-2 border-b border-white/5 bg-white/[0.02]">
        <button
          onClick={() => executeSimulation("database")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === "database"
              ? "bg-[#3779cb] text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          <span>Vector DB Query</span>
        </button>

        <button
          onClick={() => executeSimulation("rag")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === "rag"
              ? "bg-[#3779cb] text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>RAG Pipeline</span>
        </button>

        <button
          onClick={() => executeSimulation("deploy")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === "deploy"
              ? "bg-[#3779cb] text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Cloud className="w-3.5 h-3.5" />
          <span>Auto-Deploy</span>
        </button>
      </div>

      {/* Terminal Log Console */}
      <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 min-h-[170px] max-h-[220px] overflow-y-auto space-y-1.5 bg-[#060d28]/40">
        {outputLog.map((log, index) => (
          <div
            key={index}
            className={`${
              log.startsWith("✓")
                ? "text-emerald-400"
                : log.startsWith("→")
                ? "text-sky-300 font-semibold"
                : "text-slate-400"
            }`}
          >
            {log}
          </div>
        ))}
      </div>

      {/* Interactive Footer Action */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#060d28]/80 border-t border-white/10 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-mobrilz-blue" /> 84 tokens/s
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="hidden sm:inline-block text-slate-400">Latency: 28ms</span>
        </div>
        <button
          onClick={() => executeSimulation(activeTab)}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium transition-colors disabled:opacity-50"
        >
          <Play className="w-3 h-3 text-sky-400 fill-sky-400" />
          <span>{isRunning ? "Simulating..." : "Test MCP Tool"}</span>
        </button>
      </div>
    </div>
  );
}
