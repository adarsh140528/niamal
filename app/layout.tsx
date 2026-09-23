import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/cart-context";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

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
  title: "NIAMAL — Where Luxury Meets Intention | Fine Perfumes & Accessories",
  description:
    "Curated luxury for the discerning few. Explore NIAMAL fine perfumes including Noir Absolu, Ambre Sacré, and handcrafted Italian leather phone accessories.",
  keywords: [
    "NIAMAL",
    "Noir Absolu",
    "Luxury Perfume",
    "Haute Parfumerie",
    "Extrait de Parfum",
    "Italian Leather iPhone Case",
    "MagSafe Charger",
    "Luxury Accessories",
  ],
  authors: [{ name: "NIAMAL LLP" }],
  openGraph: {
    title: "NIAMAL — Where Luxury Meets Intention",
    description: "Curated luxury for the discerning few. Fine perfumes and precision accessories.",
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
        <CartProvider>
          <SmoothScroll>
            {/* Film grain atmospheric overlay */}
            <div className="grain-overlay" aria-hidden="true" />
            
            {/* Minimal frosted header */}
            <Header />
            
            {/* Page Content */}
            <main className="relative min-h-screen">
              {children}
            </main>
            
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
