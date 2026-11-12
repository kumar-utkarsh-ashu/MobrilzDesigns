"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Briefcase, Code, Cpu, Award, MessageSquare, Calculator } from "lucide-react";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";
import { RollText } from "@/components/motion/RollText";

interface DynamicDockNavProps {
  onOpenEstimator?: () => void;
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  mouseX: any;
}

function DockItem({ icon, label, href, onClick, mouseX }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [42, 60, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="group relative flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/10 backdrop-blur-md transition-colors"
    >
      <div className="text-slate-300 group-hover:text-cyan-300 transition-colors">
        {icon}
      </div>

      {/* Tooltip */}
      <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 px-2.5 py-1 rounded bg-[#09143f] border border-white/15 text-[11px] font-mono text-cyan-200 whitespace-nowrap shadow-xl">
        {label}
      </span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}

export function DynamicDockNav({ onOpenEstimator }: DynamicDockNavProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#060d28]/85 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Brand Logo with Glow */}
        <a href="#hero" className="flex items-center gap-2 pr-3 border-r border-white/10 group">
          <div className="w-8 h-8 rounded-full bg-[#3779cb]/20 border border-cyan-400/30 flex items-center justify-center p-1 group-hover:border-cyan-400 transition-colors">
            <img src="/assets/mobrilz-m-logo.svg" alt="Mobrilz" className="w-full h-full object-contain" />
          </div>
          <span className="font-extrabold tracking-tight text-white text-base hidden sm:inline-block">
            MOBRILZ
          </span>
        </a>

        {/* Dock Items */}
        <div className="flex items-center gap-2">
          <DockItem
            icon={<Briefcase className="w-4 h-4" />}
            label="Work (37 Builds)"
            href="#work"
            mouseX={mouseX}
          />
          <DockItem
            icon={<Code className="w-4 h-4" />}
            label="Engineering Studio"
            href="#services"
            mouseX={mouseX}
          />
          <DockItem
            icon={<Cpu className="w-4 h-4" />}
            label="Delivery Highway"
            href="#process"
            mouseX={mouseX}
          />
          <DockItem
            icon={<Award className="w-4 h-4" />}
            label="Enterprise Reviews"
            href="#reviews"
            mouseX={mouseX}
          />
          <DockItem
            icon={<Calculator className="w-4 h-4" />}
            label="Instant Scope Estimator"
            onClick={onOpenEstimator}
            mouseX={mouseX}
          />
        </div>

        {/* Magnetic CTA Button */}
        <div className="pl-3 border-l border-white/10">
          <MagneticWrapper strength={0.3}>
            <button
              type="button"
              onClick={onOpenEstimator}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-[#3779cb] text-white text-xs font-semibold shadow-md hover:shadow-cyan-500/30 transition-all flex items-center gap-1.5"
            >
              <RollText text="Talk to an Expert" />
            </button>
          </MagneticWrapper>
        </div>
      </motion.div>
    </header>
  );
}

