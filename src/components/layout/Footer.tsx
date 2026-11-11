"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer({ onOpenEstimator }: { onOpenEstimator?: () => void }) {
  return (
    <footer id="contact" className="relative bg-[#060d28] text-white pt-20 pb-12 overflow-hidden border-t border-[#1b2b65]/80">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      {/* Giant Ambient Brand Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-5 text-[18vw] font-bold tracking-tighter text-white whitespace-nowrap leading-none">
        MOBRILZ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <img
              src="/assets/logo.svg"
              alt="Mobrilz"
              className="h-9 w-auto brightness-0 invert mb-3"
            />
            <p className="text-sm text-slate-400 font-light max-w-md">
              Digital Engineering, Next-Gen Web, Cross-Platform Mobile &amp; Enterprise Model Context Protocol (MCP) AI Agents.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenEstimator}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3779cb] hover:bg-[#275599] text-white text-sm font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              <span>Talk to an Expert</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 4 Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-14 border-b border-white/10 text-xs sm:text-sm font-light">
          
          {/* Col 1: Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wider font-mono text-xs uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Portfolios</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wider font-mono text-xs uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#expertise" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">DevOps &amp; CI/CD</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">API Integration</a></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wider font-mono text-xs uppercase mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Finance &amp; FinTech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Healthcare &amp; MedTech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Retail &amp; eCommerce</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Logistics &amp; Supply</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Education &amp; EdTech</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Travel &amp; Tourism</a></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wider font-mono text-xs uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#blogs" className="hover:text-white transition-colors">Blog &amp; Insights</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Free Quote Calculator</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h4 className="font-semibold text-white tracking-wider font-mono text-xs uppercase mb-4">
              Get in Touch
            </h4>
            
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-mobrilz-blue shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">
                  E 160, 3rd Floor, Sector 63 Noida, U.P. 201301, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-mobrilz-blue shrink-0" />
                <span className="text-xs text-slate-400">
                  Mon - Fri: 9:00 AM - 6:00 PM (IST)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-mobrilz-blue shrink-0" />
                <span className="text-xs text-slate-300">
                  +91-8010355718 (Sales)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-mobrilz-blue shrink-0" />
                <a href="mailto:sales@mobrilz.com" className="text-xs text-slate-300 hover:text-white">
                  sales@mobrilz.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-light gap-4">
          <p>© 2026 Mobrilz Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faqs" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#faqs" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
