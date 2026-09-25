"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040609] border-t border-white/10 pt-20 pb-12 text-foreground relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* ============================================================ */}
        {/* REACH EMAIL / PRIVATE ALLOCATION NEWSLETTER SECTION */}
        {/* ============================================================ */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#090D16] to-[#06080C] p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-azure-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans border border-azure-400/30 px-4 py-1.5 rounded-full bg-azure-950/40 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-azure-400" />
              PRIVATE ALLOCATION
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-foreground font-light tracking-tight">
              The NIAMAL Circle
            </h3>

            <p className="font-sans text-xs sm:text-sm md:text-base text-muted-light max-w-xl mx-auto leading-relaxed font-light">
              Gain confidential invitations to small-batch perfume macerations, private flacon releases, and bespoke olfactory allocations.
            </p>

            {isSubscribed ? (
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-azure-400/40 max-w-md mx-auto flex flex-col items-center space-y-2.5">
                <CheckCircle2 className="w-7 h-7 text-azure-400" />
                <span className="font-serif text-lg text-foreground">
                  Welcome to the Circle
                </span>
                <p className="text-xs text-muted-light font-sans font-light">
                  Your email has been registered. You will receive allocations prior to general release.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleEmailSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your confidential email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 px-5 py-3.5 rounded-full bg-white/[0.03] border border-white/15 text-foreground placeholder:text-muted-dark text-xs font-sans tracking-wide focus:outline-none focus:border-azure-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-full bg-azure-400 hover:bg-azure-300 text-black text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 shadow-md shadow-azure-400/20 active:scale-95 cursor-pointer"
                >
                  Request Access
                </button>
              </form>
            )}

            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-dark font-sans pt-1">
              Strictly Confidential • No Spam • Allocation Announcements Only
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN NAVIGATION & BRAND IDENTITY GRID */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Identity Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-serif text-3xl tracking-[0.25em] text-foreground block font-light">
                NIAMAL
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-azure-400 font-sans block font-medium">
                MAISON DE LUXE
              </span>
            </div>
            <p className="font-sans text-xs text-muted max-w-sm leading-relaxed font-light">
              Curated luxury for the discerning few. Every creation is governed by a singular discipline: that true luxury is intentional in every dimension.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="text-xs uppercase tracking-[0.25em] text-azure-400 hover:text-azure-200 transition-colors flex items-center gap-1.5 font-sans cursor-pointer"
              >
                <span>Return to Summit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Creations */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-azure-400 font-sans block font-medium">
                Creations
              </span>
              <ul className="space-y-2.5 text-xs text-muted font-sans font-light">
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Oud Royalé Flacon
                  </a>
                </li>
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Floret Extrait
                  </a>
                </li>
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Pure Oil Formulation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Maison */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-azure-400 font-sans block font-medium">
                Maison
              </span>
              <ul className="space-y-2.5 text-xs text-muted font-sans font-light">
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    The Two Editions
                  </a>
                </li>
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Botanical Sanctity
                  </a>
                </li>
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Private Circle
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Concierge */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-azure-400 font-sans block font-medium">
                Concierge
              </span>
              <ul className="space-y-2.5 text-xs text-muted font-sans font-light">
                <li className="text-muted-dark">
                  concierge@niamal.com
                </li>
                <li>
                  <span className="text-muted">Complimentary Shipping</span>
                </li>
                <li>
                  <span className="text-muted">Flacon Engraving</span>
                </li>
                <li>
                  <span className="text-muted">Bespoke Gifting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM METADATA & COPYRIGHT INFO */}
        {/* ============================================================ */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-dark font-sans gap-4">
          <div>
            © 2026 NIAMAL LLP. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-azure-400">Currency: INR (₹)</span>
            <span>•</span>
            <a href="#" className="hover:text-muted transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-muted transition-colors">
              Terms of Sale
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
