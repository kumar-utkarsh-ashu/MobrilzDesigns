"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

interface FooterDesignAProps {
  onOpenEstimator?: () => void;
}

export function FooterDesignA({ onOpenEstimator }: FooterDesignAProps) {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-700 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block">
              <Image
                src="/assets/logo.svg"
                alt="Mobrilz"
                width={160}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </a>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Mobrilz is a high-precision digital engineering consultancy. We design, build, and scale mobile applications, enterprise SaaS platforms, and autonomous AI systems.
            </p>
            <div className="pt-2 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:info@mobrilz.com" className="hover:text-blue-600 font-medium">info@mobrilz.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+918882898235" className="hover:text-blue-600 font-medium">+91 88828 98235</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Noida Sector 63, Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Column: Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Engineering</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#services" className="hover:text-blue-600">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-blue-600">Web Platforms & SaaS</a></li>
              <li><a href="#services" className="hover:text-blue-600">Enterprise AI & RAG</a></li>
              <li><a href="#services" className="hover:text-blue-600">Microservices Architecture</a></li>
              <li><a href="#services" className="hover:text-blue-600">UI/UX Design Systems</a></li>
            </ul>
          </div>

          {/* Column: Industries */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#projects" className="hover:text-blue-600">FinTech & Asset Management</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Healthcare & Telemedicine</a></li>
              <li><a href="#projects" className="hover:text-blue-600">E-Commerce & Retail</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Logistics & Supply Chain</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Real Estate & PropTech</a></li>
            </ul>
          </div>

          {/* Column: Organization */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#about" className="hover:text-blue-600">About Mobrilz</a></li>
              <li><a href="#process" className="hover:text-blue-600">Sprint Methodology</a></li>
              <li><a href="#reviews" className="hover:text-blue-600">Client Reviews</a></li>
              <li><a href="#blog" className="hover:text-blue-600">Engineering Insights</a></li>
              <li><a href="#faqs" className="hover:text-blue-600">FAQ & SLA Terms</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ISO-27001 Certified Security Practices • 100% IP Handover Guarantee</span>
          </div>
          <div>
            © {new Date().getFullYear()} Mobrilz Technologies Pvt. Ltd. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

