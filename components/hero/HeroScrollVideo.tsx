"use client";

import React, { useRef, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay fallback
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end p-8 md:p-16 lg:p-24 select-none overflow-hidden bg-[#06080C]">
      {/* 
        CONTINUOUS AUTOPLAYING SKY-BLUE LUXURY HERO BACKGROUND VIDEO 
      */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.03]"
        >
          <source src="/videos/niamal-product-hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Midnight-Azure Vignette for High Editorial Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06080C]/90 via-[#06080C]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080C] via-transparent to-[#06080C]/60 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-azure-500/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* LEFT-ALIGNED EDITORIAL BRAND & TAGLINE ONLY */}
      <div className="relative z-10 max-w-3xl text-left space-y-4 pb-8 md:pb-14">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] text-foreground uppercase font-light drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
          NIAMAL
        </h1>
        <div className="space-y-1.5">
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-azure-200 font-light tracking-wide drop-shadow-md">
            Where Luxury Meets Intention.
          </p>
          <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.35em] text-muted font-normal pt-1">
            Crafted for the discerning few.
          </p>
        </div>
      </div>
    </section>
  );
}
