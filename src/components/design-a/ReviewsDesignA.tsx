"use client";

import React from "react";
import { Star, Quote, CheckCircle2, ShieldCheck } from "lucide-react";
import { reviewsData } from "@/lib/data/reviews";

export function ReviewsDesignA() {
  const featuredReview = reviewsData[0];
  const otherReviews = reviewsData.slice(1);

  return (
    <section id="reviews" className="w-full bg-[#fbfcfd] border-b border-slate-200 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#09143f]">
            Verified Executive Testimonials
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Real feedback from founders, CTOs, and product leaders who scaled their digital platforms with Mobrilz.
          </p>
        </div>

        {/* Featured Editorial Review */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 mb-8 shadow-sm">
          <div className="flex items-center gap-1 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <blockquote className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed max-w-4xl">
            {featuredReview.quote}
          </blockquote>

          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#09143f] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                {featuredReview.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">{featuredReview.name}</h4>
                <p className="text-xs text-slate-500">{featuredReview.role}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Client Review
            </span>
          </div>
        </div>

        {/* Grid of Other Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherReviews.map((rev) => (
            <div
              key={rev.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed font-normal">
                  {rev.quote}
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs border border-slate-200">
                  {rev.initials}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">{rev.name}</h5>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

