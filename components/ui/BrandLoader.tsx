"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant entrance timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="brand-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06080C] select-none pointer-events-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 0.25, 0.15] }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[600px] h-[600px] rounded-full bg-azure-500/20 blur-[140px]"
          />

          {/* Golden Warm Core Glow */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.1, 0.9], opacity: [0, 0.2, 0.1] }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            className="absolute w-[400px] h-[400px] rounded-full bg-amber-400/15 blur-[120px]"
          />

          {/* Logo Center Container */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6">
            {/* Animated Crown & Monogram Emblem */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* Crown Emblem SVG */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1 text-azure-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
              >
                <path
                  d="M18 2L22.5 11L31 5L27 19H9L5 5L13.5 11L18 2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="18" cy="2" r="1.5" fill="currentColor" />
                <circle cx="31" cy="5" r="1.5" fill="currentColor" />
                <circle cx="5" cy="5" r="1.5" fill="currentColor" />
              </motion.svg>

              {/* Flourish & Monogram "N" */}
              <div className="relative flex items-center justify-center my-1">
                {/* Monogram "N" */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                  className="font-serif text-5xl md:text-6xl text-foreground font-normal tracking-wide relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  N
                </motion.span>

                {/* Sparkling Diamond Accent */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0.8], scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -top-1 -right-4 text-azure-300 text-xs font-serif"
                >
                  ✦
                </motion.span>
              </div>

              {/* Delicate Divider Flourish Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "120px", opacity: 0.6 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-azure-300 to-transparent my-1"
              />
            </motion.div>

            {/* Brand Title: NIAMAL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="space-y-2"
            >
              <h1 className="font-serif text-3xl md:text-4xl text-foreground font-light tracking-[0.35em] uppercase drop-shadow-md">
                NIAMAL
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[9px] md:text-[10px] uppercase tracking-[0.45em] text-azure-300/90 font-sans font-medium"
              >
                EXCELLENCE IN EVERY SENSE
              </motion.p>
            </motion.div>

            {/* Minimal Luxury Progress Bar */}
            <div className="w-36 h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-4 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-gradient-to-r from-transparent via-azure-400 to-amber-200"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
