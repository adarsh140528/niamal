"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className,
  magneticStrength = 0.3,
  onClick,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * magneticStrength;
    const distanceY = (clientY - centerY) * magneticStrength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-azure-400 text-black font-sans uppercase tracking-[0.22em] text-xs font-semibold px-8 py-4 border border-azure-300 hover:bg-azure-300 shadow-[0_0_25px_rgba(56,189,248,0.25)] active:scale-[0.98]",
    secondary:
      "bg-white/5 text-foreground font-sans uppercase tracking-[0.22em] text-xs font-medium px-8 py-4 border border-white/15 hover:bg-white/10 hover:border-azure-400/50 active:scale-[0.98]",
    outline:
      "bg-transparent text-azure-300 font-sans uppercase tracking-[0.22em] text-xs font-medium px-8 py-4 border border-azure-400/40 hover:bg-azure-500/10 hover:border-azure-300 active:scale-[0.98]",
    text:
      "bg-transparent text-foreground hover:text-azure-300 font-sans uppercase tracking-[0.25em] text-xs font-medium px-2 py-2 underline-offset-8 hover:underline active:scale-[0.98]",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.2 }}
      className={cn(
        "relative inline-flex items-center justify-center transition-all duration-300 select-none overflow-hidden group cursor-pointer",
        variants[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      )}
    </motion.button>
  );
}
