import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06080C",
        foreground: "#F0F6FC",
        surface: {
          DEFAULT: "#0B0F17",
          elevated: "#111827",
          subtle: "rgba(255, 255, 255, 0.03)",
        },
        azure: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8", // Primary Ethereal Sky Blue Accent
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
          muted: "rgba(56, 189, 248, 0.18)",
        },
        gold: {
          // Fallback alias mapped to azure for full compatibility
          400: "#38BDF8",
          500: "#0EA5E9",
          200: "#BAE6FD",
          300: "#7DD3FC",
        },
        ice: "#E2F1FD",
        obsidian: "#06080C",
        charcoal: "#0E131F",
        muted: {
          DEFAULT: "#94A3B8",
          dark: "#64748B",
          light: "#CBD5E1",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          azure: "rgba(56, 189, 248, 0.25)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["monospace"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
      },
      backgroundImage: {
        "azure-gradient": "linear-gradient(135deg, #F0F9FF 0%, #38BDF8 50%, #0284C7 100%)",
        "azure-glow": "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
