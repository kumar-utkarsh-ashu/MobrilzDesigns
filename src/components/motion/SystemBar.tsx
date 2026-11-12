"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Globe, Cpu } from "lucide-react";

export function SystemBar() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [latency] = useState<number>(24);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "UTC",
        }) + " UTC"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-5 z-[80] hidden lg:flex items-center gap-2 pointer-events-auto select-none font-mono text-[11px]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#060d28]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)] text-slate-300"
      >
        {/* Live Status Beacon */}
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold tracking-wider text-[10px] uppercase">99.9% Uptime</span>
        </div>

        <span className="h-3 w-px bg-white/15" />

        {/* Global Node Indicator */}
        <div className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors">
          <Globe className="w-3 h-3 text-[#3779cb]" />
          <span>Nodes: DXB • LHR • SFO</span>
        </div>

        <span className="h-3 w-px bg-white/15" />

        {/* Latency */}
        <div className="flex items-center gap-1 text-slate-400">
          <Cpu className="w-3 h-3 text-cyan-400" />
          <span>{latency}ms</span>
        </div>

        <span className="h-3 w-px bg-white/15" />

        {/* Live Clock */}
        <div className="flex items-center gap-1 text-cyan-200">
          <Activity className="w-3 h-3 text-[#3779cb] animate-pulse" />
          <span>{timeStr || "00:00:00 UTC"}</span>
        </div>
      </motion.div>
    </div>
  );
}

