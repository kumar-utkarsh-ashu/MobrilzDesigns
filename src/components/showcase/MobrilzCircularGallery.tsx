"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data/portfolio";
import { RollText } from "@/components/motion/RollText";

export function MobrilzCircularGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentAngle = useRef(0);
  const targetAngle = useRef(0);

  // Take 12 distinct projects for the circular orbit carousel
  const orbitProjects = projectsData.slice(0, 12);
  const totalItems = orbitProjects.length;
  const radius = 340; // Pixel radius for 3D cylinder orbit

  useEffect(() => {
    let animId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      if (!isDragging.current) {
        // Continuous gentle auto-spin when idle
        targetAngle.current += 0.08;
      }
      currentAngle.current = lerp(currentAngle.current, targetAngle.current, 0.08);
      setRotationAngle(currentAngle.current);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    targetAngle.current += deltaX * 0.15;
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative z-20 w-full py-28 bg-[#09143f]/90 col-lines overflow-hidden select-none">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Spatial Orbit • Drag to Spin</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Spatial Project Explorer
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base mt-3 font-light">
          Rotate through Mobrilz's digital engineering portfolio in interactive 3D cylindrical space.
        </p>
      </div>

      {/* 3D Cylindrical Orbit Stage */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative h-[480px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: 1200 }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotationAngle}deg)`,
          }}
        >
          {orbitProjects.map((project, idx) => {
            const itemAngle = (idx / totalItems) * 360;
            return (
              <div
                key={project.slug || idx}
                className="absolute w-[260px] sm:w-[300px] h-[360px] rounded-2xl bg-[#060d28]/95 border border-white/15 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between backdrop-blur-md transition-shadow hover:shadow-[0_20px_50px_rgba(100,181,246,0.4)]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-40 w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top pointer-events-none"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-[#09143f]/80 backdrop-blur-md text-cyan-300 border border-white/10">
                    {project.kind}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1.5 my-2">
                  <h4 className="text-base font-bold text-white line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 font-light">
                    {project.desc}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">
                    {project.industry}
                  </span>
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-cyan-300 transition-colors"
                      title="Open Live Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6">
        <span className="text-xs font-mono text-slate-500">
          Tip: Click and drag horizontally to spin the gallery
        </span>
      </div>
    </section>
  );
}

