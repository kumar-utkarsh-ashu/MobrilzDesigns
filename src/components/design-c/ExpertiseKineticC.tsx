"use client";

import React, { useState, useRef, useEffect } from "react";
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
  CheckCircle2,
} from "lucide-react";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";

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
      { label: "Pipeline Velocity", value: "< 3 Min" },
      { label: "Availability SLA", value: "99.99%" },
      { label: "Recovery Time (RTO)", value: "< 30s" },
    ],
    codeSnippet: `// Terraform Blue/Green Cutover Ingress
resource "kubernetes_ingress_v1" "api_gateway" {
  metadata {
    name = "mobrilz-enterprise-gateway"
    annotations = {
      "alb.ingress.kubernetes.io/target-type" = "ip"
      "alb.ingress.kubernetes.io/scheme"      = "internet-facing"
    }
  }
}`,
  },
  {
    id: "ai",
    name: "AI & MCP Agents",
    icon: <Cpu className="w-5 h-5" />,
    tagline: "Model Context Protocol & Custom Neural Pipelines",
    description:
      "Architecting autonomous LLM agents, hybrid pgvector embeddings, and enterprise Model Context Protocol (MCP) servers for continuous task orchestration.",
    deliverables: [
      "Enterprise Anthropic MCP Server Architecture",
      "Hybrid RAG with Relational & pgvector Indexes",
      "Sub-30ms Streaming SSE Inference Pipes",
      "Strict Output Validation & PII Redaction",
    ],
    metrics: [
      { label: "Inference Latency", value: "< 28ms" },
      { label: "Context Window", value: "128k Tokens" },
      { label: "Hallucination Defense", value: "99.8%" },
    ],
    codeSnippet: `// Enterprise Model Context Protocol Tool Server
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "search_tenant_vector") {
    const embeddings = await embedder.encode(request.params.arguments.query);
    return await vectorStore.queryNearest({ vector: embeddings, k: 5 });
  }
});`,
  },
];

export function ExpertiseKineticC() {
  const [activeTab, setActiveTab] = useState<string>("web");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const current = serviceTabs.find((t) => t.id === activeTab) || serviceTabs[0];

  // GSAP Smooth Tab Change Transition
  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-deliverable-item",
        { opacity: 0.2, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        ".gsap-code-box",
        { opacity: 0.3, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        ".gsap-metric-box",
        { scale: 0.95 },
        {
          scale: 1,
          duration: 0.35,
          stagger: 0.06,
          ease: "back.out(1.4)",
          clearProps: "all",
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 w-full py-28 bg-[#060d28] col-lines overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#3779cb]/15 blur-[170px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Digital Engineering Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for High-Velocity Execution
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            From edge-rendered cloud microservices to multi-tenant AI pipelines.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {serviceTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <MagneticWrapper key={tab.id} strength={0.25}>
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-[#3779cb] text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.5)] font-bold scale-105"
                      : "bg-[#09143f]/80 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/40"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              </MagneticWrapper>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div
          ref={contentRef}
          className="relative rounded-[32px] bg-[#09143f]/80 border border-white/15 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Spec, Deliverables, Metrics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  {current.name} • Architecture Spec
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.tagline}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Enterprise Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((del, i) => (
                    <div
                      key={i}
                      className="gsap-deliverable-item flex items-center gap-2 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Cards */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                {current.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="gsap-metric-box p-3 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-cyan-400/40 transition-colors"
                  >
                    <span className="block text-lg sm:text-2xl font-black text-cyan-300 font-mono">
                      {m.value}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Code Specification Pane */}
            <div className="gsap-code-box lg:col-span-5">
              <div className="rounded-2xl bg-[#030718] border border-cyan-500/30 p-4 font-mono text-xs overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-slate-300 ml-1">spec.contract.ts</span>
                  </div>
                  <span className="text-cyan-400 font-bold">TypeScript Strict</span>
                </div>
                <pre className="text-slate-300 overflow-x-auto p-2 leading-relaxed text-[11px]">
                  <code>{current.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
