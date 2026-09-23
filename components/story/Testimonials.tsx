"use client";

import React from "react";
import { REVIEWS } from "@/lib/data/products";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 relative z-10 border-t border-white/[0.06] bg-[#06080C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.4em] text-azure-400 font-sans block font-medium">
            CLIENT PERSPECTIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-normal tracking-tight">
            Endorsements of Intent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 md:p-10 rounded-3xl bg-surface border border-white/5 flex flex-col justify-between space-y-8 hover:border-azure-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-azure-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-azure-400" />
                  ))}
                </div>
                <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed font-light">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-1">
                <span className="font-serif text-base text-foreground font-medium">
                  {rev.author}
                </span>
                <span className="text-xs text-azure-300 font-sans">
                  {rev.role}
                </span>
                <span className="text-[10px] text-muted font-sans uppercase tracking-wider pt-1">
                  Acquisition: {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
