"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product } from "@/lib/data/products";
import { useCart } from "@/lib/context/cart-context";
import { formatPrice } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Sparkles,
  Maximize2,
  X,
  Plus,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CollectionShowcase() {
  const [activeCategory, setActiveCategory] = useState<"perfumes" | "accessories">("perfumes");
  const filteredProducts = PRODUCTS.filter((p) => p.category === activeCategory);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const { addItem } = useCart();

  const handleCategorySwitch = (cat: "perfumes" | "accessories") => {
    setActiveCategory(cat);
    setHoveredIndex(0);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addItem(
      {
        ...product,
        volume: product.category === "perfumes" ? "100ml / 3.4 FL. OZ." : product.compatibility,
      },
      1,
      product.category === "perfumes" ? "100ml" : "Standard"
    );
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <section id="collection" className="py-24 md:py-36 relative z-10 border-t border-white/[0.08] bg-[#06080C] overflow-hidden">
      {/* Ambient Azure Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-azure-500/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12 md:space-y-16">
        {/* ============================================================ */}
        {/* CENTERED EDITORIAL SECTION HEADER */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto text-center space-y-4 pb-2">
          {/* Subtle Top Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-azure-500/10 border border-azure-400/25 shadow-sm shadow-azure-500/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-azure-400 animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.35em] text-azure-300 font-sans font-medium">
              HAUTE PARFUMERIE
            </span>
          </div>

          {/* Main Title with Elegant Serif Pairing & Gradient Accent */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-light tracking-tight leading-tight">
              Curated <span className="italic font-normal bg-gradient-to-r from-azure-100 via-azure-200 to-azure-400 bg-clip-text text-transparent">Collections</span>
            </h2>
          </div>

          {/* Architectural Line & Refined Subtitle */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <p className="font-sans text-xs sm:text-sm text-muted-light/80 font-light tracking-wide max-w-lg">
              Six distinct olfactory chapters crafted with uncompromising discipline
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* MULTI-PRODUCT EXPANDABLE GALLERY (6 CREATIONS DESKTOP) */}
        {/* ============================================================ */}
        <div className="hidden md:flex gap-2.5 lg:gap-3 h-[520px] lg:h-[600px] w-full items-stretch">
          {filteredProducts.map((prod, index) => {
            const isHovered = (hoveredIndex ?? 0) === index;
            const isAdded = addedProductId === prod.id;

            return (
              <motion.div
                key={prod.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setModalProduct(prod)}
                layout
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1], // Restrained luxury ease
                }}
                className={`relative h-full overflow-hidden rounded-2xl border bg-[#080C14] cursor-pointer transition-all duration-500 flex flex-col justify-between p-5 lg:p-6 select-none ${isHovered
                  ? "flex-[3.6] border-azure-400/40 shadow-2xl shadow-azure-950/70 ring-1 ring-azure-400/30"
                  : "flex-[1] border-white/10 opacity-60 brightness-75 hover:opacity-90 hover:brightness-100"
                  }`}
              >
                {/* Background Ambient Glow on Active */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-b from-azure-500/[0.04] via-transparent to-azure-950/[0.25] pointer-events-none" />
                )}

                {/* Top Bar inside Card */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  {prod.badge ? (
                    <span
                      className={`text-[8px] lg:text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full font-sans transition-all duration-300 ${isHovered
                        ? "bg-azure-500/20 border border-azure-400/40 text-azure-300"
                        : "bg-white/5 border border-white/10 text-muted-dark"
                        }`}
                    >
                      {prod.badge}
                    </span>
                  ) : (
                    <span className="text-[9px] text-muted-dark font-sans tracking-widest">
                      0{index + 1}
                    </span>
                  )}

                  <span className="font-serif text-xs lg:text-sm text-azure-300/60 tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                {/* Center Image Presentation */}
                <div className="relative z-10 w-full flex-1 flex items-center justify-center p-2 lg:p-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className={`max-h-[260px] lg:max-h-[320px] w-full object-contain transition-transform duration-700 ease-out ${isHovered ? "scale-105" : "scale-95"
                      }`}
                    loading="lazy"
                  />
                </div>

                {/* Bottom Information */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-1.5">
                    <div className="space-y-0.5 truncate">
                      <h3 className="font-serif text-base lg:text-xl text-foreground font-light tracking-tight truncate">
                        {prod.name}
                      </h3>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-azure-300/80 font-sans truncate">
                        {prod.subTitle}
                      </p>
                    </div>

                    <span className="font-serif text-sm lg:text-lg text-azure-200 shrink-0 font-light">
                      {formatPrice(prod.price)}
                    </span>
                  </div>

                  {/* Expanded detail & Action Controls */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between gap-2 pt-1.5"
                    >
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(e, prod)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-azure-400 hover:bg-azure-300 text-black text-[10px] uppercase tracking-[0.2em] font-sans font-medium py-2 rounded-full transition-all duration-300 shadow-md shadow-azure-400/20 hover:scale-[1.02] active:scale-95"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setModalProduct(prod)}
                        className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-azure-300 hover:text-white transition-colors shrink-0"
                        aria-label="Enlarge creation view"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* MULTI-PRODUCT SWIPEABLE GALLERY (MOBILE) */}
        {/* ============================================================ */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2">
          {filteredProducts.map((prod, index) => {
            const isAdded = addedProductId === prod.id;

            return (
              <div
                key={`mob-${prod.id}`}
                onClick={() => setModalProduct(prod)}
                className="relative w-[85vw] shrink-0 aspect-[4/5] snap-center rounded-2xl border border-white/10 bg-[#080C14] p-6 flex flex-col justify-between text-left cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  {prod.badge ? (
                    <span className="bg-azure-500/15 border border-azure-400/30 text-azure-300 text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded-full font-sans">
                      {prod.badge}
                    </span>
                  ) : (
                    <span className="text-[10px] text-muted font-sans uppercase tracking-widest">
                      EDITION 0{index + 1}
                    </span>
                  )}
                  <span className="font-serif text-xs text-azure-300/60 tracking-widest">
                    0{index + 1} / 0{filteredProducts.length}
                  </span>
                </div>

                <div className="w-full flex-1 flex items-center justify-center p-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-[220px] w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-foreground font-normal">
                        {prod.name}
                      </h3>
                      <span className="text-[10px] text-muted-dark uppercase tracking-wider block">
                        {prod.subTitle}
                      </span>
                    </div>
                    <span className="font-serif text-lg text-azure-200">
                      {formatPrice(prod.price)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, prod)}
                    className="w-full py-2.5 rounded-full bg-azure-400 text-black text-xs uppercase tracking-[0.2em] font-sans font-medium flex items-center justify-center gap-1.5"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Shopping Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* FULLSCREEN MULTI-PRODUCT VIEWER MODAL */}
      {/* ============================================================ */}
      <AnimatePresence>
        {modalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-6 md:p-12 overflow-y-auto"
            onClick={() => setModalProduct(null)}
          >
            <div
              className="w-full flex items-center justify-between z-20 pb-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans font-medium">
                  CREATION PRESENTATION
                </span>
                <h3 className="font-serif text-xl md:text-3xl text-foreground font-normal tracking-wide">
                  {modalProduct.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-sans pt-0.5">
                  {modalProduct.subTitle} • {formatPrice(modalProduct.price)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => handleAddToCart(e, modalProduct)}
                  className="hidden sm:flex items-center gap-2 bg-azure-400 hover:bg-azure-300 text-black text-xs uppercase tracking-[0.2em] font-sans font-medium px-5 py-2.5 rounded-full transition-colors duration-300"
                >
                  {addedProductId === modalProduct.id ? "Added to Bag ✓" : `Add to Bag • ${formatPrice(modalProduct.price)}`}
                </button>
                <button
                  type="button"
                  onClick={() => setModalProduct(null)}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-azure-400/50 flex items-center justify-center text-foreground transition-all duration-300"
                  aria-label="Close fullscreen view"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div
              className="relative max-w-6xl w-full my-auto py-8 mx-auto flex items-center justify-center min-h-[55vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalProduct.image}
                alt={modalProduct.name}
                className="max-h-[60vh] max-w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              />
            </div>

            <div
              className="w-full flex items-center justify-between pt-4 border-t border-white/10 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs text-muted-light font-serif italic max-w-xl">
                &ldquo;{modalProduct.story}&rdquo;
              </p>

              <span className="font-serif text-xs text-azure-300/60 tracking-widest">
                NIAMAL MAISON DE HAUTE PARFUMERIE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
