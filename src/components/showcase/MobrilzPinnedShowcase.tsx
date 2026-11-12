"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Layers, Sparkles, ArrowRight } from "lucide-react";
import { projectsData } from "@/lib/data/portfolio";
import { RollText } from "@/components/motion/RollText";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

export function MobrilzPinnedShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Select top-tier featured showcase projects
  const featuredProjects = projectsData.slice(0, 8);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal scroll transform with spring damping (inspired by HasnainIrfan 3d-portfolio)
  const totalSlides = featuredProjects.length;
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", `-${(totalSlides - 1.2) * 28}vw`]);
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 20 });

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative z-20 w-full bg-[#060d28] col-lines"
      style={{ height: `${totalSlides * 65}vh` }}
      aria-label="Flagship Enterprise Project Deck"
    >
      {/* Viewport Pinned Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-16">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#3779cb]/15 blur-[140px]" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 max-w-7xl mx-auto w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Deployments ({projectsData.length} Total Builds)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Enterprise Work
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base mt-3 md:mt-0 font-light">
            Architected for scalability, verified for 99.9% uptime, and delivered on-budget across Saudi Arabia, Europe, and the US.
          </p>
        </div>

        {/* Horizontal Motion Track */}
        <div className="relative w-full overflow-visible">
          <motion.div
            style={{ x: smoothX }}
            className="flex items-stretch gap-8 w-max pl-2 py-4"
          >
            {featuredProjects.map((project, idx) => (
              <div
                key={project.slug || idx}
                className="group relative w-[85vw] sm:w-[480px] md:w-[540px] flex-shrink-0 rounded-3xl bg-[#09143f]/70 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(55,121,203,0.3)]"
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {project.kind} • {project.industry}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    0{idx + 1} / 0{featuredProjects.length}
                  </span>
                </div>

                {/* Project Image Container with 3D Hover Scale */}
                <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09143f] via-transparent to-transparent opacity-60" />
                </div>

                {/* Title & Description */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-light line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.live_link ? (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-200 transition-colors"
                    >
                      <RollText text="Launch Live Site" />
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">Enterprise Private Repo</span>
                  )}

                  <MagneticWrapper strength={0.3}>
                    <button
                      type="button"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </MagneticWrapper>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-slate-500 max-w-7xl mx-auto w-full">
          <span>← Scroll to scrub horizontally →</span>
          <span>View all 37 projects in portfolio below</span>
        </div>
      </div>
    </section>
  );
}

