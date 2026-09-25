export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  category: "perfumes";
  subTitle: string;
  tagline?: string;
  price: number; // in INR
  originalPrice?: number;
  currency: string;
  volume: string;
  concentration: string;
  description: string;
  story: string;
  features: string[];
  notes: FragranceNotes;
  image: string;
  images?: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "oud-royale",
    name: "Oud Royalé",
    category: "perfumes",
    subTitle: "Oil Based Perfume",
    tagline: "Excellence in Every Sense",
    concentration: "Pure Oil Based Extrait (Alcohol-Free)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 5499,
    originalPrice: 6499,
    currency: "₹",
    description: "An opulent, royal composition of pure aged agarwood chips, warm golden amber resin, and sacred oriental spices. Formulated as a concentrated oil-based perfume for enduring depth and unprecedented longevity.",
    story: "Excellence in Every Sense. Inspired by royal olfactory traditions, Oud Royalé captures the pure warmth of precious macerated oud wood chips and resinous amber in a silky luxury oil formulation.",
    features: [
      "Pure Oil-Based Perfume Formulation (Alcohol-Free)",
      "Aged Agarwood Chips & Smoked Oud Resin Extract",
      "Extraordinary 24+ Hour Sillage & Skin Intimacy",
      "Heavyweight Clarified Glass Flacon with Precision Cap",
      "Handcrafted Presentation Coffret"
    ],
    notes: {
      top: ["Golden Saffron", "Smoked Agarwood", "Cardamom"],
      heart: ["Royal Cambodi Oud", "Warm Golden Amber", "Spiced Nutmeg"],
      base: ["Precious Oud Wood Chips", "Indonesian Patchouli", "Mysore Sandalwood", "Dark Musk"]
    },
    image: "/products/oud-royale.png",
    images: [
      "/products/oud-royale.png"
    ],
    badge: "Excellence in Every Sense",
    rating: 4.98,
    reviewCount: 142,
    inStock: true,
    featured: true,
  },
  {
    id: "floret",
    name: "Floret",
    category: "perfumes",
    subTitle: "Oil Based Perfume",
    tagline: "Est. 1928 • Extrait de Parfum",
    concentration: "Pure Oil Parfum, Extrait de Parfum (100ml e 3.4 FL.OZ)",
    volume: "100ml e 3.4 FL. OZ.",
    price: 4999,
    originalPrice: 5899,
    currency: "₹",
    description: "A velvety, luminous botanical bouquet of blooming purple orchids, fresh violet blossoms, and delicate floral nectar captured in an exquisite pure oil extrait.",
    story: "Est. 1928. Floret celebrates timeless botanical elegance. Hand-harvested purple blossom petals and white floral nectars distilled into a non-drying, ultra-concentrated pure perfume oil.",
    features: [
      "Pure Oil Parfum, Extrait de Parfum Formulation",
      "Infused with Purple Botanical Floral Petals & Orchid Essence",
      "Velvety, Sensual Long-Lasting Floral Trail",
      "100ml e 3.4 FL.OZ Flacon with Crystalline Cap",
      "Crafted with Zero Harsh Alcohols"
    ],
    notes: {
      top: ["Purple Orchid", "Wild Magnolia", "Dewy Violet Leaves"],
      heart: ["Extrait Floral Nectar", "Damask Rose", "Night Jasmine"],
      base: ["Sheer White Musk", "Cashmere Silk", "Delicate Amber"]
    },
    image: "/products/floret.png",
    images: [
      "/products/floret.png"
    ],
    badge: "Est. 1928",
    rating: 4.95,
    reviewCount: 118,
    inStock: true,
    featured: true,
  }
];

export const BRAND_PHILOSOPHY = {
  headline: "Where Luxury Meets Intention",
  subheadline: "Crafted for the discerning few.",
  manifesto: [
    "Every NIAMAL creation is governed by a singular discipline: that true luxury is not merely decorative, but intentional in every dimension.",
    "From the cold weight of a crystal flacon to the pure maceration of oil-based extracts, our fragrances are engineered to elevate the daily rituals of the discerning few.",
    "We reject synthetic shortcuts and fleeting trends in pursuit of timeless form, botanical purity, and olfactory permanence."
  ],
  pillars: [
    {
      num: "01",
      title: "Pure Oil Formulation",
      description: "Crafted without alcohol harshness to deliver pure scent intimacy and 24+ hour skin longevity."
    },
    {
      num: "02",
      title: "Rare Extract Distillation",
      description: "Steeped in aged agarwood chips, hand-harvested purple petals, and golden amber resins."
    },
    {
      num: "03",
      title: "Crystalline Geometry",
      description: "Ultra-clarified heavy glass flacons crowned with precision transparent closures."
    }
  ]
};

export const REVIEWS = [
  {
    id: "1",
    author: "Isabelle Fontaine",
    role: "Collector & Creative Director",
    quote: "Oud Royalé has an intoxicating, warm presence with unmatched depth. The pure oil formulation stays on the skin all day and night.",
    product: "Oud Royalé Oil Based Perfume",
    rating: 5
  },
  {
    id: "2",
    author: "Camille Jourdain",
    role: "Fragrance Connoisseur",
    quote: "Floret captures the essence of fresh purple orchids and violet petals like nothing else. Pure botanical luxury.",
    product: "Floret Extrait de Parfum",
    rating: 5
  }
];
