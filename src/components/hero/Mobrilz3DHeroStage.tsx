"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sun, Sunset, Moon, ArrowRight, Zap, Sparkles } from "lucide-react";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

type LightingMode = "day" | "sunset" | "night";

interface Mobrilz3DHeroStageProps {
  onOpenEstimator?: () => void;
}

export function Mobrilz3DHeroStage({ onOpenEstimator }: Mobrilz3DHeroStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightingMode, setLightingMode] = useState<LightingMode>("night");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Mouse 3D Perspective Tilt Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), {
    stiffness: 180,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-22, 22]), {
    stiffness: 180,
    damping: 20,
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

  // Viewport-Pinned Scroll Scrubbing Engine (370svh)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalH = containerRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalH));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mode Theme Gradients
  const bgGradient =
    lightingMode === "day"
      ? "radial-gradient(ellipse at 50% 40%, #0d2868 0%, #060d28 70%, #020617 100%)"
      : lightingMode === "sunset"
      ? "radial-gradient(ellipse at 50% 40%, #311042 0%, #15082e 60%, #060d28 100%)"
      : "radial-gradient(ellipse at 50% 40%, #091e52 0%, #060d28 65%, #020617 100%)";

  const glowColor =
    lightingMode === "day"
      ? "from-cyan-400 via-sky-300 to-blue-500"
      : lightingMode === "sunset"
      ? "from-rose-500 via-purple-500 to-amber-500"
      : "from-cyan-400 via-[#3779cb] to-indigo-500";

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative z-10 w-full"
      style={{ height: "370svh" }}
      aria-label="Mobrilz Authentic 3D Kinetic Hero Stage"
    >
      {/* Sticky Viewport Stage (100svh) */}
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center transition-all duration-700 select-none"
        style={{ background: bgGradient }}
      >
        {/* Background Floating Cosmic Dust Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-cyan-300/40 animate-pulse"
              style={{
                width: `${(i % 3) + 1.5}px`,
                height: `${(i % 3) + 1.5}px`,
                top: `${(i * 17) % 100}%`,
                left: `${(i * 23) % 100}%`,
                animationDuration: `${(i % 4) + 2}s`,
                animationDelay: `${(i % 3) * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* ============================================================== */}
        {/* CENTERPIECE: AUTHENTIC ORIGINAL MOBRILZ LOGO IN 3D PERSPECTIVE */}
        {/* ============================================================== */}
        <div
          className="relative z-10 flex flex-col items-center justify-center pointer-events-none my-4"
          style={{
            perspective: 1200,
            transform: `translateY(${scrollProgress * 60}px) scale(${1 - scrollProgress * 0.25})`,
            opacity: Math.max(0.15, 1 - scrollProgress * 1.5),
            transition: "transform 0.1s linear, opacity 0.2s linear",
          }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative flex items-center justify-center"
          >
            {/* Luminous Pulsating Ambient Aura */}
            <div
              className={`absolute -inset-10 rounded-full bg-gradient-to-r ${glowColor} opacity-50 blur-3xl animate-pulse pointer-events-none`}
            />

            {/* Orbiting Kinetic Rings */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-cyan-400/30 animate-[spin_24s_linear_infinite] pointer-events-none" />
            <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-dashed border-sky-300/25 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" />

            {/* Authentic Original Mobrilz "M" Logo */}
            <div className="relative w-36 h-24 sm:w-48 sm:h-32 flex items-center justify-center filter drop-shadow-[0_15px_35px_rgba(6,182,212,0.8)]">
              <img
                src="/assets/mobrilz-m-logo.svg"
                alt="Mobrilz Authentic Brand Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(100,181,246,0.9)]"
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* SCRUB PHASE 1 (0% - 28%): High-Contrast Proposition & CTAs     */}
        {/* ============================================================== */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between px-6 py-20 md:py-28 pointer-events-none z-20 transition-opacity duration-300 ease-out"
          style={{
            opacity: scrollProgress < 0.28 ? Math.max(0, 1 - scrollProgress * 3.8) : 0,
            transform: `translateY(${-scrollProgress * 100}px)`,
          }}
        >
          {/* Eyebrow Pill */}
          <div className="pointer-events-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/50 backdrop-blur-xl text-xs font-mono font-bold text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              Award-Winning Enterprise Engineering
            </span>
          </div>

          {/* Monumental Headline with High Contrast */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Architecting Digital Titans.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                Software That Commands Markets.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              We design and engineer bespoke web platforms, cross-platform mobile apps, and autonomous AI systems built for multi-million user throughput.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
            <MagneticWrapper strength={0.3}>
              <button
                type="button"
                onClick={onOpenEstimator}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-[#3779cb] text-slate-950 font-extrabold text-sm shadow-[0_12px_35px_rgba(6,182,212,0.6)] hover:shadow-[0_16px_45px_rgba(100,181,246,0.8)] hover:scale-105 transition-all duration-300"
              >
                <RollText text="Deploy Your Sprint" />
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </MagneticWrapper>

            <MagneticWrapper strength={0.25}>
              <a
                href="#work"
                className="flex items-center gap-2 px-7 py-4 rounded-full bg-[#09143f]/90 hover:bg-[#09143f] border border-cyan-400/40 backdrop-blur-xl text-white font-bold text-sm shadow-lg hover:border-cyan-300 transition-all"
              >
                <RollText text="Explore 37 Builds" hoverColor="group-hover:text-cyan-300" />
              </a>
            </MagneticWrapper>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SCRUB PHASE 2 (28% - 62%): Monumental Typographic Branding     */}
        {/* ============================================================== */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 transition-all duration-300"
          style={{
            opacity:
              scrollProgress >= 0.25 && scrollProgress <= 0.65
                ? Math.sin(((scrollProgress - 0.25) / 0.4) * Math.PI)
                : 0,
            transform: `scale(${0.92 + scrollProgress * 0.16})`,
          }}
        >
          <div className="text-center px-4">
            <p className="text-xs font-mono uppercase tracking-[0.5em] text-cyan-400 mb-3 font-bold drop-shadow-md">
              The Engineering Standard
            </p>
            <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-black uppercase tracking-tight text-white select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              {"MOBRILZ".split("").map((letter, idx) => {
                const charProgress = (scrollProgress - 0.28) / 0.25;
                const isRevealed = charProgress >= idx * 0.12;
                return (
                  <span
                    key={idx}
                    className="inline-block transition-all duration-300"
                    style={{
                      opacity: isRevealed ? 1 : 0.12,
                      transform: isRevealed ? "translateY(0)" : "translateY(24px)",
                      color: isRevealed ? "#ffffff" : "rgba(255,255,255,0.15)",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </h2>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SCRUB PHASE 3 (62% - 100%): Core Engineering Thesis           */}
        {/* ============================================================== */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none z-20 transition-all duration-300"
          style={{
            opacity:
              scrollProgress > 0.62
                ? Math.min(1, (scrollProgress - 0.62) * 3.5)
                : 0,
            transform: `translateY(${(1 - scrollProgress) * 40}px)`,
          }}
        >
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Zero Technical Debt • 100% IP Handover</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-xl">
              Where High-End Aesthetic Precision Meets Enterprise Scalability.
            </h3>
            <p className="text-slate-200 font-normal text-base sm:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md">
              We replace fragile workarounds with rock-solid architectural blueprints, guaranteed SLA uptime, and verified production delivery.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE LIGHTING DIAL                                      */}
        {/* ============================================================== */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 pointer-events-auto select-none">
          <div
            data-sky-dial="true"
            className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#060d28]/90 backdrop-blur-2xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          >
            <button
              type="button"
              onClick={() => setLightingMode("day")}
              title="Day Mode"
              className={`p-2 rounded-full transition-all duration-300 ${
                lightingMode === "day"
                  ? "bg-white text-slate-900 shadow-lg scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setLightingMode("sunset")}
              title="Cyber Sunset"
              className={`p-2 rounded-full transition-all duration-300 ${
                lightingMode === "sunset"
                  ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg scale-105"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sunset className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setLightingMode("night")}
              title="Obsidian Night"
              className={`p-2 rounded-full transition-all duration-300 ${
                lightingMode === "night"
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 shadow-lg scale-105 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
