"use client";

import React from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroOpening() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("intro");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center p-8 md:p-16 text-center select-none z-10 pt-28 md:pt-36">
      {/* Top Tagline Pill */}
      <div>
        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold-400 font-sans border border-gold-500/30 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md shadow-2xl">
          <Sparkles className="w-3 h-3 text-gold-400" />
          NIAMAL MAISON DE LUXE
        </span>
      </div>

      {/* Main Title & Brand Statement */}
      <div className="max-w-4xl flex flex-col items-center space-y-4 my-auto py-12">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl tracking-[0.2em] text-foreground uppercase font-normal drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
          NIAMAL
        </h1>
        <p className="font-serif italic text-xl sm:text-3xl md:text-4xl text-gold-200 font-light tracking-wide max-w-2xl drop-shadow-md">
          Where Luxury Meets Intention.
        </p>
        <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.35em] text-muted-light max-w-md pt-2">
          Crafted for the discerning few.
        </p>
        
        <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton
            variant="primary"
            onClick={handleScrollDown}
          >
            Discover Creation
          </MagneticButton>
          <a
            href="#perfumes"
            className="text-xs uppercase tracking-[0.25em] text-muted-light hover:text-gold-400 transition-colors py-3 px-6"
          >
            Explore Catalog →
          </a>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="pb-6 flex flex-col items-center space-y-2">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted-light hover:text-gold-400 transition-colors focus:outline-none"
        >
          <span>Scroll to Experience</span>
          <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1 backdrop-blur-sm bg-black/40">
            <div className="w-1.5 h-2.5 rounded-full bg-gold-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
