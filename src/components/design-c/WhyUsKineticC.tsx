"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Award, Zap, Code2, Clock, Users } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface ValueCardProps {
  icon: React.ReactNode;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
}

function SpotlightValueCard({ icon, metric, metricLabel, title, description }: ValueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative p-8 rounded-3xl bg-[#09143f]/60 hover:bg-[#09143f]/85 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl transition-all duration-500 overflow-hidden shadow-xl"
    >
      {/* Radial Spotlight Tracking Cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(circle 220px at ${x}px ${y}px, rgba(100, 181, 246, 0.18), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
            {icon}
          </div>
          <div className="text-right">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {metric}
            </span>
            <span className="block text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
              {metricLabel}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors pt-2">
          {title}
        </h3>

        <p className="text-slate-300 text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhyUsKineticC() {
  return (
    <section className="relative z-20 w-full py-28 bg-[#09143f]/90 col-lines overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Enterprise Contract</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Trust Engineering Guarantees
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light">
            We operate as an elite engineering partner, removing vendor lock-in and taking complete accountability for uptime and performance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpotlightValueCard
            icon={<Award className="w-6 h-6" />}
            metric="100%"
            metricLabel="Intellectual Property"
            title="Complete Code & IP Handover"
            description="You own 100% of your source code, CI/CD pipelines, Docker images, and database schemas upon final milestone cutover. Zero licensing fees."
          />
          <SpotlightValueCard
            icon={<Zap className="w-6 h-6" />}
            metric="99.9%"
            metricLabel="Verified SLA"
            title="Production Uptime Guarantee"
            description="Architected with multi-region failover, Kubernetes autoscaling, and Redis caching to withstand viral traffic spikes without breaking."
          />
          <SpotlightValueCard
            icon={<Code2 className="w-6 h-6" />}
            metric="0"
            metricLabel="Technical Debt"
            title="Strict TypeScript Standards"
            description="Every PR is audited for type safety, zero 'any' escapes, end-to-end Playwright tests, and documented architectural decision records (ADRs)."
          />
          <SpotlightValueCard
            icon={<Clock className="w-6 h-6" />}
            metric="2 Wk"
            metricLabel="Sprint Cadence"
            title="Verifiable Staging Delivery"
            description="Bi-weekly demo sandboxes let you test real clickable builds continuously. You sign off on each milestone before payments release."
          />
          <SpotlightValueCard
            icon={<Users className="w-6 h-6" />}
            metric="37+"
            metricLabel="Global Deployments"
            title="International Enterprise Proven"
            description="From Saudi Arabia's #1 e-commerce ecosystem (Salla) to UK fintech and US SaaS, our systems power high-volume transactions daily."
          />
          <SpotlightValueCard
            icon={<ShieldCheck className="w-6 h-6" />}
            metric="1:1"
            metricLabel="Direct Engineers"
            title="Zero Account Manager Lag"
            description="Communicate directly with principal architects and senior engineers via dedicated Slack or Teams channels. Fast turnaround guaranteed."
          />
        </div>
      </div>
    </section>
  );
}

