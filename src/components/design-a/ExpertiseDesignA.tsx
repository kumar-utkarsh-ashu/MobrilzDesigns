"use client";

import React, { useState } from "react";
import { Smartphone, Globe, Cpu, Palette, CheckCircle2, FileText, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface DisciplineSpec {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  deliverables: string[];
  techStack: string[];
  slaGuarantee: string;
  architectureHighlight: string;
}

const DISCIPLINES: DisciplineSpec[] = [
  {
    id: "mobile",
    name: "Mobile App Engineering",
    tagline: "High-performance native and cross-platform apps built for iOS and Android.",
    icon: Smartphone,
    deliverables: [
      "Offline-first synchronization with SQLite & WatermelonDB",
      "Native device integration (Biometrics, Camera, Bluetooth, Apple Pay)",
      "App Store & Google Play submission and review management",
      "60 FPS smooth gesture animations and haptic feedback"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Fastlane"],
    slaGuarantee: "Crash-free sessions > 99.95%, App launch time < 1.2s",
    architectureHighlight: "Clean Architecture MVVM pattern with decoupled domain layers and automated CI/CD builds."
  },
  {
    id: "web",
    name: "Web Platforms & Cloud",
    tagline: "Enterprise web platforms and microservices engineered for high throughput.",
    icon: Globe,
    deliverables: [
      "Full-stack Next.js App Router with Server-Side Hydration",
      "Event-driven microservices architecture with Kafka / RabbitMQ",
      "Distributed cache layering with Redis Cluster",
      "SOC-2 compliant zero-trust authentication and access controls"
    ],
    techStack: ["Next.js 14", "Node.js", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    slaGuarantee: "99.99% Cloud SLA uptime, P95 API response < 85ms",
    architectureHighlight: "Multi-region Kubernetes deployment with automated blue-green rollouts and zero-downtime cutover."
  },
  {
    id: "ai",
    name: "AI & Autonomous Agents",
    tagline: "Custom vector search, domain-tuned LLM agents, and automated workflows.",
    icon: Cpu,
    deliverables: [
      "Enterprise RAG pipeline with hybrid vector & BM25 keyword search",
      "Custom tool-calling autonomous agents using Model Context Protocol (MCP)",
      "Automated document ingestion and chunking pipelines",
      "Guardrail enforcement preventing hallucination and data leakage"
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "pgvector", "LangChain", "LlamaIndex"],
    slaGuarantee: "Zero data leakage, sub-second semantic retrieval",
    architectureHighlight: "Isolated vector embedding namespace per tenant with AES-256 at-rest encryption."
  },
  {
    id: "design",
    name: "UI/UX & Product Systems",
    tagline: "Figma design systems, interactive prototypes, and conversion optimization.",
    icon: Palette,
    deliverables: [
      "Atomic design system with reusable React/Tailwind component tokens",
      "User research, wireframing, and clickable prototype testing",
      "Comprehensive accessibility (WCAG 2.1 AA) validation",
      "Full developer handoff with Storybook documentation"
    ],
    techStack: ["Figma", "Storybook", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    slaGuarantee: "100% WCAG 2.1 AA compliant, 0 broken layout states",
    architectureHighlight: "Tokenized design system synchronizing Figma variables directly to Tailwind CSS configuration."
  }
];

export function ExpertiseDesignA() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineSpec>(DISCIPLINES[0]);

  return (
    <section id="services" className="w-full bg-[#081033] text-white border-b border-blue-900/40 py-24 relative overflow-hidden">
      
      {/* Subtle blueprint grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3779cb 1px, transparent 1px),
            linear-gradient(to bottom, #3779cb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering Disciplines &amp; Deliverables
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Full-lifecycle digital product development from architectural blueprinting to production scaling.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {DISCIPLINES.map((item) => {
            const isSelected = activeDiscipline.id === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveDiscipline(item)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] ring-1 ring-blue-300"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:border-blue-400/40 hover:bg-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-blue-300"}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Engineering Spec Sheet in Deep Glass */}
        <div className="bg-[#0b1747]/90 rounded-3xl border border-blue-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl">
          
          <div className="bg-[#060c28] border-b border-blue-500/20 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">
                SPECIFICATION SHEET :: {activeDiscipline.id.toUpperCase()}
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">{activeDiscipline.name}</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-500/15 px-3.5 py-1.5 rounded-lg border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{activeDiscipline.slaGuarantee}</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Deliverables Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider mb-4">
                  Standard Production Deliverables
                </h4>
                <div className="space-y-3">
                  {activeDiscipline.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 font-medium leading-relaxed">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider mb-2">
                  System Architecture Note
                </h4>
                <p className="text-xs text-slate-300 bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 leading-relaxed">
                  {activeDiscipline.architectureHighlight}
                </p>
              </div>
            </div>

            {/* Right: Technical Matrix & Action */}
            <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider mb-4">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeDiscipline.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/10 text-white border border-white/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Code Quality Standard:</span>
                    <span className="font-semibold text-white">SonarQube Grade A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security Gate:</span>
                    <span className="font-semibold text-white">OWASP Top 10 Audited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">IP Ownership:</span>
                    <span className="font-semibold text-emerald-400">100% Client Ownership</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#cta"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide shadow-md transition-colors"
                >
                  <span>Consult Lead Engineer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
