"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Code, Zap, Clock, Sparkles } from "lucide-react";

export function WhyUsDesignB() {
  const points = [
    {
      stat: "100%",
      label: "IP & Repository Ownership",
      desc: "Full source code, git commits, and design token assets transferred directly to your private cloud.",
      icon: ShieldCheck
    },
    {
      stat: "50+",
      label: "Enterprise Deployments",
      desc: "Battle-tested across FinTech, HealthTech, and E-Commerce with zero critical security incidents.",
      icon: Code
    },
    {
      stat: "99.9%",
      label: "Guaranteed Production SLA",
      desc: "Enterprise uptime agreements backed by automated multi-region failover and monitoring.",
      icon: Zap
    },
    {
      stat: "14-Day",
      label: "Rapid Working Prototype",
      desc: "Working clickable prototype with live API connectivity ready for board and stakeholder validation.",
      icon: Clock
    }
  ];

  return (
    <section id="why-us" className="w-full bg-[#030712] border-b border-white/10 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Velocity Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Why Global Teams Partner With Us
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Contractual guarantees, transparent sprints, and senior architectural leadership.
          </p>
        </div>

        {/* 4 Kinetic Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-black font-mono text-white mb-2">{p.stat}</div>
                  <h3 className="text-base font-bold text-cyan-300 mb-3">{p.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

