export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Systems & Backend' | 'Full-Stack & Web' | 'AI & Machine Learning' | 'Interactive';
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
    id: 'raft-kv-store',
    title: 'RaftKV — Distributed Fault-Tolerant Key-Value Store',
    client: 'Systems Lab / Open Source',
    category: 'Systems & Backend',
    image: '/images/work-1-mural.png',
    tagline: 'Distributed, consensus-driven key-value database in Go with automated leader election and log compaction.',
    description: 'Engineered a distributed key-value storage engine implementing the Raft consensus algorithm from scratch in Go. Handles concurrent network partitions, leader crashes, and log replication across multi-node clusters with zero data loss.',
    deliverables: [
      'Raft Consensus Engine (Leader Election, Heartbeats, Log Compaction)',
      'High-throughput gRPC communication layer with Protocol Buffers',
      'In-memory concurrent LRU cache with WAL persistence',
      'Automated Jepsen-style network partition fault injection suite'
    ],
    impact: 'Sub-4ms p99 read latency; 100% data consistency verified under simulated network splits',
    year: '2025',
    tech: ['Go', 'Raft Consensus', 'gRPC', 'Protobuf', 'Docker', 'Prometheus']
  },
  {
    id: 'cognicode-ai-assistant',
    title: 'CogniCode — Autonomous Multi-Agent AI Code Companion',
    client: 'AI & Systems Research',
    category: 'AI & Machine Learning',
    image: '/images/work-4-character.png',
    tagline: 'Multi-agent developer tool that performs AST analysis, RAG code retrieval, and autonomous test suite generation.',
    description: 'Designed an autonomous multi-agent pipeline pairing an Architect LLM, Coder LLM, and Test-Runner LLM. Parses codebase ASTs, builds semantic vector indexes with ChromaDB, and executes verified test suites in isolated sandboxes.',
    deliverables: [
      'Multi-Agent Orchestration with LangChain & LangGraph',
      'Semantic Codebase Retrieval Engine with vector embeddings',
      'Sandboxed Docker Python/TypeScript execution environment',
      'Interactive Next.js terminal dashboard with kinetic diff views'
    ],
    impact: 'Automated 84% of regression test scaffolding for junior CS student repos; won Best AI Hack',
    year: '2025',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Next.js', 'Docker']
  },
  {
    id: 'syncflow-canvas',
    title: 'SyncFlow — Real-Time Collaborative Canvas & CRDT Workspace',
    client: 'Human-Computer Interaction Lab',
    category: 'Full-Stack & Web',
    image: '/images/work-7-arcade.png',
    tagline: 'Real-time collaborative digital workspace powered by Conflict-Free Replicated Data Types (CRDTs).',
    description: 'Developed an infinite collaborative canvas where multiple engineers and designers sketch, diagram, and build together in real time. Implemented Yjs state vectors over WebSockets with offline sync reconciliation.',
    deliverables: [
      'CRDT-based conflict-free document synchronization engine',
      'HTML5 Canvas 60 FPS drawing engine with kinetic vector smoothing',
      'Ephemeral live presence cursors with sub-15ms broadcast latency',
      'Distributed Redis Pub/Sub room clustering'
    ],
    impact: 'Supports 150+ concurrent active peers per board with zero state drift or locking overhead',
    year: '2024',
    tech: ['TypeScript', 'Next.js 14', 'Yjs CRDTs', 'WebSockets', 'Tailwind CSS', 'Redis']
  },
  {
    id: 'algokinetic-visualizer',
    title: 'AlgoKinetic — Kinetic Algorithm & Graph Visualizer',
    client: 'CS Education Initiative',
    category: 'Interactive',
    image: '/images/work-2-bottle.png',
    tagline: 'Interactive, physics-based visualizer for graph search, pathfinding heuristics, and sorting algorithms.',
    description: 'Created an educational interactive sandbox rendering complex algorithms step-by-step. Offloaded heavy graph computation to Web Workers to ensure a buttery 60 FPS animation loop with full timeline scrubber controls.',
    deliverables: [
      'Interactive Pathfinding (A*, Dijkstra, Bidirectional BFS, Greedy Best-First)',
      'Sorting & Tree Visualizers (QuickSort, MergeSort, AVL Trees, Red-Black Trees)',
      'Dedicated Web Worker thread execution for instant state calculation',
      'Step-by-step call-stack and memory allocation inspector'
    ],
    impact: 'Adopted as supplementary teaching aid for 120+ students in undergraduate Data Structures',
    year: '2024',
    tech: ['React', 'TypeScript', 'HTML5 Canvas', 'Web Workers', 'Framer Motion']
  },
  {
    id: 'cardiff-pulse-telemetry',
    title: 'CardiffPulse — Event-Driven Transit Telemetry Stream',
    client: 'Urban Data & Mobility Project',
    category: 'Systems & Backend',
    image: '/images/work-3-lookup.png',
    tagline: 'High-throughput Kafka stream processor ingesting and predicting city-wide live transit movements.',
    description: 'Built an event-driven data pipeline that streams live GTFS transit vehicle coordinates across Wales. Processes 50,000 telemetry pings per minute with geospatial indexing in TimescaleDB and automated delay forecasting.',
    deliverables: [
      'Distributed Apache Kafka ingestion pipelines',
      'TimescaleDB time-series and PostGIS geospatial indexing',
      'Arrival time prediction model using gradient-boosted trees',
      'Real-time deck.gl animated 3D map frontend'
    ],
    impact: 'Processed 15M+ real-time geolocation points; predicted bus delays with 89% accuracy',
    year: '2024',
    tech: ['Python', 'Apache Kafka', 'FastAPI', 'TimescaleDB', 'PostGIS', 'Docker']
  },
  {
    id: 'dog-trail-pwa',
    title: 'A Dog’s Trail Companion — Geofenced PWA & Charity Platform',
    client: 'Dogs Trust UK & Peanuts Hack',
    category: 'Full-Stack & Web',
    image: '/images/work-6-snoopy.png',
    tagline: 'Progressive Web App with GPS geofencing and instant checkpoint rewards for 15,000+ urban hikers.',
    description: 'Engineered an interactive mobile PWA for Cardiff’s premier public art trail. Users explore the city, unlock 3D Snoopy sculpture check-ins via GPS proximity, and participate in a live charity auction leaderboard.',
    deliverables: [
      'High-precision GPS geofencing & offline caching service worker',
      'Interactive vector map with real-time sculpture status',
      'Secure donation checkout integration with Stripe',
      'Charity auction bidding engine with real-time Supabase subscriptions'
    ],
    impact: 'Helped engage 15,000+ trail participants and raised £12,500 for animal rescue shelters',
    year: '2023',
    tech: ['TypeScript', 'Next.js', 'PWA Service Workers', 'Mapbox GL', 'Supabase', 'Stripe']
  },
  {
    id: 'vinyl-vault-platform',
    title: 'VinylVault — High-Concurrency Drop & Collector Platform',
    client: 'SoundLab & Open Commerce',
    category: 'Full-Stack & Web',
    image: '/images/work-8-records.png',
    tagline: 'E-commerce platform architected for flash merchandise drops with atomic inventory locks.',
    description: 'Architected a full-stack platform built to withstand flash merchandise releases where thousands of collectors check out simultaneously. Utilizes Redis distributed locks to eliminate overselling.',
    deliverables: [
      'Redis distributed locking for atomic stock reservation',
      'PostgreSQL database optimized with connection pooling and indexing',
      'Webhook listener with idempotent payment processing',
      'Accessible, high-contrast Bento Grid user interface'
    ],
    impact: 'Successfully handled 50,000+ simultaneous checkout requests during flash vinyl release test',
    year: '2024',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Stripe API']
  },
  {
    id: 'generative-shader-engine',
    title: 'CymruWebGL — Procedural Shaders & Kinetic Physics Sandbox',
    client: 'Creative Computing Lab',
    category: 'Interactive',
    image: '/images/work-5-cymru.png',
    tagline: 'Hardware-accelerated generative graphics engine simulating fluid brush-ink and skate-punk lettering.',
    description: 'An exploration of creative computing fusing mathematics, GLSL fragment shaders, and WebGL physics. Renders fluid particle dynamics and procedural typographic ink marks at a locked 60 FPS in browser.',
    deliverables: [
      'Custom GLSL vertex and fragment shaders for fluid dispersion',
      'Verlet integration particle physics engine running on GPU',
      'SVG vector path tracing and high-resolution export pipeline',
      'Fully responsive canvas with touch and mouse gravity fields'
    ],
    impact: 'Featured on Creative Coding Showcase; 60 FPS performance verified across mobile devices',
    year: '2024',
    tech: ['Three.js', 'WebGL', 'GLSL Shaders', 'TypeScript', 'Tailwind CSS']
  }
];

export const CS_SKILLS: SkillCategory[] = [
  {
    title: 'Languages & Algorithms',
    badge: 'Core Computer Science',
    tagline: 'Rigorous algorithmic foundation, strong object-oriented and functional programming paradigms.',
    description: 'Deep understanding of data structures, complexity analysis, memory management, and concurrent programming across multiple languages.',
    skills: [
      'Data Structures & Algorithms (Trees, Graphs, Dynamic Programming)',
      'Memory Management, Pointers & System Calls in C/C++',
      'Concurrent & Asynchronous Programming (Go goroutines, Python asyncio)',
      'Modern TypeScript / ESNext with strict type safety',
      'Object-Oriented Design & Clean Architecture Patterns'
    ],
    tools: ['Python', 'TypeScript', 'Go', 'C / C++', 'Java', 'SQL', 'Rust (Basics)']
  },
  {
    title: 'Systems & Cloud Infrastructure',
    badge: 'Backend & Distributed',
    tagline: 'Scalable backend architectures, fault-tolerant consensus, and containerized deployments.',
    description: 'Building robust backend microservices, streaming event pipelines, relational database schemas, and distributed caches capable of high throughput.',
    skills: [
      'Distributed Systems & Consensus Protocols (Raft, Paxos)',
      'Relational Schema Design & Query Optimization (PostgreSQL)',
      'In-Memory Caching & Distributed Locks (Redis)',
      'Event-Driven Streaming & Telemetry (Apache Kafka, WebSockets)',
      'Containerization & Microservices Orchestration (Docker, Docker Compose)'
    ],
    tools: ['FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Apache Kafka', 'AWS (EC2, S3)']
  },
  {
    title: 'Full-Stack & Creative Engineering',
    badge: 'Frontend & HCI',
    tagline: 'Production-ready web applications with kinetic motion, high accessibility, and 100/100 performance.',
    description: 'Bridging technical rigor with exceptional user interface design. Building reactive web applications with Next.js, Framer Motion, and Tailwind CSS.',
    skills: [
      'Next.js 14/15 App Router, Server Components & Suspense',
      'Fluid motion systems with Framer Motion & spring physics',
      'Real-Time Collaboration with WebSockets & Yjs CRDTs',
      'Hardware-accelerated 2D Canvas & 3D WebGL (Three.js)',
      'Strict 100/100 Core Web Vitals performance benchmarks'
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / Canvas', 'PWA']
  },
  {
    title: 'AI Engineering & Developer Tooling',
    badge: 'Applied AI & Tools',
    tagline: 'Practical machine learning workflows, RAG pipelines, and automated developer productivity tooling.',
    description: 'Leveraging LLMs and machine learning models for real software engineering problems, from code search to automated testing pipelines.',
    skills: [
      'Retrieval-Augmented Generation (RAG) with vector databases',
      'Multi-Agent System Orchestration (LangChain, LangGraph)',
      'AST (Abstract Syntax Tree) code analysis & automated refactoring',
      'Git / GitHub Actions CI/CD workflows and unit test frameworks',
      'Linux / Bash environment proficiency and shell scripting'
    ],
    tools: ['LangChain', 'ChromaDB', 'OpenAI APIs', 'PyTorch (Basics)', 'Git / GitHub CI', 'Linux / Bash']
  }
];

export const ACADEMIC_STATS = [
  {
    number: '3.92',
    label: 'Cumulative CS GPA',
    note: 'Top 5% of Computer Science Cohort • Dean’s List'
  },
  {
    number: '500+',
    label: 'DSA & LeetCode Solved',
    note: 'Arrays, Dynamic Programming, Graphs, Heuristics'
  },
  {
    number: '1.2K+',
    label: 'GitHub Contributions',
    note: 'Active open-source repos & systems code in 2024–2025'
  },
  {
    number: '3x',
    label: 'Hackathon Honors & Awards',
    note: 'Including Best Systems Hack & Best AI Project'
  }
];

export const CS_TESTIMONIALS = [
  {
    quote: 'Dharshana was one of the most exceptional students in my Distributed Systems class. Her implementation of the Raft consensus protocol in Go demonstrated a level of systems intuition and concurrency mastery that you usually only see in senior engineers.',
    author: 'Dr. Alistair Finch',
    title: 'Associate Professor of Computer Science',
    company: 'Cardiff University School of CS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    quote: 'During her internship project, Dharshana spearheaded an automated observability pipeline that shaved 38% off our CI test suite runtime. She communicates with absolute clarity and writes production-ready code on day one.',
    author: 'Sarah Chen',
    title: 'Staff Software Engineer & Mentor',
    company: 'CloudScale Infrastructure',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    quote: 'At the Cardiff Hackathon, Dharshana’s team built a real-time CRDT whiteboard that blew the judges away. While most teams struggled with WebSocket race conditions, her architecture handled 100+ concurrent peers flawlessly.',
    author: 'David Evans',
    title: 'Lead Hackathon Judge & VP Engineering',
    company: 'Fintech Wales',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export const STATS = ACADEMIC_STATS;
export const CASE_STUDIES = CS_PROJECTS;
export type CaseStudy = ProjectItem;

export const EDUCATION_DETAILS = {
  degree: 'Bachelor of Science (B.S.) in Computer Science',
  year: '3rd Year Undergraduate (Expected Graduation: June 2026)',
  institution: 'Cardiff University, School of Computer Science & Informatics',
  standing: 'First Class Honours Track (GPA: 3.92 / 4.0)',
  coursework: [
    'Data Structures & Algorithms',
    'Distributed Systems & Concurrency',
    'Operating Systems & Kernel Architecture',
    'Database Systems & Query Optimisation',
    'Computer Networks & Protocols',
    'Software Engineering & DevOps',
    'Artificial Intelligence & Machine Learning',
    'Human-Computer Interaction (HCI)'
  ]
};
