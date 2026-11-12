"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function BlurFadeText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
}: BlurFadeTextProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration,
            delay: delay + i * 0.045,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

