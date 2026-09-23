"use client";

import React from "react";
import { BRAND_PHILOSOPHY } from "@/lib/data/products";

export default function BrandStory() {
  return (
    <section id="philosophy" className="py-24 md:py-36 relative z-10 border-t border-white/[0.08] bg-[#06080C] overflow-hidden">
      {/* Ambient Depth Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-azure-500/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Top Headline with Refined Typography Proportions */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16 md:mb-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans font-medium">
              MAISON PHILOSOPHY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-light tracking-wide leading-tight">
            Crafted in Three Dimensions
          </h2>

          <p className="font-serif italic text-base sm:text-lg md:text-xl text-azure-100/75 font-light max-w-2xl mx-auto leading-relaxed pt-1">
            &ldquo;Every NIAMAL piece is designed with the same discipline — where material, form, and light converge into something extraordinary.&rdquo;
          </p>
        </div>

        {/* 
          EDITORIAL TRIPTYCH
          Architectural hairline dividers, elegant spacing, refined typography scale
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {BRAND_PHILOSOPHY.pillars.map((pillar, idx) => (
            <div
              key={pillar.num}
              className="py-10 md:py-12 px-6 md:px-8 lg:px-10 flex flex-col justify-between space-y-8 group hover:bg-white/[0.015] transition-colors duration-500"
            >
              {/* Pillar Number & Top Label */}
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-2xl md:text-3xl text-azure-400/50 group-hover:text-azure-300 transition-colors font-light">
                  {pillar.num}
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-muted-dark font-sans font-medium">
                  DIMENSION 0{idx + 1}
                </span>
              </div>

              {/* Pillar Title & Body Text */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground group-hover:text-azure-100 transition-colors font-normal">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted-light/75 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Subtle Bottom Architectural Line */}
              <div className="pt-2 flex items-center gap-2.5">
                <div className="w-6 h-[1px] bg-azure-400/30 group-hover:w-12 group-hover:bg-azure-400 transition-all duration-500" />
                <span className="text-[8px] uppercase tracking-[0.25em] text-muted-dark group-hover:text-azure-400 transition-colors">
                  NIAMAL STANDARD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
