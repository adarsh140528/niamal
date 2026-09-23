"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ProductIntro() {
  return (
    <section id="intro" className="relative py-28 md:py-40 border-t border-white/[0.06] z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Tagline */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-400 font-sans">
            EDITORIAL STATEMENT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight max-w-4xl leading-tight">
            Curated luxury for the discerning few.
          </h2>
          <div className="w-16 h-[1px] bg-gold-400/40 my-4" />
          <p className="font-sans text-sm sm:text-base text-muted-light max-w-2xl leading-relaxed">
            Every detail — from fine perfume to precision accessories — is chosen with intention. Where material, form, and light converge into something extraordinary.
          </p>
        </div>

        {/* Asymmetric Magazine Grid with Translucent Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Deep Narrative Card */}
          <div className="lg:col-span-5 space-y-8 bg-black/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-500 font-sans block">
                NOIR ABSOLU • THE CONCEPT
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-light leading-snug">
                The Architecture of Slow Distillation
              </h3>
              <p className="font-sans text-sm text-muted-light leading-relaxed">
                Conceived during twilight in the high mountains of Grasse, Noir Absolu captures the transition between dusk and dark. Rare Indonesian oud is macerated for eighteen months before being blended with hand-harvested Damascene rose petals.
              </p>
            </div>

            {/* Feature Callouts */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-400 font-normal">24%</span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-sans">
                  Pure Extrait Oil
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-400 font-normal">18 Mo.</span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-sans">
                  Slow Maceration
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-400 font-normal">14+ Hrs</span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-sans">
                  Sillage Longevity
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-400 font-normal">Zamak</span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-sans">
                  Magnetic Cap
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Frame */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl overflow-hidden border border-white/15 bg-black/60 backdrop-blur-xl shadow-2xl p-6 md:p-10">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src="/products/product-01.webp"
                  alt="NIAMAL Noir Absolu Eau de Parfum"
                  className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimal Overlay Badge */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.25em] text-gold-400 font-sans">
                  ICONIC FLACON • 100 ML
                </div>
                
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-right">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted block font-sans">
                    Flagship Edition
                  </span>
                  <span className="font-serif text-base text-foreground">
                    ₹5,499.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
