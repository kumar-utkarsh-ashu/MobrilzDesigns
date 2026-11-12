"use client";

import React, { useRef, useEffect } from "react";
import { ShieldCheck, Award, Zap, Code, Clock, Users, Sparkles } from "lucide-react";
import { gsap } from "@/lib/motion/gsap";

interface SpatialBentoCardProps {
  icon: React.ReactNode;
  metric: string;
  label: string;
  desc: string;
}

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
    label: "Templates or Shoddy Themes",
    desc: "Bespoke production Next.js 14 and Preact architectures tailored directly to your enterprise load.",
  },
  {
    icon: <Clock className="w-5 h-5 text-emerald-400" />,
    metric: "14-Day",
    label: "Sprint-Paced Working MVP",
    desc: "Rapid delivery of working, verified prototypes with live database connections and interactive UI.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    metric: "28ms",
    label: "Edge TTFB Latency SLA",
    desc: "Sub-second global content delivery with automated edge caching and Brotli compression.",
  },
  {
    icon: <Users className="w-5 h-5 text-cyan-300" />,
    metric: "4.9",
    label: "Verified Client Rating",
    desc: "Rated 4.9/5 across enterprise contracts in Saudi Arabia, Switzerland, Germany, and the United States.",
  },
];

export function WhyUsDesignD() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".gsap-d-whyus-card",
              { y: 20, scale: 0.95 },
              {
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: "back.out(1.2)",
                clearProps: "all",
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="guarantees"
      className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Enterprise Contract</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The VisionOS Engineering Contract
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Engineered for enterprise scale, guaranteed by signed service-level agreements.
          </p>
        </div>

        {/* Spatial Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="gsap-d-whyus-card group relative p-8 rounded-[32px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] border border-white/15 hover:border-cyan-400/60 backdrop-blur-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-cyan-300 shadow-inner">
                  {c.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight drop-shadow-md">
                  {c.metric}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {c.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
                <span>Verified Contract</span>
                <span className="text-emerald-400">● Enforced</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
