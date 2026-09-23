export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  category: "perfumes" | "accessories";
  subTitle: string;
  price: number; // in INR
  originalPrice?: number;
  currency: string;
  volume?: string;
  concentration?: string;
  compatibility?: string;
  description: string;
  story: string;
  features: string[];
  notes?: FragranceNotes;
  materials?: string[];
  image: string;
  images?: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  // --- FINE PERFUMES ---
  {
    id: "noir-absolu",
    name: "Noir Absolu",
    category: "perfumes",
    subTitle: "Eau de Parfum",
    concentration: "Eau de Parfum (24% Extrait Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 5499,
    originalPrice: 6299,
    currency: "₹",
    description: "An intoxicating blend of smoked oud, rare Damask rose, and velvety dark ambergris. Designed for moments that demand reverence.",
    story: "Conceived during twilight, Noir Absolu captures the transition between dusk and dark. Rare Indonesian oud is macerated for eighteen months before being blended with hand-harvested petals.",
    features: [
      "18-Month Macerated Indonesian Oud",
      "Hand-Harvested Damask Rose Essence",
      "Magnetic Zamak Heavyweight Cap",
      "Long-lasting 14+ Hour Sillage",
      "Hand-blown Ultra-Clarified Glass"
    ],
    notes: {
      top: ["Calabrian Bergamot", "Pink Peppercorn", "Bitter Orange"],
      heart: ["Smoked Oud Wood", "Damascus Rose Absolute", "Cardamom"],
      base: ["Ambergris", "Dark Cedarwood", "Indonesian Patchouli", "Black Vanilla"]
    },
    image: "/products/product-01.webp",
    images: [
      "/products/product-01.webp",
      "/products/product-02.webp",
      "/products/product-03.webp",
      "/products/product-04.webp"
    ],
    badge: "Flagship Icon",
    rating: 4.95,
    reviewCount: 128,
    inStock: true,
    featured: true,
  },
  {
    id: "ambre-sacre",
    name: "Ambre Sacré",
    category: "perfumes",
    subTitle: "Extrait de Parfum",
    concentration: "Extrait de Parfum (30% Pure Oil)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 5999,
    originalPrice: 6899,
    currency: "₹",
    description: "Sacred resinous golden amber enveloped in Madagascar bourbon vanilla and sun-warmed frankincense.",
    story: "An homage to ancient perfume rituals. Warm, spiritual, and deeply sensual, Ambre Sacré radiates a quiet, commanding presence that lingers with distinction.",
    features: [
      "Wild-harvested Omani Frankincense",
      "Pure Madagascar Bourbon Vanilla Caviar",
      "Sustainably Sourced Golden Amber Resin",
      "Velvet-lined Luxury Presentation Coffret"
    ],
    notes: {
      top: ["Golden Saffron", "Italian Neroli", "Incense Smoke"],
      heart: ["Bourbon Vanilla", "Myrrh", "White Amber"],
      base: ["Omani Frankincense", "Benzoin Tears", "Sandalwood"]
    },
    image: "/products/product-02.webp",
    badge: "Limited Edition",
    rating: 4.92,
    reviewCount: 94,
    inStock: true,
    featured: true,
  },
  {
    id: "cedre-dore",
    name: "Cèdre Doré",
    category: "perfumes",
    subTitle: "Eau de Parfum",
    concentration: "Eau de Parfum (22% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 5099,
    originalPrice: 5799,
    currency: "₹",
    description: "Crisp Atlas cedarwood infused with sunlit citrus and warm spiced vetiver for an effortlessly confident presence.",
    story: "Inspired by sunbeams piercing dense cedar canopies at dawn. Crisp, clean, and unmistakably refined.",
    features: [
      "Atlas Mountain Cedarwood Essence",
      "Haitian Vetiver Distillation",
      "Cold-Pressed Sicilian Lemon",
      "Laser-Engraved Polished Brass Plaque"
    ],
    notes: {
      top: ["Sicilian Lemon", "Crushed Juniper Berries", "Grapefruit"],
      heart: ["Atlas Cedarwood", "Nutmeg", "Clary Sage"],
      base: ["Haitian Vetiver", "Oakmoss", "White Musk"]
    },
    image: "/products/product-03.webp",
    badge: "New Release",
    rating: 4.88,
    reviewCount: 76,
    inStock: true,
    featured: false,
  },
  {
    id: "lumiere-blanche",
    name: "Lumière Blanche",
    category: "perfumes",
    subTitle: "Eau de Toilette Concentrée",
    concentration: "Eau de Toilette (18% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 4799,
    currency: "₹",
    description: "An ethereal composition of white iris, crisp pear blossom, and luminous musk that feels like pure morning light.",
    story: "A celebration of purity and light. Delicate floral architecture grounded by subtle warm woods.",
    features: [
      "Florentine Orris Butter",
      "Crisp Anjou Pear Blossom",
      "Silk Musk Accord"
    ],
    notes: {
      top: ["Pear Blossom", "Aldehydes", "Mandarin"],
      heart: ["Florentine Iris", "White Peony", "Lilly of the Valley"],
      base: ["Silk Musk", "Cashmere Wood", "White Amber"]
    },
    image: "/products/product-04.webp",
    rating: 4.90,
    reviewCount: 62,
    inStock: true,
    featured: false,
  },
  {
    id: "santal-imperial",
    name: "Santal Impérial",
    category: "perfumes",
    subTitle: "Extrait de Parfum",
    concentration: "Extrait de Parfum (28% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 5699,
    originalPrice: 6499,
    currency: "₹",
    description: "Creamy Mysore sandalwood harmonized with green cardamom, velvety white suede, and dry cedar.",
    story: "A meditation on balance and serenity. Vintage sandalwood distilled in copper stills to preserve its silky, intoxicating warmth.",
    features: [
      "Aged Mysore Sandalwood Oil",
      "Guatemalan Cardamom Pods",
      "White Suede Accord"
    ],
    notes: {
      top: ["Green Cardamom", "Violet Leaf", "Pink Pepper"],
      heart: ["Mysore Sandalwood", "Papyrus", "Iris"],
      base: ["White Suede", "Cedarwood", "Cashmeran"]
    },
    image: "/products/product-01.webp",
    badge: "Maison Reserve",
    rating: 4.96,
    reviewCount: 84,
    inStock: true,
    featured: true,
  },
  {
    id: "vetiver-celeste",
    name: "Vétiver Céleste",
    category: "perfumes",
    subTitle: "Eau de Parfum",
    concentration: "Eau de Parfum (22% Concentration)",
    volume: "100ml / 3.4 FL. OZ.",
    price: 5199,
    originalPrice: 5899,
    currency: "₹",
    description: "Sun-drenched Calabrian bergamot, smoky Bourbon vetiver, and ozone mineral ambergris.",
    story: "Capturing the bracing clarity of sea wind against volcanic cliffs. Earthy, crystalline, and endlessly magnetic.",
    features: [
      "Bourbon Island Vetiver Root",
      "Calabrian Sun Bergamot",
      "Mineral Sea Ambergris"
    ],
    notes: {
      top: ["Calabrian Bergamot", "Bitter Orange", "Grapefruit"],
      heart: ["Smoked Vetiver", "Nutmeg", "Geranium"],
      base: ["Mineral Ambergris", "Cedar", "Tonka Bean"]
    },
    image: "/products/product-02.webp",
    badge: "New Release",
    rating: 4.91,
    reviewCount: 49,
    inStock: true,
    featured: false,
  },

  // --- LUXURY PHONE ACCESSORIES ---
  {
    id: "obsidian-leather-case",
    name: "Obsidian Leather iPhone Case",
    category: "accessories",
    subTitle: "Full-Grain Italian Calfskin",
    compatibility: "iPhone 16 Pro Max / 16 Pro / 15 Pro Max",
    price: 4999,
    originalPrice: 5599,
    currency: "₹",
    description: "Handcrafted from full-grain Tuscan calfskin with diamond-cut machined aluminium buttons and integrated MagSafe alignment array.",
    story: "Engineered to age with distinction. The Tuscan leather develops a rich, unique patina over time while aerospace-grade aluminium protects every corner.",
    features: [
      "Grade 1 Tuscan Full-Grain Vegetable-Tanned Leather",
      "Machined Anodized Aluminium Camera Ring & Buttons",
      "Integrated N52 Rare-Earth MagSafe Magnet Ring",
      "Japanese Microfibre Protective Inner Lining",
      "Drop-tested to 2.4 Metres (Military Standard 810G)"
    ],
    materials: ["Italian Calfskin", "Anodized Aerospace Aluminium", "Microfibre", "Neodymium Magnets"],
    image: "/products/product-05.webp",
    badge: "Bestseller",
    rating: 4.97,
    reviewCount: 215,
    inStock: true,
    featured: true,
  },
  {
    id: "riviera-braided-cable",
    name: "Riviera Braided USB-C Cable",
    category: "accessories",
    subTitle: "Aramid-Reinforced 240W Fast Charging",
    compatibility: "Universal USB-C / Thunderbolt 4 / Power Delivery 3.1",
    price: 4299,
    originalPrice: 4899,
    currency: "₹",
    description: "Ballistic aramid fiber braid with 24K gold-plated connectors and integrated genuine leather cable harness.",
    story: "Designed to end cable fraying forever while delivering studio-grade 240W power delivery and 40Gbps data throughput.",
    features: [
      "Bulletproof Ballistic Aramid Fiber Weave",
      "24K Gold-Plated Precision Connectors",
      "240W Ultra-Fast Charging / 40Gbps Data Transfer",
      "Includes Hand-Stitched Leather Cable Organizer",
      "Tested for 50,000+ Bend Cycles"
    ],
    materials: ["Ballistic Aramid", "24K Gold Plating", "Cast Zinc Alloy", "Full-grain Leather"],
    image: "/products/product-06.webp",
    badge: "Signature Craft",
    rating: 4.93,
    reviewCount: 142,
    inStock: true,
    featured: false,
  },
  {
    id: "glace-clear-case",
    name: "Glacé Clear MagSafe Case",
    category: "accessories",
    subTitle: "Anti-Yellowing Sapphire Polycarbonate",
    compatibility: "iPhone 16 Pro Max / 16 Pro / 15 Series",
    price: 4099,
    currency: "₹",
    description: "Optical-grade anti-yellowing resin paired with metallic accents and flush MagSafe ring architecture.",
    story: "Crystal clarity that showcases your device's native finish without sacrificing drop protection.",
    features: [
      "UV-Resistant German Bayer Optical Polycarbonate",
      "Integrated Strong Magnetic Array",
      "Air-Cushioned Shock-Absorbing Corners"
    ],
    materials: ["Bayer Polycarbonate", "Aluminium Buttons", "Neodymium Magnets"],
    image: "/products/product-07.webp",
    rating: 4.86,
    reviewCount: 88,
    inStock: true,
    featured: false,
  },
  {
    id: "aurum-magsafe-charger",
    name: "Aurum MagSafe Wireless Charger",
    category: "accessories",
    subTitle: "Weighted Solid Brass & Leather Charging Pad",
    compatibility: "Qi2 & MagSafe Compatible Devices",
    price: 5999,
    originalPrice: 6999,
    currency: "₹",
    description: "Solid CNC-milled brass base with premium Italian saddle leather charging surface and thermal dissipation.",
    story: "A desktop sculpture that charges your devices with effortless 15W Qi2 wireless efficiency.",
    features: [
      "Solid CNC Milled Brass Chassis (480g Non-Slip Weight)",
      "Full-Grain Saddle Leather Contact Surface",
      "Qi2 Certified 15W Fast Wireless Charging",
      "Braided 2-Metre Integrated Cable Included"
    ],
    materials: ["Solid Brass", "Italian Saddle Leather", "Thermal Graphene Pad"],
    image: "/products/product-08.webp",
    badge: "Iconic Design",
    rating: 4.96,
    reviewCount: 110,
    inStock: true,
    featured: true,
  }
];

export const BRAND_PHILOSOPHY = {
  headline: "Where Luxury Meets Intention",
  subheadline: "Crafted for the discerning few.",
  manifesto: [
    "Every NIAMAL creation is governed by a singular discipline: that true luxury is not merely decorative, but intentional in every dimension.",
    "From the cold weight of a machined metal cap to the 18-month maceration of rare oud, our objects are engineered to elevate the daily rituals of the discerning few.",
    "We reject mass production and fleeting trends in pursuit of timeless form, tactile depth, and olfactory permanence."
  ],
  pillars: [
    {
      num: "01",
      title: "Material Sanctity",
      description: "We source only grade-1 Tuscan full-grain leathers, rare perfume absolutes, solid brass, and aerospace alloys."
    },
    {
      num: "02",
      title: "Tactile Weight & Balance",
      description: "Every touchpoint is calibrated for sensory satisfaction — from the magnetic snap of our perfume caps to the drop resistance of our cases."
    },
    {
      num: "03",
      title: "Olfactory Architecture",
      description: "Complex multi-stage extractions macerated in small batches to produce uncompromised longevity and intoxicating depth."
    }
  ]
};

export const REVIEWS = [
  {
    id: "1",
    author: "Isabelle Fontaine",
    role: "Collector & Creative Director",
    quote: "Noir Absolu has a dark, architectural presence unlike anything in contemporary perfumery. The weight of the bottle alone feels like high sculpture.",
    product: "Noir Absolu Eau de Parfum",
    rating: 5
  },
  {
    id: "2",
    author: "Priya Mehrotra",
    role: "Architect & Design Critic",
    quote: "The Obsidian leather case has acquired the most stunning patina over six months. NIAMAL understands tactile refinement better than legacy luxury houses.",
    product: "Obsidian Leather Case",
    rating: 5
  },
  {
    id: "3",
    author: "Camille Jourdain",
    role: "Fragrance Columnist",
    quote: "The transition from smoked oud into Damascene rose is astonishingly seamless. A true masterwork of slow maceration.",
    product: "Noir Absolu Eau de Parfum",
    rating: 5
  }
];
