"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#3779cb] via-cyan-400 to-[#64b5f6] origin-left z-[100] pointer-events-none shadow-[0_0_12px_rgba(100,181,246,0.8)]"
      aria-hidden="true"
    />
  );
}

