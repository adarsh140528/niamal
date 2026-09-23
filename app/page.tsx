import HeroScrollVideo from "@/components/hero/HeroScrollVideo";
import CollectionShowcase from "@/components/collection/CollectionShowcase";
import BrandStory from "@/components/story/BrandStory";
import Testimonials from "@/components/story/Testimonials";
import CircleMembership from "@/components/story/CircleMembership";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-[#06080C]">
      {/* 01: Hero Section (Continuous Background Video & Left-Aligned Title) */}
      <HeroScrollVideo />

      {/* 02: The NIAMAL Collection (Multi-Product Expandable Gallery directly after Hero) */}
      <CollectionShowcase />

      {/* 03: Maison Philosophy (Crafted in Three Dimensions & 3 Pillars) */}
      <BrandStory />

      {/* 04: Client Perspectives & Endorsements */}
      <Testimonials />

      {/* 05: The NIAMAL Circle (Private Member Allocation) */}
      <CircleMembership />
    </div>
  );
}
