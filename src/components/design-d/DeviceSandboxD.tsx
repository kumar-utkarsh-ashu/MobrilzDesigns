"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Tablet, Smartphone, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/lib/data/portfolio";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

type DeviceMode = "desktop" | "tablet" | "mobile";

export function DeviceSandboxD() {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcaseProjects = projectsData.slice(0, 10);
  const currentProject = showcaseProjects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  return (
    <section id="sandbox" className="relative z-20 w-full py-28 bg-[#020617] col-lines overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Device Spatial Sandbox</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Test Responsive Viewports
            </h2>
          </div>

          {/* Device Switcher Pills */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                device === "desktop"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop (16:9)</span>
            </button>
            <button
              type="button"
              onClick={() => setDevice("tablet")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                device === "tablet"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet (4:3)</span>
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                device === "mobile"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile (iOS)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Sandbox Frame */}
        <div className="relative flex flex-col items-center justify-center p-6 md:p-12 rounded-3xl bg-[#09143f]/40 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Morphing Device Frame */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className={`relative overflow-hidden transition-all duration-500 bg-slate-950 border border-white/20 shadow-2xl ${
              device === "desktop"
                ? "w-full max-w-4xl h-[480px] rounded-2xl"
                : device === "tablet"
                ? "w-[480px] max-w-full h-[520px] rounded-3xl"
                : "w-[300px] h-[580px] rounded-[42px] border-[6px] border-slate-800"
            }`}
          >
            {/* Top Device Bar */}
            <div className="h-8 bg-slate-900 border-b border-white/10 px-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                {currentProject.title.toLowerCase().replace(/\s+/g, "")}.mobrilz.app
              </span>
              <span className="text-[10px] font-mono text-cyan-400">SSL 256-bit</span>
            </div>

            {/* Screen Content Preview */}
            <div className="relative w-full h-[calc(100%-2rem)] overflow-y-auto no-scrollbar bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.slug + device}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Overlay Project Details */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#020617]/90 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-cyan-400">
                        {currentProject.kind} • {currentProject.industry}
                      </span>
                      {currentProject.live_link && (
                        <a
                          href={currentProject.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-slate-300 hover:text-white"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white">{currentProject.title}</h3>
                    <p className="text-xs text-slate-300 font-light line-clamp-2 mt-1">
                      {currentProject.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Project Carousel Controls */}
          <div className="flex items-center gap-4 mt-8">
            <MagneticWrapper strength={0.3}>
              <button
                type="button"
                onClick={prevProject}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </MagneticWrapper>

            <span className="text-xs font-mono text-slate-400">
              {currentIndex + 1} of {showcaseProjects.length} Flagship Builds
            </span>

            <MagneticWrapper strength={0.3}>
              <button
                type="button"
                onClick={nextProject}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

