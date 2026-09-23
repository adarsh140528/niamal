"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalVideoScroller() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.pause();

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    // Scrub video across the entire document scroll
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        if (video.duration) {
          const targetTime = self.progress * video.duration;
          if (Math.abs(video.currentTime - targetTime) > 0.02) {
            video.currentTime = targetTime;
          }
        }
      },
    });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Persistent Full-Bleed Video Background */}
      <video
        ref={videoRef}
        src="/videos/niamal-product-hero.mp4"
        poster="/videos/niamal-product-hero-poster.webp"
        preload="auto"
        muted
        playsInline
        className="w-full h-full object-cover object-center scale-[1.03] will-change-transform"
      />

      {/* Cinematic Vignette & Deep Contrast Shaders */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_transparent_20%,_#080808_90%)]" />
      
      {/* Subtle Warm Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold-500/10 rounded-full blur-[180px] opacity-70" />
    </div>
  );
}
