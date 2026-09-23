"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Check } from "lucide-react";

export interface ExpandableGalleryProps {
  images: string[];
  productName?: string;
  subTitle?: string;
  price?: string;
  badge?: string;
  angleLabels?: string[];
  features?: string[];
  className?: string;
  onAddToCart?: () => void;
  isAdded?: boolean;
}

export type ProductGalleryProps = ExpandableGalleryProps;

export function ExpandableGallery({
  images = [],
  productName = "NIAMAL Perfume",
  subTitle,
  price,
  badge,
  angleLabels,
  features,
  className = "",
  onAddToCart,
  isAdded = false,
}: ExpandableGalleryProps) {
  const validImages = images.length > 0 ? images : ["/products/product-01.webp"];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [showDetailsInModal, setShowDetailsInModal] = useState(false);

  const defaultAngleLabels = [
    "Flacon Silhouette",
    "Magnetic Cap & Atomizer",
    "Clarified Glass Structure",
    "Luxury Presentation Coffret",
  ];

  const labels = angleLabels && angleLabels.length > 0 ? angleLabels : defaultAngleLabels;

  // Fullscreen Navigation handlers
  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setShowDetailsInModal(false);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + validImages.length) % validImages.length : 0
    );
  }, [validImages.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % validImages.length : 0
    );
  }, [validImages.length]);

  // Keyboard accessibility
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <div className={`w-full select-none ${className}`}>
      {/* ============================================================ */}
      {/* DESKTOP VIEW: Full-Width Luxury Expandable Editorial Gallery */}
      {/* ============================================================ */}
      <div className="hidden md:flex gap-3.5 h-[500px] lg:h-[580px] w-full items-stretch">
        {validImages.map((src, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;
          const angleLabel = labels[index % labels.length];

          return (
            <motion.button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              layout
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // Restrained luxury ease
              }}
              className={`relative h-full overflow-hidden rounded-2xl border bg-[#080C14] cursor-pointer text-left transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-azure-400 ${
                isHovered
                  ? "flex-[4.2] border-azure-400/40 shadow-2xl shadow-azure-950/60"
                  : isAnyHovered
                  ? "flex-[1] border-white/10 opacity-60 brightness-75 hover:opacity-85 hover:brightness-90"
                  : "flex-[1.5] border-white/10 opacity-90"
              }`}
              aria-label={`View ${productName} — ${angleLabel}`}
            >
              {/* Subtle background illumination for active flacon */}
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-b from-azure-500/[0.04] via-transparent to-azure-950/[0.15] pointer-events-none" />
              )}

              {/* Perfume Bottle Presentation with Scale on Hover */}
              <div className="absolute inset-0 p-8 lg:p-12 flex items-center justify-center">
                <img
                  src={src}
                  alt={`${productName} — ${angleLabel}`}
                  className={`w-full h-full object-contain transition-transform duration-700 ease-out ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Badge for Primary Column */}
              {index === 0 && badge && (
                <div className="absolute top-5 left-5 z-10 bg-azure-500/15 border border-azure-400/30 text-azure-300 text-[9px] uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full font-sans backdrop-blur-md">
                  {badge}
                </div>
              )}

              {/* Number Index on Non-Active Columns */}
              <div
                className={`absolute top-5 right-5 font-serif text-sm text-azure-200/40 tracking-widest transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                0{index + 1}
              </div>

              {/* Bottom Editorial Caption on Active Column */}
              <div
                className={`absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 transition-all duration-500 ${
                  isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base tracking-widest text-azure-300">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted font-sans">
                      / 0{validImages.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-azure-300 font-sans font-medium bg-azure-500/10 border border-azure-400/30 px-3 py-1 rounded-full">
                    <span>Fullscreen</span>
                    <Maximize2 className="w-3 h-3 text-azure-400" />
                  </div>
                </div>

                <div className="flex items-baseline justify-between border-t border-white/10 pt-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground font-sans font-medium">
                    {angleLabel}
                  </span>
                  {price && (
                    <span className="font-serif text-sm text-azure-200 font-light">
                      {price}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* MOBILE VIEW: Luxury Touch-Swipeable Gallery */}
      {/* ============================================================ */}
      <div className="md:hidden w-full space-y-4">
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2"
          onScroll={(e) => {
            const target = e.currentTarget;
            const scrollLeft = target.scrollLeft;
            const itemWidth = target.offsetWidth;
            const index = Math.round(scrollLeft / itemWidth);
            setMobileActiveIndex(index);
          }}
        >
          {validImages.map((src, index) => {
            const angleLabel = labels[index % labels.length];
            return (
              <button
                key={`mobile-${src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="relative w-full shrink-0 aspect-[4/5] snap-center rounded-2xl border border-white/10 bg-[#080C14] p-8 flex flex-col items-center justify-between focus:outline-none focus:border-azure-400"
                aria-label={`View ${productName} image ${index + 1} of ${validImages.length}`}
              >
                <div className="w-full flex items-center justify-between z-10">
                  {badge && index === 0 ? (
                    <span className="bg-azure-500/15 border border-azure-400/30 text-azure-300 text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded-full font-sans">
                      {badge}
                    </span>
                  ) : <span />}
                  <span className="font-serif text-xs text-azure-300/60 tracking-widest">
                    0{index + 1} / 0{validImages.length}
                  </span>
                </div>

                <div className="w-full h-3/4 flex items-center justify-center p-4">
                  <img
                    src={src}
                    alt={`${productName} — ${angleLabel}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="w-full flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-light font-sans">
                    {angleLabel}
                  </span>
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-[0.2em] text-azure-400 font-sans">
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {validImages.map((_, i) => (
            <div
              key={`dot-${i}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                mobileActiveIndex === i
                  ? "w-6 bg-azure-400"
                  : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* FULLSCREEN LUXURY PRODUCT VIEWER (MODAL) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-6 md:p-12 overflow-y-auto"
            onClick={handleClose}
          >
            {/* Top Bar: Product Name, Subtitle & Action Controls */}
            <div
              className="w-full flex items-center justify-between z-20 pb-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans font-medium">
                  MAISON GALLERY • {labels[selectedIndex % labels.length]}
                </span>
                <h3 className="font-serif text-xl md:text-3xl text-foreground font-normal tracking-wide">
                  {productName}
                </h3>
                {subTitle && (
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-sans pt-0.5">
                    {subTitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                {price && onAddToCart && (
                  <button
                    type="button"
                    onClick={onAddToCart}
                    className="hidden sm:flex items-center gap-2 bg-azure-400 hover:bg-azure-300 text-black text-xs uppercase tracking-[0.2em] font-sans font-medium px-5 py-2.5 rounded-full transition-colors duration-300 shadow-lg shadow-azure-400/20"
                  >
                    {isAdded ? "Added to Bag ✓" : `Add to Bag • ${price}`}
                  </button>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-azure-400/50 flex items-center justify-center text-foreground transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-azure-400"
                  aria-label="Close fullscreen gallery"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Center Stage: Large Uncropped Flacon Photography */}
            <div
              className="relative max-w-6xl w-full my-auto py-8 mx-auto flex items-center justify-center min-h-[55vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={validImages[selectedIndex]}
                  alt={`${productName} — Fullscreen View ${labels[selectedIndex % labels.length]}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="max-h-[60vh] max-w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                />
              </AnimatePresence>
            </div>

            {/* Bottom Bar: Angle Switcher & Prev/Next Controls */}
            <div
              className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Angle thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {validImages.map((tSrc, tIdx) => (
                  <button
                    key={`thumb-${tIdx}`}
                    type="button"
                    onClick={() => setSelectedIndex(tIdx)}
                    className={`w-12 h-12 rounded-xl border p-1 bg-[#0A0E17] transition-all duration-300 shrink-0 ${
                      selectedIndex === tIdx
                        ? "border-azure-400 ring-1 ring-azure-400"
                        : "border-white/15 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={tSrc}
                      alt={`Thumbnail 0${tIdx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Navigation Arrows & Counter */}
              <div className="flex items-center gap-4">
                <div className="font-serif text-sm text-azure-200 tracking-wider">
                  0{selectedIndex + 1}
                  <span className="text-muted-dark font-sans text-xs ml-1.5">
                    / 0{validImages.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-azure-400/50 flex items-center justify-center text-foreground transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-azure-400"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-azure-400/50 flex items-center justify-center text-foreground transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-azure-400"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const ProductGallery = ExpandableGallery;
export default ExpandableGallery;
