import HeroScrollVideo from "@/components/hero/HeroScrollVideo";
import CollectionShowcase from "@/components/collection/CollectionShowcase";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen bg-[#06080C]">
      {/* 01: Hero Section (Continuous Background Video & Left-Aligned Title) */}
      <HeroScrollVideo />

      {/* 02: Products Section (Oud Royalé & Floret Oil-Based Perfumes) */}
      <CollectionShowcase />
    </main>
  );
}
