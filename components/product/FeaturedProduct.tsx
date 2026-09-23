"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/lib/data/products";
import { useCart } from "@/lib/context/cart-context";
import { formatPrice } from "@/lib/utils";
import MagneticButton from "@/components/ui/MagneticButton";
import ProductGallery from "@/components/ui/gallery-animation";
import { ShieldCheck, Truck, RefreshCw, Star, Check, Sparkles } from "lucide-react";

export default function FeaturedProduct() {
  const { addItem } = useCart();
  const product = PRODUCTS[0]; // Noir Absolu flagship
  const [selectedSize, setSelectedSize] = useState("100ml");
  const [isAdded, setIsAdded] = useState(false);

  const price = selectedSize === "100ml" ? product.price : 3499;

  const productImages = product.images && product.images.length > 0
    ? product.images
    : [
        product.image,
        "/products/product-02.webp",
        "/products/product-03.webp",
        "/products/product-04.webp",
      ];

  const angleLabels = [
    "01 Primary Flacon Profile",
    "02 Zamak Magnetic Cap",
    "03 Clarified Glass Geometry",
    "04 Coffret & Presentation Box",
  ];

  const handleAddToCart = () => {
    addItem(
      {
        ...product,
        price,
        volume: selectedSize === "100ml" ? "100ml / 3.4 FL. OZ." : "50ml / 1.7 FL. OZ.",
      },
      1,
      selectedSize
    );
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="perfumes" className="py-24 md:py-36 relative z-10 border-t border-white/[0.08] bg-[#06080C] overflow-hidden">
      {/* Background Subtle Azure Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-azure-500/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-14 md:space-y-20">
        {/* Editorial Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans font-medium">
                FLAGSHIP PERFUME COFFRET
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-dark font-sans">
                EDITION NOIR
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground font-light tracking-tight">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-azure-200/80 font-sans">
              {product.subTitle} • {product.concentration}
            </p>
          </div>

          {/* Rating & Origin Pill */}
          <div className="flex flex-col md:items-end space-y-2">
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-azure-400 text-azure-400" />
                ))}
              </div>
              <span className="text-xs text-foreground font-medium font-sans">{product.rating}</span>
              <span className="text-[11px] text-muted-dark font-sans">({product.reviewCount} reviews)</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-dark font-sans">
              Macerated in Grasse, France
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FULL SCREEN / FULL-WIDTH EXPANDABLE GALLERY */}
        {/* ============================================================ */}
        <div className="w-full">
          <ProductGallery
            productName={product.name}
            subTitle={`${product.subTitle} • ${selectedSize}`}
            price={formatPrice(price)}
            badge={product.badge || "Maison Flagship"}
            images={productImages}
            angleLabels={angleLabels}
            onAddToCart={handleAddToCart}
            isAdded={isAdded}
          />
        </div>

        {/* ============================================================ */}
        {/* PRODUCT DETAILS BREAKDOWN (AFTER EXTENDING GALLERY) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-4 items-start">
          {/* Left Column: Olfactory Architecture & Artisanal Craft */}
          <div className="lg:col-span-6 space-y-8">
            {/* Olfactory Notes Card */}
            {product.notes && (
              <div className="bg-[#080C14] border border-white/10 p-8 md:p-10 rounded-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-azure-400 font-sans font-medium flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-azure-400" />
                    OLFACTORY ARCHITECTURE
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-dark font-sans">
                    3-STAGE EVOLUTION
                  </span>
                </div>

                <div className="space-y-5">
                  {/* Top Notes */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted font-sans block">
                      01 Head (Top Notes)
                    </span>
                    <p className="font-serif text-base text-foreground font-light">
                      {product.notes.top.join(" • ")}
                    </p>
                  </div>

                  {/* Heart Notes */}
                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-azure-400 font-sans block">
                      02 Heart (Core Notes)
                    </span>
                    <p className="font-serif text-base text-azure-100 font-light">
                      {product.notes.heart.join(" • ")}
                    </p>
                  </div>

                  {/* Base Notes */}
                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted font-sans block">
                      03 Fond (Base Sillage)
                    </span>
                    <p className="font-serif text-base text-foreground font-light">
                      {product.notes.base.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Artisanal Features List */}
            <div className="bg-[#080C14]/60 border border-white/10 p-8 rounded-2xl space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-light font-sans block font-medium">
                MAISON CRAFTSMANSHIP STANDARDS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-light font-sans font-light">
                    <Check className="w-3.5 h-3.5 text-azure-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Volume Selection & Purchasing */}
          <div className="lg:col-span-6 bg-surface p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8">
            {/* Story & Description */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans block font-medium">
                THE NARRATIVE
              </span>
              <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                &ldquo;{product.story}&rdquo;
              </p>
              <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed font-light pt-1">
                {product.description}
              </p>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-4 pt-2 border-t border-white/10">
              <span className="font-serif text-3xl sm:text-5xl text-foreground font-light">
                {formatPrice(price)}
              </span>
              {product.originalPrice && selectedSize === "100ml" && (
                <span className="text-sm font-sans text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-[10px] uppercase tracking-[0.2em] text-azure-400 font-sans ml-auto">
                Complimentary Shipping
              </span>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted font-sans block">
                Select Flacon Volume
              </span>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedSize("100ml")}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    selectedSize === "100ml"
                      ? "border-azure-400 bg-azure-500/15 text-foreground shadow-lg shadow-azure-950/30"
                      : "border-white/10 bg-white/[0.02] text-muted hover:border-white/20"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-widest font-sans font-medium">
                    100 ml / 3.4 oz
                  </span>
                  <span className="block text-xs text-muted-light mt-1 font-serif">
                    Standard Edition • {formatPrice(product.price)}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSize("50ml")}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    selectedSize === "50ml"
                      ? "border-azure-400 bg-azure-500/15 text-foreground shadow-lg shadow-azure-950/30"
                      : "border-white/10 bg-white/[0.02] text-muted hover:border-white/20"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-widest font-sans font-medium">
                    50 ml / 1.7 oz
                  </span>
                  <span className="block text-xs text-muted-light mt-1 font-serif">
                    Voyage Edition • {formatPrice(3499)}
                  </span>
                </button>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <MagneticButton
                variant="primary"
                className="w-full py-4 text-center justify-center text-xs tracking-[0.25em]"
                onClick={handleAddToCart}
              >
                {isAdded ? "Added to Shopping Bag ✓" : "Add to Shopping Bag"}
              </MagneticButton>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <Truck className="w-4 h-4 text-azure-400" />
                <span className="text-[9px] uppercase tracking-wider text-muted font-sans">
                  Express Courier
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-azure-400" />
                <span className="text-[9px] uppercase tracking-wider text-muted font-sans">
                  100% Authentic
                </span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-azure-400" />
                <span className="text-[9px] uppercase tracking-wider text-muted font-sans">
                  Sample Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
