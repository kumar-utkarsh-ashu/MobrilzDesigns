"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Database, Cpu, Zap, Activity } from "lucide-react";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface HeroDesignDProps {
  onOpenEstimator?: () => void;
}

export function HeroDesignD({ onOpenEstimator }: HeroDesignDProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse 3D Spatial Gaze Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), {
    stiffness: 160,
    damping: 18,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden select-none bg-[#020617]"
      style={{ perspective: 1400 }}
    >
      {/* Background Volumetric Nebula & Ambient Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[200px]" />

        {/* Ambient Cosmic Particles */}
        {[...Array(35)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400/40 animate-pulse"
            style={{
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              top: `${(i * 19) % 100}%`,
              left: `${(i * 27) % 100}%`,
              animationDuration: `${(i % 4) + 2}s`,
            }}
          />
        ))}
      </div>

      {/* ============================================================== */}
      {/* VISIONOS FLOATING SPATIAL WINDOW (3D GAZE PARALLAX)            */}
      {/* ============================================================== */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 w-full max-w-5xl rounded-[36px] bg-white/[0.06] border border-white/20 p-8 sm:p-14 backdrop-blur-[45px] shadow-[0_30px_90px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] flex flex-col items-center text-center space-y-8"
      >
        {/* Spatial Window Header Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: "6s" }} />
          <span>Spatial Computing & High-Throughput Cloud Engineering</span>
        </div>

        {/* Authentic Original Mobrilz Logo Emblem in Spatial Elevation */}
        <div className="relative group my-2">
          {/* Volumetric Radial Glow */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-sky-400 opacity-50 blur-3xl group-hover:opacity-85 transition-opacity duration-700 animate-pulse" />

          {/* Floating Spatial Logo Container */}
          <div className="relative w-36 h-28 sm:w-48 sm:h-36 rounded-3xl bg-[#030712]/90 border border-white/30 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.4)] flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/mobrilz-m-logo.svg"
              alt="Mobrilz Authentic Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(6,182,212,0.85)]"
            />
          </div>

          {/* Floating Spatial Satellite Chips */}
          <div className="hidden md:flex absolute -left-36 top-1/2 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#09143f]/90 border border-cyan-400/40 backdrop-blur-xl text-[11px] font-mono text-cyan-300 shadow-xl animate-bounce" style={{ animationDuration: "4s" }}>
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>Salla Sync: 50k SKUs</span>
          </div>

          <div className="hidden md:flex absolute -right-36 top-1/2 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#09143f]/90 border border-indigo-400/40 backdrop-blur-xl text-[11px] font-mono text-indigo-300 shadow-xl animate-bounce" style={{ animationDuration: "5s", animationDelay: "1s" }}>
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
            <span>Latency: 22ms Edge</span>
          </div>
        </div>

        {/* High-Contrast Monumental Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Architecting Digital Titans.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(6,182,212,0.7)]">
              Spatial Intelligence For Modern Scale.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-100 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            We engineer high-concurrency web platforms, mobile ecosystems, and autonomous AI systems built for multi-million user throughput.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <MagneticWrapper strength={0.3}>
            <button
              type="button"
              onClick={onOpenEstimator}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-[#3779cb] text-slate-950 font-black text-sm shadow-[0_12px_35px_rgba(6,182,212,0.6)] hover:shadow-[0_18px_50px_rgba(100,181,246,0.9)] hover:scale-105 transition-all flex items-center gap-3"
            >
              <RollText text="Deploy Your Sprint" />
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </MagneticWrapper>

          <MagneticWrapper strength={0.25}>
            <a
              href="#sandbox"
              className="px-7 py-4 rounded-full bg-[#09143f]/90 hover:bg-[#09143f] border border-cyan-400/40 backdrop-blur-xl text-white font-bold text-sm shadow-xl hover:border-cyan-300 transition-all flex items-center gap-2"
            >
              <span>Explore Device Sandbox</span>
            </a>
          </MagneticWrapper>
        </div>

        {/* Live Status Indicators */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-300">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            99.9% Production SLA
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            100% IP & Code Handover
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            37+ Global Deployments
          </span>
        </div>
      </motion.div>
    </section>
  );
}
