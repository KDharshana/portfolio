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
    id: "aura-intelligence",
    client: "Aura Intelligence",
    title: "Autonomous Multi-Agent Workflow Engine",
    tagline: "Enterprise AI orchestration processing 10M+ daily events with real-time autonomous routing.",
    category: "AI Systems & Infrastructure",
    year: "2025",
    metrics: [
      { label: "Analyst Velocity", value: "+340%", detail: "From 4.2h to 48m per investigation cycle" },
      { label: "Daily Event Scale", value: "10.4M+", detail: "Autonomous event routing with zero human overhead" },
      { label: "Model Accuracy", value: "99.4%", detail: "Microsoft Medprompt CoT + multi-agent verification" }
    ],
    overview: "Aura required a production-grade multi-agent platform capable of synthesising unstructured enterprise telemetry, triaging multi-variable security anomalies, and executing stateful remediation actions within strict latency SLAs.",
    architecture: [
      "Dynamic DAG workflow scheduler built on Rust & WebAssembly micro-kernels",
      "Streaming SSE telemetry pipeline with client-side reactive Canvas visualizer",
      "Multi-agent consensus mechanism utilizing specialized evaluator-critic loops",
      "SOC-2 Type II audit logging and cryptographic audit trails"
    ],
    deliverables: [
      "Autonomous Agent Runtime Engine",
      "Executive Ops Command Deck",
      "Zero-latency Streaming WebSocket Gateway",
      "Custom Design System (Dark Terminal UI)"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    tags: ["Autonomous Agents", "LLM Pipelines", "Real-Time Telemetry", "Next.js 15"]
  },
  {
    id: "hyperion-cloud",
    client: "Hyperion Cloud",
    title: "Institutional Financial Terminal & Design System",
    tagline: "Ultra-low latency institutional trading interface and design system handling $1.2B in volume.",
    category: "Venture Digital Product",
    year: "2024",
    metrics: [
      { label: "Capital Raised", value: "$24M", detail: "Series B led by top-tier Silicon Valley venture fund" },
      { label: "Render Latency", value: "32ms", detail: "P99 interaction latency under massive WebSocket load" },
      { label: "Conversion Lift", value: "+68%", detail: "Qualified institutional trial-to-contract closure rate" }
    ],
    overview: "Hyperion's legacy desktop terminal suffered from fragmentation and severe performance bottlenecks. We redesigned their core web suite from first principles, shipping a 60fps WebGL order-book and an enterprise-grade component system.",
    architecture: [
      "Hardware-accelerated WebGL canvas charting library for tick-by-tick orderbooks",
      "Zero-runtime CSS token architecture with sub-millisecond theme transitions",
      "Predictive prefetching and optimistic state mutation layer",
      "Modular multi-window workspace dock with customizable layouts"
    ],
    deliverables: [
      "Core Trading & Portfolio Terminal",
      "Tokenized 'Hyperion DS' Component Library",
      "WebSocket Market Data Aggregator",
      "Enterprise Onboarding & KYC Flow"
    ],
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=85",
    tags: ["High-Concurrency Web", "WebGL Terminal", "Design System", "TypeScript"]
  },
  {
    id: "monolith-flagship",
    client: "Monolith Atelier",
    title: "Luxury Digital Commerce & Spatial Configurator",
    tagline: "Kinetic e-commerce flagship featuring real-time 3D spatial customization and editorial storytelling.",
    category: "Luxury Flagship & 3D",
    year: "2024",
    metrics: [
      { label: "Checkout Conversion", value: "+58%", detail: "Increase across luxury bespoke timepiece configurator" },
      { label: "Average Order Value", value: "$18.4K", detail: "Direct-to-consumer high-ticket client acquisition" },
      { label: "Global Press", value: "Awwwards SOTD", detail: "Recognized as global benchmark for luxury digital flagships" }
    ],
    overview: "Monolith required a digital flagship worthy of their six-figure bespoke horology creations. We blended high-fashion typography, seamless Three.js raytraced configurators, and an intimate concierge checkout experience.",
    architecture: [
      "Custom Three.js PBR shader pipeline with dynamic caustics and physical reflections",
      "Fluid scroll-driven cinematography synchronised via GSAP & Lenis inertia",
      "Headless Shopify Storefront API integration with edge-cached GraphQL",
      "Private VIP concierge portal with encrypted asynchronous video consultations"
    ],
    deliverables: [
      "Real-Time 3D Material Configurator",
      "Bespoke Editorial E-Commerce Flagship",
      "Private Concierge Scheduling Engine",
      "Brand Narrative & Motion Guidelines"
    ],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    tags: ["Three.js / WebGL", "Headless Commerce", "Luxury Experience", "Micro-Motion"]
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "ai-systems",
    number: "01",
    title: "Autonomous AI Systems & Agents",
    tagline: "Beyond conversational wrappers: deterministic, multi-agent systems designed for mission-critical enterprise autonomy.",
    description: "We architect multi-agent systems that ingest multi-modal data, execute multi-step reasoning loops, and integrate directly with your core database and APIs with verified precision.",
    bullets: [
      "Microsoft Medprompt & specialized Chain-of-Thought (CoT) prompting",
      "Multi-agent consensus, evaluator-critic loops, and state machines",
      "Deterministic tool-calling, API integration, and vector retrieval (RAG)",
      "Zero-latency streaming UI with human-in-the-loop oversight"
    ],
    badge: "Core Specialization"
  },
  {
    id: "digital-products",
    number: "02",
    title: "Venture-Scale Web Platforms",
    tagline: "High-concurrency web applications built for founders preparing for Series A through Growth scale.",
    description: "We don't build standard marketing templates. We construct heavy-duty, responsive software platforms with sub-50ms interaction latency, robust state synchronization, and scalable architecture.",
    bullets: [
      "Next.js 15 App Router with hybrid SSR/Edge hydration",
      "Real-time WebSockets, SSE streams, and optimistic UI mutations",
      "Complex interactive dashboards, canvas editors, and workflow tools",
      "Strict 100/100 Core Web Vitals performance benchmarks"
    ],
    badge: "Engineering"
  },
  {
    id: "design-systems",
    number: "03",
    title: "Bespoke Design Systems & Brand Flagships",
    tagline: "World-class visual distinction that commands premium enterprise pricing.",
    description: "First impressions dictate your enterprise pricing power. We craft bespoke visual identities, component systems, and kinetic interactions that make your company look like a market leader from day zero.",
    bullets: [
      "Obsidian, editorial, and tactile dark-luxe aesthetic direction",
      "Production-ready design tokens in Figma & Tailwind CSS",
      "Physics-based micro-interactions with Framer Motion & GSAP",
      "Accessible, modular React component libraries (zero tech debt)"
    ],
    badge: "Craft & Aesthetic"
  },
  {
    id: "rapid-prototyping",
    number: "04",
    title: "0-to-1 Venture Prototyping",
    tagline: "From concept to investor-ready, high-fidelity working prototype in under 21 days.",
    description: "When fundraising or closing anchor enterprise customers, pitch decks are obsolete. We deliver fully interactive, beautifully engineered working products that secure term sheets.",
    bullets: [
      "3-week intensive sprint from napkin sketch to live demo",
      "Realistic synthetic datasets and polished user journeys",
      "Executive presentation and founder demo coaching",
      "Seamless code handover to your internal engineering team"
    ],
    badge: "Venture Velocity"
  }
];

export const ENGAGEMENT_TIERS = [
  {
    name: "0-to-1 Venture Sprint",
    timeline: "3 to 5 Weeks",
    investment: "$35,000 – $50,000",
    focus: "New product launch or venture fundraise demo",
    includes: [
      "Full Product Architecture & Tech Stack selection",
      "Complete UI/UX & Bespoke Design System",
      "Working Next.js / AI production MVP",
      "Direct Senior Principal Engineer & Designer access",
      "Deployment, CI/CD pipeline, and full IP handover"
    ],
    availability: "1 Slot Open for Q4",
    recommended: false
  },
  {
    name: "Flagship Product & AI Build",
    timeline: "8 to 12 Weeks",
    investment: "$65,000 – $110,000",
    focus: "Complete platform build, multi-agent AI system, or total legacy overhaul",
    includes: [
      "Deep Domain & Architectural Systems Modeling",
      "Enterprise Multi-Agent AI Runtime integration",
      "Full Design System with comprehensive component tokenization",
      "P99 latency optimization & WebGL / kinetic motion",
      "Security audit readiness, SOC-2 alignment, and test suite",
      "30 days post-launch hypercare & engineer training"
    ],
    availability: "Limited: 2 Partnerships per Quarter",
    recommended: true
  },
  {
    name: "Executive Technical Advisory Retainer",
    timeline: "Quarterly (6-month commitment)",
    investment: "$25,000 / month",
    focus: "Continuous high-leverage product direction and senior execution",
    includes: [
      "Direct executive Slack & weekly syncs with Studio Principals",
      "Continuous feature engineering and architecture reviews",
      "AI model evaluation, prompt optimization, and guardrails",
      "Priority bandwidth with guaranteed 24h turnaround SLAs"
    ],
    availability: "Currently 1 Seat Reserved",
    recommended: false
  }
];

export const SOCIAL_PROOF = [
  {
    quote: "Aether didn't just build our software; they redefined our entire market perception. Their obsession with speed and aesthetic excellence helped us close our $24M Series B three months ahead of schedule.",
    author: "Elena Rostova",
    title: "Chief Product Officer",
    company: "Hyperion Cloud",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "Most agencies give you junior contractors hiding behind account managers. With Aether, you get senior engineering artists who understand vector databases as deeply as typography and micro-interactions.",
    author: "Marcus Vance",
    title: "Co-Founder & CEO",
    company: "Aura Intelligence",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "The luxury market is ruthless: if your digital flagship doesn't feel like a physical masterpiece, high-net-worth clients bounce. Aether crafted something that won Site of the Day and increased our conversions by 58%.",
    author: "Claire De La Tour",
    title: "Creative Director",
    company: "Monolith Atelier",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  }
];

export const STATS = [
  { number: "$140M+", label: "Client Venture Capital Raised", note: "Across our portfolio partners" },
  { number: "99.8%", label: "Average Core Web Vitals Score", note: "Sub-50ms interaction latency" },
  { number: "100%", label: "Senior Staff Execution", note: "Zero outsourced or junior devs" },
  { number: "14", label: "Industry Awards & Honors", note: "Awwwards, FWA & CSSDA recognized" }
];
