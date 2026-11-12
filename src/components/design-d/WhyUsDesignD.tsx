"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Award, Zap, Code, Clock, Users } from "lucide-react";

interface SpatialBentoCardProps {
  icon: React.ReactNode;
  metric: string;
  label: string;
  desc: string;
}

function SpatialBentoCard({ icon, metric, label, desc }: SpatialBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative p-8 rounded-[32px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-cyan-400/60 backdrop-blur-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-cyan-300 shadow-inner">
          {icon}
        </div>
        <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight drop-shadow-md">
          {metric}
        </span>
      </div>

      <div className="space-y-1.5">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {label}
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
        <span>Verified Contract</span>
        <span className="text-emerald-400">● Enforced</span>
      </div>
    </motion.div>
  );
}

export function WhyUsDesignD() {
  const cards = [
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      metric: "100%",
      label: "IP & Source Code Ownership",
      desc: "Complete repository, schema, and CI/CD pipeline handover. Zero vendor lock-in or secondary fees.",
    },
    {
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      metric: "99.9%",
      label: "Guaranteed SLA Uptime",
      desc: "Multi-cloud Kubernetes auto-healing clusters and Redis caching for high-load resilience.",
    },
    {
      icon: <Code className="w-5 h-5 text-sky-400" />,
      metric: "0",
      label: "Technical Debt Escape",
      desc: "Strict TypeScript standards, 90%+ Playwright regression coverage, and documented ADRs.",
    },
    {
      icon: <Clock className="w-5 h-5 text-violet-400" />,
      metric: "2 Wks",
      label: "Verifiable Staging Sprints",
      desc: "Continuous clickable demo builds. You verify each milestone before funds release.",
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-300" />,
      metric: "37+",
      label: "Flagship Enterprise Builds",
      desc: "Trusted by Saudi Arabia's #1 e-commerce platform (Salla) and global European SaaS.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      metric: "1:1",
      label: "Direct Senior Engineering",
      desc: "Direct communication with principal engineers via dedicated Slack or Teams channels.",
    },
  ];

  return (
    <section id="guarantees" className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden" style={{ perspective: 1200 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Spatial Computing SLA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The VisionOS Engineering Contract
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light">
            Engineered with strict accountability, verifiable quality checkpoints, and transparent delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <SpatialBentoCard key={idx} icon={c.icon} metric={c.metric} label={c.label} desc={c.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
