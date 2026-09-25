import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/cart-context";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import BrandLoader from "@/components/ui/BrandLoader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIAMAL — Pure Oil Based Perfumes | Oud Royalé & Floret",
  description:
    "Excellence in Every Sense. Discover NIAMAL pure oil-based perfume editions: Oud Royalé and Floret, crafted with concentrated extracts for enduring depth and permanence.",
  keywords: [
    "NIAMAL",
    "Oud Royale",
    "Floret",
    "Oil Based Perfume",
    "Pure Oil Parfum",
    "Extrait de Parfum",
    "Haute Parfumerie",
    "Luxury Perfume",
  ],
  authors: [{ name: "NIAMAL" }],
  openGraph: {
    title: "NIAMAL — Pure Oil Based Perfumes",
    description: "Excellence in Every Sense. Discover Oud Royalé & Floret.",
    url: "https://niamal.com",
    siteName: "NIAMAL",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} dark`}>
      <body className="bg-background text-foreground antialiased selection:bg-azure-400 selection:text-black">
        {/* Brand Initial Logo Entrance Loader */}
        <BrandLoader />

        <CartProvider>
          <SmoothScroll>
            {/* Film grain atmospheric overlay */}
            <div className="grain-overlay" aria-hidden="true" />
            
            {/* Minimal frosted header */}
            <Header />
            
            {/* Page Content */}
            <div className="relative min-h-screen">
              {children}
            </div>
            
            {/* Cart Drawer */}
            <CartDrawer />
            
            {/* Editorial Footer */}
            <Footer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
