"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  X,
} from "lucide-react";
import { projectsData } from "@/lib/data/portfolio";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

export function MobrilzPinnedShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredProjects = projectsData.slice(0, 8);
  const totalSlides = featuredProjects.length;

  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [isGridModalOpen, setIsGridModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappy, Ultra-Fast Velocity (Image 1 Fix)
  // Short 150vh container + responsive 0% to -82% translation = lightning-fast effortless scroll
  const rawX = useTransform(scrollYProgress, [0, 0.95], ["0%", "-82%"]);
  const smoothX = useSpring(rawX, {
    stiffness: 280,
    damping: 22,
    restDelta: 0.001,
  });

  // Track active project index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        totalSlides - 1,
        Math.max(0, Math.round(latest * (totalSlides - 1)))
      );
      setActiveProjectIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, totalSlides]);

  // Smooth jump to any project index
  const jumpToProject = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollableDistance =
      containerRef.current.offsetHeight - window.innerHeight;
    const targetY =
      containerTop + (index / (totalSlides - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeProjectIdx - 1);
    jumpToProject(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(totalSlides - 1, activeProjectIdx + 1);
    jumpToProject(nextIdx);
  };

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative z-20 w-full bg-[#060d28] col-lines"
      style={{ height: "150vh" }}
      aria-label="Flagship Enterprise Project Deck"
    >
      {/* Sticky Viewport Container with ample top padding to avoid header dock collision */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-6 px-6 md:px-14">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#3779cb]/20 blur-[150px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[160px]" />
        </div>

        {/* Section Header with Navigation & Quick Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between max-w-7xl mx-auto w-full mb-2 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Deployments ({projectsData.length} Total Builds)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Enterprise Work
            </h2>
          </div>

          {/* Quick Glide Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsGridModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs font-mono transition-colors"
              title="View all 8 projects in a single view"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
              <span>View All 8 in Grid</span>
            </button>

            <div className="flex items-center gap-1.5 bg-[#09143f]/80 border border-white/10 rounded-xl p-1">
              <button
                onClick={handlePrev}
                disabled={activeProjectIdx === 0}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-cyan-300 font-bold px-2">
                0{activeProjectIdx + 1} / 0{totalSlides}
              </span>
              <button
                onClick={handleNext}
                disabled={activeProjectIdx === totalSlides - 1}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Motion Track with Full Traversal & Drag Support */}
        <div className="relative w-full overflow-visible my-auto cursor-grab active:cursor-grabbing">
          <motion.div
            style={{ x: smoothX }}
            className="flex items-stretch gap-8 w-max pl-2 py-2"
          >
            {featuredProjects.map((project, idx) => (
              <div
                key={project.slug || idx}
                className={`group relative w-[85vw] sm:w-[480px] md:w-[540px] flex-shrink-0 rounded-[32px] bg-[#09143f]/85 border transition-all duration-300 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between ${
                  activeProjectIdx === idx
                    ? "border-cyan-400 shadow-[0_20px_60px_rgba(6,182,212,0.35)]"
                    : "border-white/15 hover:border-cyan-400/50"
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    {project.kind} • {project.industry}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    0{idx + 1} / 0{featuredProjects.length}
                  </span>
                </div>

                {/* Project Image Container */}
                <div className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09143f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm font-light line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  {project.live_link ? (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-200 transition-colors pointer-events-auto"
                    >
                      <RollText text="Launch Live Site" />
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">Enterprise Private Repo</span>
                  )}

                  <MagneticWrapper strength={0.3}>
                    <button
                      type="button"
                      onClick={() => jumpToProject(idx)}
                      className="p-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-400/30 transition-all pointer-events-auto"
                      title="Focus Card"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </MagneticWrapper>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Traversal Progress Bar with Direct Interactive Step Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 max-w-7xl mx-auto w-full pt-3 border-t border-white/10 gap-3">
          <span className="flex items-center gap-2 text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Fast Velocity Mode: Scroll or click pills to jump instantly
          </span>

          <div className="flex items-center gap-1.5 flex-wrap">
            {featuredProjects.map((p, i) => (
              <button
                key={i}
                onClick={() => jumpToProject(i)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                  activeProjectIdx === i
                    ? "bg-cyan-500 text-slate-950 font-bold border border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
                title={`Jump to ${p.title}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Modal: View All 8 Projects at a Glance */}
      {isGridModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#070e28] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white">All 8 Flagship Projects</h3>
                <p className="text-slate-400 text-sm">Direct access to every enterprise deployment</p>
              </div>
              <button
                onClick={() => setIsGridModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProjects.map((p, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setIsGridModalOpen(false);
                    jumpToProject(i);
                  }}
                  className="group flex gap-4 p-4 rounded-2xl bg-[#0a153b] border border-white/10 hover:border-cyan-400/60 cursor-pointer transition-all"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                        <span>0{i + 1}</span>
                        <span>•</span>
                        <span>{p.kind}</span>
                      </div>
                      <h4 className="text-base font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-slate-300 text-xs line-clamp-2 mt-1">
                        {p.desc}
                      </p>
                    </div>
                    <span className="text-xs text-cyan-300 font-mono mt-2 group-hover:underline">
                      Scroll to Card →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
