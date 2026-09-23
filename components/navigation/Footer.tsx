"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040609] border-t border-white/10 pt-20 pb-12 text-foreground relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
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
                    Noir Absolu Flacon
                  </a>
                </li>
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Ambre Sacré Extrait
                  </a>
                </li>
                <li>
                  <a href="#perfumes" className="hover:text-azure-200 transition-colors">
                    Cèdre Doré Parfum
                  </a>
                </li>
                <li>
                  <a href="#accessories" className="hover:text-azure-200 transition-colors">
                    Obsidian Leather Case
                  </a>
                </li>
                <li>
                  <a href="#accessories" className="hover:text-azure-200 transition-colors">
                    Aurum MagSafe Charger
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
                  <a href="#philosophy" className="hover:text-azure-200 transition-colors">
                    The Three Dimensions
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="hover:text-azure-200 transition-colors">
                    Material Sanctity
                  </a>
                </li>
                <li>
                  <a href="#circle" className="hover:text-azure-200 transition-colors">
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

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-dark font-sans gap-4">
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
