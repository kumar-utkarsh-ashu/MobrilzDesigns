"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Search, X, ExternalLink, CheckCircle } from "lucide-react";
import { projectsData, portfolioCategories, ProjectItem } from "@/lib/data/portfolio";

export function PortfolioDesignA() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);

  const activeProject = projectsData[selectedIndex] || projectsData[0];

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % projectsData.length;
    setSelectedIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + projectsData.length) % projectsData.length;
    setSelectedIndex(prevIdx);
    scrollToCard(prevIdx);
  };

  const scrollToCard = (index: number) => {
    if (trackRef.current) {
      const cardWidth = 340;
      trackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  };

  const filteredProjects = projectsData.filter((p) => {
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
    <section id="projects" className="w-full bg-white border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#09143f] text-xs font-semibold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Engineered Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
              Featured Client Engineering
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              High-throughput architectures, mobile solutions, and enterprise web platforms engineered for scale.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5 text-slate-600" />
              <span>Browse All 37 Projects</span>
            </button>
            <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg p-1 bg-slate-50">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="p-1.5 rounded hover:bg-white text-slate-700 hover:shadow-sm transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="p-1.5 rounded hover:bg-white text-slate-700 hover:shadow-sm transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Split-Screen Project Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky Dossier */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
                {activeProject.kind}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-400">
                CASE {String(selectedIndex + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#09143f] tracking-tight">{activeProject.title}</h3>
              <p className="text-xs font-mono text-blue-600 mt-1 uppercase tracking-wider">{activeProject.industry}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeProject.desc}
            </p>

            {/* Quantifiable Impact Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Engineered SLA</span>
                <span className="text-sm font-bold text-slate-900">99.98% Uptime</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Performance Gain</span>
                <span className="text-sm font-bold text-blue-600">+3.8x Speed</span>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Production Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={activeProject.live_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#09143f] hover:bg-[#1a2b6d] text-white text-xs font-semibold transition-colors"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4"
              >
                View Dossier Spec
              </button>
            </div>
          </div>

          {/* Right Horizontal Scrubbing Track */}
          <div className="lg:col-span-7">
            <div
              ref={trackRef}
              className="flex gap-5 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-300 snap-x snap-mandatory"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {projectsData.map((project, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={project.slug}
                    onClick={() => setSelectedIndex(idx)}
                    className={`shrink-0 w-[290px] sm:w-[320px] rounded-2xl border transition-all duration-200 cursor-pointer snap-start overflow-hidden bg-white ${
                      isSelected
                        ? "border-blue-600 shadow-xl ring-2 ring-blue-500/20"
                        : "border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#09143f]/80 text-white text-[10px] font-mono font-semibold backdrop-blur-sm">
                        {project.kind}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-blue-600 uppercase font-semibold">
                          {project.industry}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 truncate">{project.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scrub Progress Bar */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Track Scrub Position</span>
              <div className="flex-1 mx-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((selectedIndex + 1) / projectsData.length) * 100}%` }}
                />
              </div>
              <span className="text-slate-700 font-bold">
                {selectedIndex + 1} / {projectsData.length}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Searchable Modal for All 37 Projects */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Mobrilz Engineering Archive</h3>
                <p className="text-xs text-slate-500">All 37 verified production deployments & case studies</p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Filter Bar */}
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-3 bg-white">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, technology, or industry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {portfolioCategories.slice(0, 4).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid in Modal */}
            <div className="p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex gap-4 bg-slate-50/50"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">{proj.kind}</span>
                      <a
                        href={proj.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-blue-600"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 truncate mt-1">{proj.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">{proj.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-xs font-semibold text-slate-800 transition-colors"
              >
                Close Archive
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

