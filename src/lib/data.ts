export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  tagline: string;
  category: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  overview: string;
  architecture: string[];
  deliverables: string[];
  image: string;
  tags: string[];
  year: string;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  badge: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "stay-strange-mural",
    client: "Cardiff Creative Quarter",
    title: "Stay Strange Flagship Mural",
    tagline: "Large-scale hand-painted brick mural celebrating counter-culture and creative resilience.",
    category: "Murals & Environmental",
    year: "2025",
    metrics: [
      { label: "Mural Scale", value: "12m × 5m", detail: "Exterior weather-resistant masonry acrylic" },
      { label: "Organic Reach", value: "250k+", detail: "Instagram & TikTok tourist impressions" },
      { label: "Execution Time", value: "6 Days", detail: "100% freehand painting solo on scaffolding" }
    ],
    overview: "I was commissioned by the city creative quarter to transform a stark industrial brick facade into a vibrant, high-energy cultural landmark. Painted entirely freehand with high-durability acrylics, the piece has become an iconic photo spot in Cardiff.",
    architecture: [
      "Custom vector scale grid transferred freehand to masonry surface",
      "Multi-layered weather-seal protective clear coating against maritime moisture",
      "Time-lapse cinematography and companion screenprint edition release",
      "Coordinated with city planning council and pedestrian safety compliance"
    ],
    deliverables: [
      "Full Exterior Architectural Mural",
      "Limited Signed Screenprint Run (100 Ed.)",
      "Behind-The-Scenes Production Film",
      "Commercial License for City Tourism Promotion"
    ],
    image: "/images/work-1-mural.png",
    tags: ["Mural", "Hand-Lettering", "Street Art", "Public Works"]
  },
  {
    id: "look-up-hygiene",
    client: "National Hygiene Week",
    title: "LOOK UP — National Campaign",
    tagline: "High-impact visual awareness campaign blending raw kinetic lettering with purposeful messaging.",
    category: "Commercial Illustration",
    year: "2024",
    metrics: [
      { label: "Donations Raised", value: "£45K+", detail: "Corporate hygiene products distributed" },
      { label: "National Reach", value: "1.4M", detail: "Transit posters, universities & bus shelters" },
      { label: "Asset Pack", value: "32 Items", detail: "Print, digital banners, animated billboards" }
    ],
    overview: "I created an eye-catching campaign key visual combining bespoke hand-drawn bubble lettering with daily hygiene item doodles to break the stigma surrounding hygiene poverty and spur donations across UK universities and community centers.",
    architecture: [
      "Hand-drawn ink lettering digitized into scalable CMYK vector lockups",
      "Modular illustration toolkit allowing regional teams to customize flyers",
      "Animated kinetic typography loop for DOOH digital subway screens",
      "Accessibility audit for colorblind legibility on bright canary yellow"
    ],
    deliverables: [
      "National A1 Poster Key Visual",
      "DOOH Subway Screen Motion Graphics",
      "Social Media Campaign Kit",
      "Charity Merchandise T-Shirts"
    ],
    image: "/images/work-3-lookup.png",
    tags: ["Campaign Art", "Typography", "Print", "Charity"]
  },
  {
    id: "nice-laptop-mascot",
    client: "Game On Digital",
    title: "NICE! Laptop Brand Mascot",
    tagline: "Animated mischievous retro game console character built for digital dev-tool branding.",
    category: "Character & Animation",
    year: "2024",
    metrics: [
      { label: "Onboarding Lift", value: "+64%", detail: "User trial-to-setup completion rate" },
      { label: "Sticker Usage", value: "82k+", detail: "Monthly Discord and Slack reactions" },
      { label: "Brand Recall", value: "94%", detail: "Surveyed user sentiment at DevCon 2024" }
    ],
    overview: "Game On needed a brand mascot to give their developer platform human warmth and humor. I designed an expressive retro PC monster with rubber-hose limbs, complete with animated UI state illustrations, error pages, and merchandise stickers.",
    architecture: [
      "Vector character model sheets with 16 distinct emotion turnarounds",
      "Lottie vector animations optimized under 45kb for web app states",
      "Pixel-perfect SVG icon integration for React and Vue component libraries",
      "Merchandise printing guidelines for enamel pins and embroidered caps"
    ],
    deliverables: [
      "Character Mascot Design & Model Sheets",
      "12 Lottie UI Animation Micro-Interactions",
      "Slack / Discord Community Sticker Pack",
      "Developer Swag Pin & Patch Designs"
    ],
    image: "/images/work-4-character.png",
    tags: ["Character Design", "Lottie Motion", "Branding", "Mascot"]
  },
  {
    id: "black-screen-records",
    client: "Black Screen Records",
    title: "Limited Vinyl Box Set Packaging",
    tagline: "Custom illustrated packaging, enamel pins, slipmats, and vinyl collector unboxing sleeves.",
    category: "Packaging & Merchandise",
    year: "2024",
    metrics: [
      { label: "Units Sold", value: "50,000+", detail: "Worldwide collector unboxing deliveries" },
      { label: "Sell-Out Time", value: "< 48 Hours", detail: "Limited numbered edition box set run" },
      { label: "Social Shares", value: "12.4K+", detail: "Instagram unboxing user stories" }
    ],
    overview: "For one of Europe's premier video game vinyl soundtrack distributors, I illustrated custom kraft shipping mailers, inner sleeves, holographic sticker sets, and turntable slipmats packed with hidden gaming Easter eggs.",
    architecture: [
      "Full-bleed dieline engineering for multi-tier corrugated mailer boxes",
      "Spot-gloss UV ink separation on raw kraft cardboard substrate",
      "Die-cut vinyl sticker sheets and soft enamel collectible lapel pins",
      "Turntable felt slipmat direct-to-garment high-contrast silk screening"
    ],
    deliverables: [
      "Collector Mailer Dieline Packaging",
      "Vinyl Inner Sleeve Double-Sided Art",
      "Custom Die-Cut Holographic Sticker Sheet",
      "Limited Edition Turntable Felt Slipmats"
    ],
    image: "/images/work-8-records.png",
    tags: ["Packaging", "Vinyl", "Merch", "Dielines"]
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "murals-environmental",
    number: "01",
    title: "Murals & Environmental Art",
    tagline: "Large-format freehand murals and architectural installations that turn physical spaces into cultural landmarks.",
    description: "I paint large-scale interior and exterior murals for flagship offices, restaurants, creative venues, and public trails. Every brush stroke is done by hand with weather-resistant materials.",
    bullets: [
      "Exterior & interior masonry murals (up to 20m wide)",
      "Ultraviolet and glow-in-the-dark experiential paintwork",
      "Public fiberglass sculpture & 3D trail artwork",
      "Custom freehand typographic environmental lettering"
    ],
    badge: "Large Scale"
  },
  {
    id: "character-systems",
    number: "02",
    title: "Brand Mascots & Character Design",
    tagline: "Playful, rebellious characters that give tech products, apparel, and brands an unmistakable personality.",
    description: "I create memorable character universes and mascots that bridge the gap between street culture and commercial branding, designed to look as good on a billboard as on a tiny app icon.",
    bullets: [
      "Character turnarounds, expressions, and style guides",
      "Lottie & WebGL 2D animated micro-interactions",
      "Enamel pins, plushies, and apparel embroidery files",
      "Full digital sticker packs for Slack, Telegram & Discord"
    ],
    badge: "Character Art"
  },
  {
    id: "packaging-merch",
    number: "03",
    title: "Packaging & Limited Editions",
    tagline: "Tactile, collectible packaging and box sets that customers refuse to throw away.",
    description: "From video game vinyl box sets to custom beverage cans and skateboard decks, I engineer packaging that turns unboxing into an emotional collector moment.",
    bullets: [
      "360° repeating vector patterns for drinkware & bottles",
      "Custom kraft mailer boxes and unboxing collateral",
      "Screenprinted limited-run gig posters and art prints",
      "Direct manufacturer dieline & print prepress setup"
    ],
    badge: "Print & Tangible"
  },
  {
    id: "creative-tech",
    number: "04",
    title: "Creative Engineering & Digital Flagships",
    tagline: "High-consequence digital experiences built with Next.js, Three.js, and bespoke kinetic motion.",
    description: "Unlike illustrators who only hand off static PNGs, I write clean, production-ready frontend code. I build interactive web flagships, WebGL configurators, and kinetic animations myself.",
    bullets: [
      "Next.js 15 App Router with Tailwind CSS & Framer Motion",
      "Interactive SVG & Three.js canvas playgrounds",
      "Zero-debt accessible component architecture",
      "Strict 100/100 Core Web Vitals performance score"
    ],
    badge: "Code & Creative Tech"
  }
];

export const ENGAGEMENT_TIERS = [
  {
    name: "Key Visual & Character Sprint",
    timeline: "2 to 3 Weeks",
    investment: "£12,000 – £20,000",
    focus: "Mascot design, campaign hero artwork, or editorial key visuals",
    includes: [
      "Full Character & Mascot Model Sheets with expressions",
      "Custom hand-drawn headline typography & lettering",
      "Print-ready CMYK vector deliverables + RGB web assets",
      "Lottie animated micro-interactions for digital UI",
      "Full commercial global buyout & copyright assignment"
    ],
    availability: "1 Slot Open for Q4",
    recommended: false
  },
  {
    name: "Flagship Mural & Experiential",
    timeline: "3 to 5 Weeks",
    investment: "£22,000 – £40,000",
    focus: "Physical office, venue, retail storefront, or festival installation",
    includes: [
      "On-site freehand painting by Dharshana",
      "High-durability weather-resistant acrylics & primers",
      "Time-lapse 4K production video & behind-the-scenes content",
      "Companion limited-edition screenprint or merchandise run",
      "PR coordination & local artist media interviews"
    ],
    availability: "Booking Q4 / Q1",
    recommended: true
  },
  {
    name: "Complete Brand Universe & Digital Flagship",
    timeline: "6 to 8 Weeks",
    investment: "£35,000 – £65,000",
    focus: "Full visual identity, character world, packaging, and custom Next.js web build",
    includes: [
      "Complete Brand Identity, Illustration System & Mascots",
      "Custom packaging dielines, mailers, and merchandise specs",
      "Production-ready Next.js 15 interactive web flagship build",
      "Kinetic micro-motion, Lottie stickers, and sound design sync",
      "Exclusive category lock-out & direct WhatsApp access"
    ],
    availability: "Selective: 1 Brand per Quarter",
    recommended: false
  }
];

export const SOCIAL_PROOF = [
  {
    quote: "Dharshana didn't just illustrate our brand; she gave our entire startup an attitude and soul that customers fall in love with. Our onboarding completion skyrocketed by 64% after launching her mascot.",
    author: "Elena Rostova",
    title: "Chief Product Officer",
    company: "Game On Digital",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "Finding an artist who can paint a 12-meter exterior brick mural freehand on scaffolding and then write clean, production-grade Next.js code is virtually impossible. Dharshana is an absolute powerhouse.",
    author: "Marcus Vance",
    title: "Creative Director",
    company: "Cardiff Creative Quarter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "Our vinyl collectors are obsessive about quality. Dharshana designed unboxing packaging that sold out 50,000 units and flooded our feeds with praise. She is the first person we call for every flagship release.",
    author: "Kevin Schmidt",
    title: "Founder & Label Head",
    company: "Black Screen Records",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  }
];

export const STATS = [
  { number: "50K+", label: "Collector Vinyls & Merch Shipped", note: "Distributed worldwide to fans" },
  { number: "100%", label: "Solo Principal Execution", note: "Zero account managers or outsourced juniors" },
  { number: "£140K+", label: "Raised for Partner Charities", note: "Through public art & charity auctions" },
  { number: "14+", label: "International Honors & Press", note: "Featured in exhibitions & cultural archives" }
];
