"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/data/portfolio";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

export function MobrilzCircularGallery() {
  const [activeIndex, setActiveIndex] = useState(2); // Start on Chalo Travels / featured
  const showcaseProjects = projectsData.slice(0, 9);
  const total = showcaseProjects.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative z-20 w-full py-32 bg-[#020510] col-lines overflow-hidden select-none">
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-[#3779cb]/15 blur-[180px]" />
      </div>

      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive 3D Perspective Coverflow</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Spatial Project Explorer
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
          Click any case study to bring it front and center into the 3D focus arc.
        </p>
      </div>

      {/* ============================================================== */}
      {/* 3D PERSPECTIVE COVERFLOW STAGE (IMAGE 4 RECONSTRUCTION)        */}
      {/* ============================================================== */}
      <div
        className="relative w-full max-w-7xl mx-auto h-[540px] sm:h-[600px] flex items-center justify-center px-4"
        style={{ perspective: 1300 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {showcaseProjects.map((project, index) => {
            // Calculate signed distance from active card (-2, -1, 0, 1, 2)
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            // Only display cards within visible distance (-2 to +2)
            const isVisible = Math.abs(offset) <= 2;
            if (!isVisible) return null;

            const isCenter = offset === 0;

            // 3D Perspective Math matching Image 4
            const xOffset = offset * 240; // horizontal card spacing
            const zOffset = -Math.abs(offset) * 110; // Z-depth pushback
            const rotateY = -offset * 26; // 3D perspective rotation angle
            const scale = isCenter ? 1.06 : 0.9 - Math.abs(offset) * 0.05;
            const opacity = isCenter ? 1 : Math.max(0.3, 0.8 - Math.abs(offset) * 0.28);
            const zIndex = 20 - Math.abs(offset) * 5;

            return (
              <motion.div
                key={project.slug || index}
                onClick={() => handleCardClick(index)}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  mass: 0.8,
                }}
                style={{
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                className={`absolute w-[280px] sm:w-[350px] md:w-[390px] h-[460px] sm:h-[530px] rounded-[36px] overflow-hidden cursor-pointer transition-shadow duration-500 ${
                  isCenter
                    ? "shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-1 ring-white/30"
                    : "shadow-[0_15px_40px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
                } bg-[#060b1e]`}
              >
                {/* Full-bleed Case Study Mockup Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Top Branding Chip */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-white/15">
                      {project.kind}
                    </span>
                    <span className="text-xs font-mono text-white/80 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Center Floating Pill Button on Active Card (Image 4 Signature Feature) */}
                  {isCenter && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                      {project.live_link ? (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-7 py-3.5 rounded-full bg-slate-950/85 backdrop-blur-xl border border-white/30 text-white font-mono text-xs uppercase tracking-wider font-extrabold shadow-[0_15px_40px_rgba(0,0,0,0.9)] hover:scale-105 hover:border-cyan-400 hover:bg-slate-950 transition-all flex items-center gap-2.5"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <span className="px-6 py-3 rounded-full bg-slate-950/85 backdrop-blur-xl border border-white/20 text-slate-300 font-mono text-xs font-bold shadow-xl">
                          Enterprise Private
                        </span>
                      )}
                    </div>
                  )}

                  {/* Bottom Case Study Card Metadata */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-1.5 text-left">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <MagneticWrapper strength={0.3}>
          <button
            type="button"
            onClick={prevSlide}
            className="p-3.5 rounded-full bg-[#09143f]/90 hover:bg-cyan-500 hover:text-slate-950 border border-white/20 text-white transition-all shadow-xl"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        </MagneticWrapper>

        <span className="text-xs font-mono text-slate-400 font-bold">
          {activeIndex + 1} / {total} Case Studies
        </span>

        <MagneticWrapper strength={0.3}>
          <button
            type="button"
            onClick={nextSlide}
            className="p-3.5 rounded-full bg-[#09143f]/90 hover:bg-cyan-500 hover:text-slate-950 border border-white/20 text-white transition-all shadow-xl"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </MagneticWrapper>
      </div>
    </section>
  );
}
