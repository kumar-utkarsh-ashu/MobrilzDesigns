"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Filter, ExternalLink, Zap, Shield, Search, X } from "lucide-react";
import { projectsData, portfolioCategories, ProjectItem } from "@/lib/data/portfolio";

function SpotlightBentoCard({ project, onClick }: { project: ProjectItem; onClick: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative rounded-3xl bg-[#090d1a] border border-white/10 p-5 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Kokonut-style Mouse-Tracking Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.18), transparent 80%)`
        }}
      />

      {/* Image Preview with Cybernetic Frame */}
      <div className="relative z-10">
        <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-900 mb-5 border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-108"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d28] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#060d28]/90 backdrop-blur-md border border-white/15 text-cyan-300 text-[10px] font-mono font-bold tracking-wide">
            {project.kind}
          </div>

          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
            {project.industry}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {project.desc}
          </p>
        </div>
      </div>

      {/* Technologies Chips */}
      <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 3).map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-500/30 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PortfolioDesignB() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = projectsData.filter((p) => {
    const matchesCategory =
      activeCategory === "All" ||
      p.kind.toLowerCase() === activeCategory.toLowerCase() ||
      p.industry.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="w-full bg-[#030712] border-b border-white/10 py-24 relative overflow-hidden">
      {/* Ambient Cybernetic Backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-indigo-600/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-4 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cybernetic Portfolio Bento</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Featured Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              High-throughput architectures and AI agent integrations delivered for global enterprises.
            </p>
          </div>

          {/* Gliding Spring Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#060d28]/90 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
            {portfolioCategories.slice(0, 5).map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isSelected ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="portfolio-filter-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Kokonut-Style Spotlight Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((project) => (
            <SpotlightBentoCard
              key={project.slug}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View All Projects Modal Trigger */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setSelectedProject(projectsData[0])}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold tracking-wide transition-all shadow-sm"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Open Interactive Project Showcase (All 37 Case Studies)</span>
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-[#060d28] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.25)] relative overflow-hidden">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-slate-900">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" unoptimized />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  {selectedProject.kind} • {selectedProject.industry}
                </span>
                <a
                  href={selectedProject.live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.desc}</p>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Stack Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-white/10 text-white font-mono border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
