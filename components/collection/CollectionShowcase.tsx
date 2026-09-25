"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product } from "@/lib/data/products";
import { useCart } from "@/lib/context/cart-context";
import { formatPrice } from "@/lib/utils";
import {
  Sparkles,
  Maximize2,
  X,
  Plus,
  Check,
  Star,
  Droplets,
  ShieldCheck,
  Flame,
  Flower2
} from "lucide-react";

export default function CollectionShowcase() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addItem(
      {
        ...product,
        volume: product.volume,
      },
      1,
      "100ml"
    );
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <section id="perfumes" className="py-20 md:py-32 relative z-10 border-t border-white/[0.08] bg-[#06080C] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12 md:space-y-16">
        {/* ============================================================ */}
        {/* SECTION HEADER */}
        {/* ============================================================ */}
        <div className="max-w-3xl mx-auto text-center space-y-4 pb-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-azure-500/10 border border-azure-400/25 shadow-sm shadow-azure-500/10 backdrop-blur-md">
            <Droplets className="w-3 h-3 text-azure-300" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-azure-300 font-sans font-medium">
              PURE OIL BASED PERFUMES
            </span>
          </div>

          {/* Main Title */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground font-light tracking-tight leading-tight">
              The <span className="italic font-normal bg-gradient-to-r from-amber-200 via-azure-200 to-purple-300 bg-clip-text text-transparent">Signature Editions</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <p className="font-sans text-xs sm:text-sm text-muted-light/80 font-light tracking-wide max-w-lg">
              Two rare oil formulations crafted with concentrated extracts for extraordinary depth and permanence
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2 MAIN PRODUCTS SHOWCASE GRID */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {PRODUCTS.map((prod, index) => {
            const isAdded = addedProductId === prod.id;
            const isOud = prod.id === "oud-royale";

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setModalProduct(prod)}
                className={`group relative rounded-3xl border transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isOud
                    ? "border-amber-500/20 bg-gradient-to-b from-[#0e0c08] via-[#080a0f] to-[#06080c] hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-950/40"
                    : "border-purple-500/20 bg-gradient-to-b from-[#0d0914] via-[#080a0f] to-[#06080c] hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-950/40"
                }`}
              >
                {/* Accent ambient top shine */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] transition-opacity duration-500 ${
                    isOud
                      ? "bg-gradient-to-r from-transparent via-amber-400/60 to-transparent group-hover:opacity-100 opacity-60"
                      : "bg-gradient-to-r from-transparent via-purple-400/60 to-transparent group-hover:opacity-100 opacity-60"
                  }`}
                />

                {/* Card Top Information */}
                <div className="p-6 sm:p-8 relative z-10 flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded-full font-sans font-medium flex items-center gap-1.5 ${
                          isOud
                            ? "bg-amber-500/15 border border-amber-400/30 text-amber-300"
                            : "bg-purple-500/15 border border-purple-400/30 text-purple-300"
                        }`}
                      >
                        {isOud ? <Flame className="w-3 h-3 text-amber-300" /> : <Flower2 className="w-3 h-3 text-purple-300" />}
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-light tracking-tight pt-2">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-sans uppercase tracking-[0.25em] text-muted-light">
                      {prod.subTitle} • <span className="text-azure-300">{prod.volume}</span>
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="text-right space-y-0.5">
                    <span className="font-serif text-2xl sm:text-3xl text-foreground font-light block">
                      {formatPrice(prod.price)}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs font-sans text-muted line-through block">
                        {formatPrice(prod.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Central Product Bottle Image */}
                <div className="relative z-10 w-full flex-1 flex items-center justify-center p-6 sm:p-10 my-2">
                  <div className="relative max-h-[380px] sm:max-h-[440px] w-full flex items-center justify-center">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-[360px] sm:max-h-[420px] w-auto object-contain rounded-xl drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Fragrance Flavour Architecture & Quick Specs */}
                <div className="p-6 sm:p-8 relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm space-y-6">
                  {/* Flavour / Fragrance Notes Grid */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-dark font-sans">
                      <span className="flex items-center gap-1.5 text-muted-light">
                        <Sparkles className="w-3 h-3 text-azure-400" />
                        Fragrance Flavour Notes
                      </span>
                      <span>3-Tier Architecture</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                      {/* Top */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-azure-300/80 font-sans block">
                          Top Notes
                        </span>
                        <p className="text-xs text-foreground font-light leading-snug">
                          {prod.notes.top.join(", ")}
                        </p>
                      </div>

                      {/* Heart */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-amber-300/80 font-sans block">
                          Heart Notes
                        </span>
                        <p className="text-xs text-foreground font-light leading-snug">
                          {prod.notes.heart.join(", ")}
                        </p>
                      </div>

                      {/* Base */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-purple-300/80 font-sans block">
                          Base Notes
                        </span>
                        <p className="text-xs text-foreground font-light leading-snug">
                          {prod.notes.base.slice(0, 3).join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description Teaser */}
                  <p className="text-xs sm:text-sm text-muted-light font-light leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>

                  {/* Actions: Add to Bag & View Details */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, prod)}
                      className="flex-1 flex items-center justify-center gap-2 bg-azure-400 hover:bg-azure-300 text-black text-xs uppercase tracking-[0.2em] font-sans font-semibold py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-azure-400/20 hover:scale-[1.01] active:scale-95 cursor-pointer"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Shopping Bag • {formatPrice(prod.price)}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalProduct(prod)}
                      className="h-12 w-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-azure-400/50 flex items-center justify-center text-azure-300 hover:text-white transition-all shrink-0 cursor-pointer"
                      aria-label="Enlarge product details"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* DETAILED FULLSCREEN PRODUCT MODAL */}
      {/* ============================================================ */}
      <AnimatePresence>
        {modalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6 md:p-10 overflow-y-auto"
            onClick={() => setModalProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#080C14] border border-white/15 rounded-3xl p-6 sm:p-10 overflow-hidden shadow-2xl my-auto space-y-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center text-foreground transition-all duration-300 z-30"
                aria-label="Close details"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Bottle Image */}
                <div className="md:col-span-5 flex items-center justify-center p-4 bg-black/40 rounded-2xl border border-white/5">
                  <img
                    src={modalProduct.image}
                    alt={modalProduct.name}
                    className="max-h-[380px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                  />
                </div>

                {/* Details Column */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans font-medium">
                      {modalProduct.badge}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-light mt-1">
                      {modalProduct.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-azure-200/80 font-sans mt-1">
                      {modalProduct.subTitle} • {modalProduct.volume}
                    </p>
                  </div>

                  <p className="text-sm text-muted-light font-light leading-relaxed">
                    {modalProduct.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-azure-300 font-sans block">
                      Flavour Composition
                    </span>
                    <div className="space-y-1.5 text-xs text-muted-light">
                      <p><span className="text-foreground font-medium">Head:</span> {modalProduct.notes.top.join(" • ")}</p>
                      <p><span className="text-foreground font-medium">Heart:</span> {modalProduct.notes.heart.join(" • ")}</p>
                      <p><span className="text-foreground font-medium">Base:</span> {modalProduct.notes.base.join(" • ")}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-dark font-sans block">
                      Artisanal Formulation Highlights
                    </span>
                    <div className="space-y-1.5">
                      {modalProduct.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-muted-light">
                          <Check className="w-3.5 h-3.5 text-azure-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted block">Bottle Price</span>
                      <span className="font-serif text-2xl sm:text-3xl text-foreground font-light">
                        {formatPrice(modalProduct.price)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        handleAddToCart(e, modalProduct);
                        setModalProduct(null);
                      }}
                      className="bg-azure-400 hover:bg-azure-300 text-black text-xs uppercase tracking-[0.2em] font-sans font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-azure-400/25"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
