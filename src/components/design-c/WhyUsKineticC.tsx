"use client";

import React, { useRef, useEffect } from "react";
import { ShieldCheck, Award, Zap, Code2, Clock, Users } from "lucide-react";
import { gsap } from "@/lib/motion/gsap";

interface ValueCardProps {
  icon: React.ReactNode;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
}

const valueCards: ValueCardProps[] = [
  {
    icon: <Award className="w-6 h-6 text-cyan-400" />,
    metric: "100%",
    metricLabel: "Ownership",
    title: "100% IP & Code Ownership",
    description: "Every commit, database migration, and Docker container is 100% yours. Complete intellectual property transfer upon sprint cutover with zero recurring license lock-ins.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#3779cb]" />,
    metric: "99.9%",
    metricLabel: "Uptime SLA",
    title: "Enterprise Reliability & High Throughput",
    description: "Architected for millions of concurrent hits. Self-healing multi-cloud Kubernetes clusters with automatic failover and Redis Enterprise caching layers.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-sky-400" />,
    metric: "<28ms",
    metricLabel: "Edge Latency",
    title: "Bespoke Code, Zero Shoddy Templates",
    description: "Hand-crafted Next.js 14, Preact widgets, and FastAPI microservices. We never deploy off-the-shelf sluggish themes that compromise speed or SEO.",
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-300" />,
    metric: "50+",
    metricLabel: "Deployments",
    title: "Cross-Continental Enterprise Track Record",
    description: "Trusted by high-growth startups and established enterprises across Saudi Arabia, Switzerland, Germany, and the United States for critical digital infrastructure.",
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-400" />,
    metric: "14-Day",
    metricLabel: "Rapid MVP",
    title: "Sprint-Paced MVP Prototyping",
    description: "Validate your market thesis with a working, production-grade interactive prototype in just two weeks, verified against real users and production databases.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    metric: "0",
    metricLabel: "Surprises",
    title: "Radical Transparency & Senior Architects",
    description: "No junior offloading or opaque black boxes. You communicate directly with principal systems engineers and receive bi-weekly staging review deployments.",
  },
];

export function WhyUsKineticC() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".gsap-whyus-card",
              { y: 20, scale: 0.96 },
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

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full py-28 bg-[#09143f]/90 col-lines overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Mobrilz Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Enterprise Leaders Partner With Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Guaranteed deliverables, full IP handover, and transparent weekly staging cutovers.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {valueCards.map((card, idx) => (
            <div
              key={idx}
              className="gsap-whyus-card group relative p-8 rounded-3xl bg-[#060d28]/85 hover:bg-[#09143f]/90 border border-white/15 hover:border-cyan-400/60 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                  {card.icon}
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                    {card.metric}
                  </span>
                  <span className="block text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {card.metricLabel}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300/80">
                <span>Verified Deliverable</span>
                <span className="text-emerald-400">● Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
