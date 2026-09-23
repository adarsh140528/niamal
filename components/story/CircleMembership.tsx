"use client";

import React, { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function CircleMembership() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <section id="circle" className="py-28 md:py-40 relative z-10 border-t border-white/[0.06] bg-[#06080C]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8 bg-surface p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-azure-400 font-sans border border-azure-400/30 px-4 py-1.5 rounded-full bg-azure-950/40">
            <Sparkles className="w-3 h-3 text-azure-400" />
            PRIVATE ALLOCATION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-foreground font-normal tracking-tight">
            The NIAMAL Circle
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-light max-w-xl mx-auto leading-relaxed font-light">
            Gain confidential invitations to small-batch perfume macerations, private flacon engravings, and pre-release accessory launches.
          </p>
        </div>

        {isSubscribed ? (
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-azure-400/40 max-w-md mx-auto flex flex-col items-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-azure-400" />
            <span className="font-serif text-xl text-foreground">
              Welcome to the Circle
            </span>
            <p className="text-xs text-muted-light font-sans">
              Your invitation confirmation has been dispatched. You will receive allocations prior to general availability.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your confidential email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-80 px-5 py-4 rounded-none bg-surface-elevated border border-white/15 text-foreground placeholder:text-muted-dark text-xs font-sans tracking-wide focus:outline-none focus:border-azure-400 transition-colors"
            />
            <MagneticButton
              type="submit"
              variant="primary"
              className="w-full sm:w-auto shrink-0"
            >
              Request Access
            </MagneticButton>
          </form>
        )}

        <div className="text-[11px] uppercase tracking-[0.25em] text-muted-dark font-sans pt-2">
          Strictly Confidential • No Spam • Allocation Announcements Only
        </div>
      </div>
    </section>
  );
}
