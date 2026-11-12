"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  ArrowRight,
  ShieldAlert,
  Zap,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface ServiceTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  codeSnippet: string;
}

const serviceTabs: ServiceTab[] = [
  {
    id: "web",
    name: "Web Platforms",
    icon: <Globe className="w-5 h-5" />,
    tagline: "Sub-Second Micro-Frontends & High-Throughput Portals",
    description:
      "Enterprise Next.js 14, Preact micro-widgets, and multi-tenant architectures engineered with 99.9% uptime SLAs and ultra-low TTFB.",
    deliverables: [
      "Edge-SSR & Incremental Static Regeneration",
      "Headless E-Commerce (Salla / Shopify / Custom)",
      "Zero-Layout-Shift Performance Tuning",
      "Automated End-to-End Regression Suites",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98+" },
      { label: "TTFB Edge Latency", value: "< 24ms" },
      { label: "Concurrent Sessions", value: "100k+" },
    ],
    codeSnippet: `// Edge-Rendered Multi-Tenant Catalog Routing
export async function GET(req: Request) {
  const tenant = resolveTenant(req.headers);
  const cacheKey = \`tenant:\${tenant.id}:catalog\`;
  const data = await redis.getOrSet(cacheKey, () =>
    db.query.catalog.findMany({ where: { tenantId: tenant.id } })
  );
  return Response.json(data, { headers: { 'Cache-Control': 's-maxage=3600' } });
}`,
  },
  {
    id: "mobile",
    name: "Mobile Ecosystems",
    icon: <Smartphone className="w-5 h-5" />,
    tagline: "Cross-Platform iOS & Android Native Performance",
    description:
      "React Native & Flutter native engineering delivering fluid 120fps gesture animations, offline-first SQLite sync, and secure biometric authentication.",
    deliverables: [
      "Universal iOS & Android Codebase",
      "Biometric Keychain & Secure Enclave",
      "Offline-First Background Mutation Queue",
      "App Store & Google Play Automated CI/CD",
    ],
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Crash-Free Sessions", value: "99.95%" },
      { label: "App Bundle Size", value: "< 18MB" },
    ],
    codeSnippet: `// Offline-First Mutation Synchronization
const mutationQueue = new OfflineSyncQueue({
  storage: SQLiteStorage,
  conflictResolver: LastWriteWinsStrategy,
  onFlush: async (mutations) => {
    return await api.batchSync(mutations);
  }
});`,
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    tagline: "Kubernetes, Terraform & Multi-Cloud Resiliency",
    description:
      "Automated infrastructure-as-code deployments spanning AWS, GCP, and European/Saudi private clouds with zero-downtime blue/green cutover.",
    deliverables: [
      "Multi-Region Kubernetes (EKS / GKE)",
      "Declarative Terraform & OpenTofu GitOps",
      "Zero-Downtime Blue/Green Pipelines",
      "Comprehensive Datadog & Prometheus APM",
    ],
    metrics: [
      { label: "Deployment Downtime", value: "0 ms" },
      { label: "Failover RTO", value: "< 30s" },
      { label: "Cloud Cost Reduction", value: "35%" },
    ],
    codeSnippet: `// Terraform Blue-Green Cutover Spec
resource "aws_route53_record" "traffic_split" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "api.enterprise.com"
  type    = "A"
  weighted_routing_policy {
    weight = var.blue_weight // Graceful drain to green
  }
}`,
  },
  {
    id: "ai",
    name: "Enterprise AI & MCP",
    icon: <Cpu className="w-5 h-5" />,
    tagline: "Agentic Workflows, pgvector RAG & Model Context Protocols",
    description:
      "Autonomous conversational shopping advisors, multi-tenant vector retrieval pipelines, and private LLM fine-tuning compliant with enterprise data sovereignty.",
    deliverables: [
      "Custom MCP Tool Servers & Connectors",
      "Hybrid Semantic + SQL Vector Search (pgvector)",
      "Streaming SSE Conversational Widgets",
      "Zero-Data-Retention Sovereign AI Pipelines",
    ],
    metrics: [
      { label: "Query Retrieval Latency", value: "< 35ms" },
      { label: "Streaming Token Speed", value: "95 tok/s" },
      { label: "Vector Precision", value: "94.8%" },
    ],
    codeSnippet: `// Sovereign Agentic Vector Tool Execution
@router.post("/v1/agent/query")
async def execute_mcp_query(req: MCPRequest):
    embedding = await embed_text(req.prompt)
    results = await pgvector.hybrid_search(
        embedding=embedding,
        filters={"tenant_id": req.tenant_id},
        top_k=5
    )
    return StreamingResponse(stream_agent_tokens(results))`,
  },
];

export function ExpertiseKineticC() {
  const [activeTab, setActiveTab] = useState<string>("web");
  const selected = serviceTabs.find((t) => t.id === activeTab) || serviceTabs[0];

  return (
    <section className="relative z-20 w-full py-28 bg-[#060d28] col-lines overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Performance Digital Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            Modular, scalable engineering contracts designed for high-concurrency systems and zero operational downtime.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {serviceTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <MagneticWrapper key={tab.id} strength={0.2}>
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-[#3779cb] text-white shadow-[0_8px_25px_rgba(55,121,203,0.4)] scale-105"
                      : "bg-[#09143f]/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              </MagneticWrapper>
            );
          })}
        </div>

        {/* Interactive Holographic Spec Sheet Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-3xl bg-[#09143f]/70 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
          >
            {/* Left Column: Spec & Deliverables */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  Architectural Specification
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                  {selected.tagline}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {selected.description}
                </p>
              </div>

              {/* Deliverable Checkpoints */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Production Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selected.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                    >
                      <Zap className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified SLA Metrics */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4">
                {selected.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-mono text-slate-400 block">{m.label}</span>
                    <span className="text-xl sm:text-2xl font-black text-cyan-300 tracking-tight">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Live Terminal Code Stream */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#060d28]/90 border border-white/10 overflow-hidden font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300 text-[11px]">runtime-contract.ts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <div className="p-4 text-slate-300 leading-relaxed overflow-x-auto text-[11px]">
                <pre>
                  <code>{selected.codeSnippet}</code>
                </pre>
              </div>

              <div className="px-4 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                <span>Status: Verified In Production</span>
                <span className="text-emerald-400">● 100% Type Safe</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

