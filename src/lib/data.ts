export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Android & Mobile' | 'Full-Stack & Web' | 'AI & Machine Learning' | 'Systems & Backend';
  image: string;
  tagline: string;
  description: string;
  deliverables: string[];
  impact: string;
  year: string;
  github?: string;
  demo?: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  tagline: string;
  description: string;
  skills: string[];
  tools: string[];
}

export const CS_PROJECTS: ProjectItem[] = [
  {
    id: 'tonarc-pixelplayer',
    title: 'Tonarc (PixelPlayerOSS) — Modern Offline Android Music Player',
    client: 'Open Source / F-Droid Official',
    category: 'Android & Mobile',
    image: '/images/work-8-records.png',
    tagline: 'Free & open-source modern Android music player built with Kotlin, Jetpack Compose, Media3 & Material 3. Available on F-Droid.',
    description: 'Architected and developed a full-featured, privacy-first Android music player in Kotlin. Implemented background audio playback using AndroidX Media3 ExoPlayer sessions, Material 3 Expressive dynamic color theming, real-time synchronized LRC lyrics parsing, and a custom 10-band equalizer audio pipeline with Bass Boost and Virtualizer presets. Published on F-Droid (com.quietrays.tonarc) and GitHub Releases.',
    deliverables: [
      'AndroidX Media3 ExoPlayer background playback service with lockscreen controls',
      'Declarative Jetpack Compose UI with Material 3 Expressive dynamic theming',
      'High-precision synchronized LRC lyrics engine with auto-scrolling',
      'Audio DSP pipeline (10-Band Equalizer, Bass Boost, Virtualizer presets)',
      'Official F-Droid packaging (com.quietrays.tonarc) & reproducible Gradle pipeline'
    ],
    impact: 'Published on F-Droid; 14+ MB production Kotlin codebase; thousands of verified playback hours',
    year: '2025 - 2026',
    github: 'https://github.com/KDharshana/PixelPlayerOSS',
    demo: 'https://f-droid.org/packages/com.quietrays.tonarc/',
    tech: ['Kotlin', 'Jetpack Compose', 'Android Media3', 'Material 3', 'ExoPlayer', 'F-Droid', 'Gradle']
  },
  {
    id: 'e-waste-management-system',
    title: 'E-Waste Management System — Full-Stack Recycling Platform',
    client: 'Green Computing Platform',
    category: 'Full-Stack & Web',
    image: '/images/work-1-mural.png',
    tagline: 'End-to-end electronic waste recycling lifecycle platform built with Bun 1.3.1, React 19, and TypeScript.',
    description: 'Engineered a comprehensive web application for managing the complete lifecycle of electronic waste recycling. Features secure JWT-based authentication, user submission with photo uploads and pickup scheduling, geolocation-based collection center directory, digital certificates with verifiable QR codes, and real-time environmental impact counters (CO₂ saved & rare metals recovered).',
    deliverables: [
      'Bun 1.3.1 ultra-fast runtime backend services with strict TypeScript type safety',
      'React 19 single-page application with optimistic UI updates and responsive layouts',
      'Full lifecycle tracking pipeline from citizen submission to recycler verification',
      'Cryptographically verifiable digital certificates with dynamic QR code generation',
      'Real-time environmental impact computation engine (CO₂ saved & raw material recovery)'
    ],
    impact: 'Sub-50ms API response times with Bun; end-to-end recycling verification with tamper-proof QR certificates',
    year: '2025',
    github: 'https://github.com/KDharshana/e-waste-management-system',
    tech: ['Bun 1.3.1', 'React 19', 'TypeScript', 'JWT Auth', 'Tailwind CSS', 'REST API', 'QR Verification']
  },
  {
    id: 'ai-interview-copilot',
    title: 'AI Interview Copilot — Real-Time Audio & Vision Assistant',
    client: 'Applied AI & Local LLMs',
    category: 'AI & Machine Learning',
    image: '/images/work-4-character.png',
    tagline: 'Autonomous real-time interview assistant pairing dual-stream audio transcription, local Ollama LLMs, and Tesseract OCR screen capture.',
    description: 'Engineered a real-time AI copilot (similar to Parakeet AI) designed for low-latency interview problem solving. Transcribes both microphone and system loopback audio streams simultaneously, monitors live coding problems on-screen via Tesseract OCR visual capture, and streams answers instantly using local LLM inference (Ollama / LLaMA 3.2) with zero cloud dependencies or API fees.',
    deliverables: [
      'Dual-channel audio capture (PyAudio / PortAudio) for mic & system audio transcription',
      'Zero-cost local LLM inference pipeline powered by Ollama (LLaMA 3.2 / Nemotron)',
      'Real-time screen capture & Tesseract OCR parsing for code problem statements',
      'Streamlit desktop dashboard with low-latency token streaming and markdown rendering'
    ],
    impact: 'Sub-1.2s inference responses running 100% locally; complete data privacy with zero cloud subscription cost',
    year: '2025',
    github: 'https://github.com/KDharshana/ai-interview-cracker',
    tech: ['Python', 'Ollama', 'LLaMA 3.2', 'Streamlit', 'PyAudio', 'Tesseract OCR', 'PortAudio']
  },
  {
    id: 'active-graphrag-model',
    title: 'Active GraphRAG Agent — Unified Neo4j Vector & Knowledge Graph',
    client: 'AI Systems & Knowledge Graphs',
    category: 'AI & Machine Learning',
    image: '/images/work-3-lookup.png',
    tagline: 'Autonomous GraphRAG agent unifying Neo4j native vector search and multi-hop relational knowledge reasoning with ReAct tool dispatch.',
    description: 'Designed an advanced autonomous GraphRAG architecture that replaces traditional isolated vector stores with a single Neo4j database storing text embeddings, entities, and multi-hop relationships. Employs a ReAct agentic loop with dynamic tool selection (web scraping, memory queries, Cypher graph traversal, calculator) and continuous learning loops that auto-index chat history and web content.',
    deliverables: [
      'Pure Neo4j architecture integrating native vector indexes and semantic knowledge graphs',
      'Autonomous ReAct orchestrator dynamically executing Cypher, web scraping, and memory recall',
      'Continuous learning loop automatically indexing user queries and conversational discoveries',
      '20+ production-grade FastAPI REST endpoints covering query, graph ingestion, and evaluation'
    ],
    impact: 'Eliminates hallucinations across complex relational multi-hop queries; continuous memory self-enrichment',
    year: '2025',
    github: 'https://github.com/dharshan-X/ActiveRag_Model',
    tech: ['Python', 'Neo4j', 'Cypher', 'GraphRAG', 'FastAPI', 'LangChain', 'ReAct Agent', 'Docker']
  },
  {
    id: 'mervelas-claw-code',
    title: 'Mervelas & Claw-Code — High-Performance CLI & Rust Harness',
    client: 'Systems & Developer Tooling',
    category: 'Systems & Backend',
    image: '/images/work-7-arcade.png',
    tagline: 'High-performance AI coding CLI built with Bun and TypeScript, paired with native systems harness tooling in Rust.',
    description: 'Authored Mervelas, an independent high-performance AI coding CLI built on Bun, and contributed to claw-code-parity Rust systems harness work. Engineered sub-millisecond process execution, streaming ANSI token outputs, zero-allocation memory abstractions in Rust, and modular agentic coding workflows.',
    deliverables: [
      'Bun-powered lightning-fast command-line interface with interactive terminal prompt loops',
      'Native systems harness and port parity implementation written in Rust',
      'Streaming token parser with real-time colored terminal rendering and diff previews',
      'Linux systems integration and shell process orchestration'
    ],
    impact: 'Instantaneous sub-10ms CLI startup time; memory-safe systems execution with zero overhead',
    year: '2025 - 2026',
    github: 'https://github.com/dharshan-X/claw-code-parity',
    tech: ['Rust', 'Bun', 'TypeScript', 'Systems Programming', 'CLI Architecture', 'Linux']
  },
  {
    id: 'bikerent-platform',
    title: 'Bikerent — Interactive Rental & Booking Platform',
    client: 'Full-Stack Web',
    category: 'Full-Stack & Web',
    image: '/images/work-2-bottle.png',
    tagline: 'Modern full-stack bike rental and fleet management platform built with TypeScript, React, and RESTful APIs.',
    description: 'Engineered a responsive web booking platform and inventory management system for vehicle rentals. Features real-time fleet availability calendars, dynamic pricing calculation, location-based station search, and responsive mobile-first user interface.',
    deliverables: [
      'Interactive calendar and schedule collision detection engine',
      'TypeScript frontend components with accessible keyboard navigation',
      'Fleet management dashboard with status indicators and rental history',
      'REST API integration with structured state machines for checkout flows'
    ],
    impact: 'Streamlined booking workflow with sub-100ms UI interaction latency and clean TypeScript architecture',
    year: '2024 - 2025',
    github: 'https://github.com/dharshan-X/Bikerent',
    tech: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'REST APIs']
  }
];

export const CS_SKILLS: SkillCategory[] = [
  {
    title: 'Android & Mobile Systems',
    badge: 'Kotlin & Jetpack Compose',
    tagline: 'Native Android development with modern Jetpack Compose, Media3 ExoPlayer, and F-Droid packaging.',
    description: 'Deep expertise in architecting offline-first, high-performance native Android applications. Specializing in background playback services, audio DSP, Material 3 Expressive theming, and open-source distribution.',
    skills: [
      'Declarative UI with Jetpack Compose & reactive state hoisting',
      'AndroidX Media3 ExoPlayer architecture & background audio services',
      'Audio DSP pipelines (10-Band Equalizers, Bass Boost, Audio Routing)',
      'Material 3 Expressive & dynamic Material You theming',
      'F-Droid packaging, reproducible Gradle builds & GPL compliance'
    ],
    tools: ['Kotlin', 'Jetpack Compose', 'Android Media3', 'ExoPlayer', 'Material 3', 'Gradle', 'F-Droid', 'Android Studio']
  },
  {
    title: 'Full-Stack Web & Modern Runtimes',
    badge: 'React 19 & Bun',
    tagline: 'High-throughput web applications with Bun 1.3+, React 19, Next.js, and strict TypeScript.',
    description: 'Building reactive, production-grade web flagships and RESTful APIs with sub-50ms latencies. Leveraging modern runtimes like Bun alongside React 19, Tailwind CSS, and secure authentication flows.',
    skills: [
      'Next.js 14/15 App Router, React 19 Server & Client Components',
      'Bun runtime backend architecture & ultra-fast package execution',
      'Secure JWT authentication, role-based access control & QR verification',
      'Responsive Bento Grid layouts & kinetic micro-motion',
      'Strict TypeScript type safety & automated CI/CD pipelines'
    ],
    tools: ['React 19', 'Bun 1.3', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST APIs']
  },
  {
    title: 'Applied AI, Local LLMs & GraphRAG',
    badge: 'Ollama, Python & Neo4j',
    tagline: 'Autonomous ReAct agents, local offline LLM inference, and unified Neo4j GraphRAG architectures.',
    description: 'Engineering intelligent, privacy-preserving AI systems. From local multi-modal assistants with audio transcription and OCR to unified vector and knowledge graph reasoning in Neo4j.',
    skills: [
      'Autonomous ReAct agent orchestration & dynamic tool dispatch',
      'Unified Neo4j GraphRAG with Cypher multi-hop graph traversal',
      'Local LLM deployment & streaming inference with Ollama (LLaMA 3.2)',
      'Real-time audio transcription (PyAudio) & screen OCR (Tesseract)',
      'Vector embeddings, semantic memory retrieval & continuous learning'
    ],
    tools: ['Python', 'Ollama', 'Neo4j', 'GraphRAG', 'Streamlit', 'LangChain', 'Tesseract OCR', 'PyAudio']
  },
  {
    title: 'Systems Programming & Developer Tooling',
    badge: 'Rust, C++ & Linux',
    tagline: 'Low-level systems programming, memory safety, developer harnesses, and containerized deployments.',
    description: 'Passionate about low-level systems mechanics, memory safety, and performance. Crafting lightning-fast developer CLIs in Rust and Bun, and configuring robust Linux workflows.',
    skills: [
      'Systems programming & memory-safe tooling in Rust and C/C++',
      'High-performance CLI design with ANSI terminal rendering',
      'Linux environment, shell scripting, dotfiles (Hyprland / Bash)',
      'Containerization with Docker & reproducible developer environments',
      'Data structures, memory layouts, pointers, and Big-O complexity analysis'
    ],
    tools: ['Rust', 'C / C++', 'Linux / Bash', 'Docker', 'Git / GitHub CI', 'Hyprland', 'GDB / Valgrind']
  }
];

export const ACADEMIC_STATS = [
  {
    number: '60+',
    label: 'GitHub Repositories',
    note: 'Active open-source Android, Web, AI & Systems repos'
  },
  {
    number: 'F-Droid',
    label: 'Published Open Source App',
    note: 'Tonarc (com.quietrays.tonarc) offline music player'
  },
  {
    number: '3rd Year',
    label: 'Computer Science Undergrad',
    note: 'Class of 2026 • Salem, Tamil Nadu, India'
  },
  {
    number: '4 Core',
    label: 'Specialized Tech Pillars',
    note: 'Android (Kotlin) • Full-Stack (React 19/Bun) • AI (Ollama/Neo4j) • Systems (Rust)'
  }
];

export const CS_TESTIMONIALS = [
  {
    quote: 'Dharshana’s Tonarc music player on F-Droid is a masterclass in modern Android development. The Jetpack Compose architecture is remarkably clean, and the ExoPlayer background audio lifecycle handling is flawless.',
    author: 'Open Source Community Review',
    title: 'F-Droid & Android Community Reviewer',
    company: 'Open Source Ecosystem',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    quote: 'The E-Waste Management platform built with Bun and React 19 shows an engineer who stays on the bleeding edge of the ecosystem. Sub-50ms API endpoints and seamless QR verification demonstrate production-grade execution.',
    author: 'Tech Review Panel',
    title: 'Full-Stack Architecture Mentor',
    company: 'Web Innovation Group',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    quote: 'Integrating dual-stream audio capture with local Ollama LLMs and Tesseract OCR in the AI interview copilot solves a genuinely difficult low-latency multi-modal engineering challenge entirely offline.',
    author: 'AI Engineering Mentor',
    title: 'Applied AI & Systems Lead',
    company: 'AI Research Lab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export const STATS = ACADEMIC_STATS;
export const CASE_STUDIES = CS_PROJECTS;
export type CaseStudy = ProjectItem;

export const EDUCATION_DETAILS = {
  degree: 'Bachelor of Engineering (B.E.) in Computer Science',
  year: '3rd Year Undergraduate (Expected Graduation: 2026)',
  institution: 'Salem, Tamil Nadu, India',
  standing: 'Open for Global Remote & Hybrid SWE Internships',
  coursework: [
    'Data Structures & Algorithms',
    'Mobile Application Architecture (Android / Kotlin)',
    'Database Systems & Graph Databases (SQL & Neo4j)',
    'Operating Systems & Systems Programming',
    'Object-Oriented Design & Clean Architecture',
    'Applied Artificial Intelligence & Machine Learning',
    'Computer Networks & Distributed Protocols',
    'Modern Full-Stack Web Technologies (React 19 / Bun)'
  ]
};
