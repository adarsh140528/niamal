"use client";

import React, { useState } from "react";
import { Sparkles, Droplets, Wind, Flame } from "lucide-react";

export default function FragranceNotes() {
  const [activeTier, setActiveTier] = useState<"top" | "heart" | "base">("heart");

  const noteTiers = [
    {
      id: "top",
      title: "Top Notes",
      subtitle: "The Opening Impression • 0 – 30 Minutes",
      description: "Crisp and luminous, announcing the presence with bright Calabrian bergamot, tingling pink pepper, and sharp bitter orange.",
      ingredients: [
        { name: "Calabrian Bergamot", origin: "Reggio Calabria, Italy", note: "Sparkling, Sunlit Citrus" },
        { name: "Pink Peppercorn", origin: "Madagascar", note: "Spiced, Rosy Warmth" },
        { name: "Bitter Orange", origin: "Seville, Spain", note: "Aromatic Zest" },
      ],
      icon: Wind,
    },
    {
      id: "heart",
      title: "Heart Notes",
      subtitle: "The Olfactory Core • 1 – 6 Hours",
      description: "The velvety heart reveals itself as the citrus settles — rare 18-month macerated Indonesian oud wrapped around dewy Damascene rose petals.",
      ingredients: [
        { name: "Smoked Indonesian Oud", origin: "Kalimantan, Indonesia", note: "Resinous, Deep & Velvet" },
        { name: "Damascus Rose Absolute", origin: "Grasse, France", note: "Opulent Crimson Floral" },
        { name: "Green Cardamom", origin: "Guatemala", note: "Warm Herbal Spice" },
      ],
      icon: Droplets,
    },
    {
      id: "base",
      title: "Base Notes",
      subtitle: "The Sillage & Drydown • 6 – 16+ Hours",
      description: "The sensual anchor that clings to the skin. Warm marine ambergris, dark Atlas cedarwood, and rich black vanilla beans.",
      ingredients: [
        { name: "Natural Ambergris Accord", origin: "Atlantic Coastal Sourcing", note: "Warm Skin Radiance" },
        { name: "Dark Atlas Cedarwood", origin: "Atlas Mountains, Morocco", note: "Architectural Woodiness" },
        { name: "Madagascar Black Vanilla", origin: "Sava Region, Madagascar", note: "Smoky Sweetness" },
        { name: "Aged Patchouli Leaf", origin: "Sumatra", note: "Earthy Foundation" },
      ],
      icon: Flame,
    },
  ];

  return (
    <section id="notes" className="py-28 md:py-40 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-400 font-sans block font-semibold">
            THE OLFACTORY ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground font-normal tracking-tight">
            Choreographed Note Evolution
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-light leading-relaxed">
            A high-concentration Extrait evolves over hours on the skin. Explore the layered composition of Noir Absolu across three temporal stages.
          </p>
        </div>

        {/* Tier Selector Buttons */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 p-1.5 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 mb-12 max-w-2xl">
          {noteTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id as any)}
              className={`py-3.5 md:py-4 px-2 rounded-xl text-center transition-all duration-300 flex flex-col items-center gap-1 ${
                activeTier === tier.id
                  ? "bg-gold-500 text-black shadow-lg"
                  : "text-muted hover:text-foreground hover:bg-white/5"
              }`}
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans font-medium">
                {tier.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Tier Display Card */}
        {noteTiers.map((tier) => {
          if (tier.id !== activeTier) return null;
          const Icon = tier.icon;

          return (
            <div
              key={tier.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-black/65 backdrop-blur-2xl p-8 md:p-14 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden transition-all duration-500"
            >
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal">
                        {tier.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-sans block">
                        {tier.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-muted-light leading-relaxed pt-2">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-muted font-sans">
                  <span>Distilled in Grasse, France</span>
                  <span>Pure Extraction</span>
                </div>
              </div>

              {/* Right Ingredients Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tier.ingredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-gold-500/40 transition-all duration-300 space-y-2 group"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-sans block">
                      {ing.origin}
                    </span>
                    <h4 className="font-serif text-lg text-foreground group-hover:text-gold-200 transition-colors">
                      {ing.name}
                    </h4>
                    <p className="text-xs text-muted-light font-sans italic">
                      {ing.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
