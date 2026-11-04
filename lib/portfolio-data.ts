export type ProjectCategory = 'All' | 'Backend & Distributed' | 'AI & Knowledge Systems' | 'Infrastructure & Tools'

export type Project = {
  number: string
  name: string
  category: string
  domain: ProjectCategory
  description: string
  keyFocus?: string
  status: 'Production Grade' | 'Active Prototype' | 'Open Source' | 'Operational' | 'Research'
  tags: string[]
  architecture: string
  architecturePipeline: string[]
  metricBadge: string
  featured?: boolean
  links: { label: string; href: string }[]
}

export const profile = {
  name: 'Akshayaditya K R',
  callsign: 'AKR',
  headline: 'Backend Developer & Distributed Systems Engineer',
  intro: 'I engineer resilient backend architectures, high-concurrency event streams, and agentic AI systems — built for data integrity, low latency, and zero downtime beneath the surface.',
  about: {
    lead: 'Solving architectural bottlenecks, database concurrency, and distributed state from first principles.',
    body1: 'My core focus is foundational backend engineering: ensuring ACID transaction guarantees under high concurrency, architecting sub-second WebSocket event fanouts, and securing payment pipelines with HMAC-SHA256 signature verification and distributed mutex locking.',
    body2: 'Alongside distributed systems, I construct autonomous agentic workflows — running quantized local models on edge devices, indexing unstructured knowledge with dense vector embeddings (RAG), and designing deterministic state machines.',
    personal: "When I step away from the terminal, you'll usually find me on the pitch playing central midfield or studying tactical football systems.",
  },
  email: 'akshadit1976@gmail.com',
  github: 'https://github.com/AkShAdIt',
  linkedin: 'https://linkedin.com/in/akshayadityakr/',
  resume: '', // Drop resume.pdf into /public/resume.pdf and set to '/resume.pdf' to activate the 1-click download
  location: 'Bangalore, India · UTC+5:30',
  status: 'Available for 2026 Backend & Systems Engineering Roles',
}

export const liveTelemetryFeed = [
  { service: 'Matchmint Engine', status: 'ONLINE', latency: '18ms', metric: 'WebSocket Broker · 450 active sockets' },
  { service: 'Paysure Mutex', status: 'ACTIVE', latency: '24ms', metric: 'HMAC-SHA256 · 0 duplicate charges' },
  { service: 'Sakhi Edge Core', status: 'STANDBY', latency: '0ms (Local)', metric: 'Local LLM · SQLite offline cache' },
  { service: 'Devactics Buffer', status: 'INGESTING', latency: '12ms', metric: 'Time-series telemetry · 2.1KB footprint' },
]

export const systemMetrics = [
  { value: '08', label: 'Engineered Systems', sub: 'Production & Prototypes' },
  { value: '< 25ms', label: 'WebSocket Fanout', sub: 'Concurrent Broadcast' },
  { value: '100%', label: 'Idempotency Guarantee', sub: 'Zero Double Charges' },
  { value: 'Offline', label: 'Local Agent Inference', sub: 'Zero Cloud Dependency' },
]

export const competencyMatrix = [
  {
    domain: 'Data & Transaction Layers',
    description: 'Relational data modeling, ACID isolation levels, connection pooling, and sub-millisecond in-memory cache topologies.',
    skills: ['PostgreSQL', 'Redis Pub/Sub', 'Vector Search (Cosine)', 'SQLite Edge Cache', 'Row-Level Locks', 'Sharding Heuristics'],
    badge: 'Tier 1 Priority',
  },
  {
    domain: 'Distributed Protocols & Concurrency',
    description: 'High-throughput event fanouts, cryptographic payment verification, idempotent ingress, and state machines.',
    skills: ['WebSockets', 'Idempotent Webhooks', 'HMAC-SHA256', 'Distributed Mutex Locks', 'REST APIs', 'Event Sourcing'],
    badge: 'Core Focus',
  },
  {
    domain: 'Runtimes & Asynchronous Pipelines',
    description: 'Non-blocking I/O architectures, decoupled worker queues, and lightweight time-series telemetry collectors.',
    skills: ['Node.js & TypeScript', 'Python AsyncIO', 'Docker', 'Asynchronous Queues', 'Time-Series Buffers', 'Linux Tooling'],
    badge: 'Runtime Layer',
  },
  {
    domain: 'Agentic AI & Edge Intelligence',
    description: 'Quantized local model inference, semantic chunking pipelines, dense vector retrieval, and deterministic tool-use agents.',
    skills: ['Quantized Edge LLMs', 'Dense Retrieval (RAG)', 'Semantic Chunking', 'Voice Transcribe (Whisper)', 'Function Calling'],
    badge: 'Applied AI',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    name: 'Matchmint',
    category: 'Real-Time Event Streaming & Auction Infrastructure',
    domain: 'Backend & Distributed',
    description: 'A high-throughput tournament orchestration platform engineered for concurrent player auctions, dynamic fixture matrices, and live sub-second ball-by-ball score broadcasting.',
    keyFocus: 'Concurrent bid state synchronization and sub-second live score fanout across connected clients without race conditions.',
    status: 'Production Grade',
    featured: true,
    metricBadge: '< 25ms Broadcast Latency',
    tags: ['WebSockets', 'PostgreSQL', 'Next.js', 'State Machines', 'Live Telemetry'],
    architecture: 'Dual-layer real-time engine leveraging WebSocket event streaming coupled with row-level PostgreSQL locks and ACID database transactions to eliminate race conditions during concurrent bid placements.',
    architecturePipeline: [
      'Client WebSocket',
      'Event Streamer',
      'Row-Level SQL Locks',
      'Pub/Sub Broadcast',
      'Immutable Ledger',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/Matchmint' },
    ],
  },
  {
    number: '02',
    name: 'Paysure',
    category: 'Fintech Payment Verification & Settlement Pipeline',
    domain: 'Backend & Distributed',
    description: 'A mission-critical merchant payment reconciliation platform built to guarantee double-verification, cryptographic signature validation, and idempotent webhook transaction ingestion.',
    keyFocus: 'Engineered backend payment reconciliation using Razorpay APIs, HMAC-SHA256 signature verifiers, and distributed mutex locking.',
    status: 'Production Grade',
    featured: true,
    metricBadge: '100% Idempotency Safety',
    tags: ['Razorpay', 'HMAC-SHA256', 'Webhooks', 'Distributed Locks', 'Fintech Security'],
    architecture: 'Cryptographic HMAC-SHA256 signature verification pipeline backed by Redis distributed mutex locks and unique idempotency keys to completely prevent duplicate credit processing during network retries.',
    architecturePipeline: [
      'Razorpay Webhook',
      'HMAC Signature Audit',
      'Distributed Mutex Lock',
      'Ledger Reconciliation',
      'ACK 200 Telemetry',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/Paysure' },
    ],
  },
  {
    number: '03',
    name: 'MemChat',
    category: 'Conversational Knowledge & Vector Search Engine',
    domain: 'AI & Knowledge Systems',
    description: 'A conversational cloud storage engine designed to turn raw document hierarchies into queryable, contextual knowledge through natural language semantic search.',
    keyFocus: 'Document chunking strategies, dense vector embedding generation, and fast similarity ranking.',
    status: 'Active Prototype',
    metricBadge: 'Sub-50ms Vector Query',
    tags: ['Vector Search', 'AI Embeddings', 'Node.js', 'Semantic Chunking', 'RAG'],
    architecture: 'Hybrid vector search pipeline that parses structured and unstructured documents into contextual chunks, embeds them into high-dimensional vector space, and queries them using cosine similarity algorithms.',
    architecturePipeline: [
      'Raw Document Ingress',
      'Semantic Chunker',
      'Embedding Vectorizer',
      'Vector Space Index',
      'Context Synthesis',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/MemChat' },
    ],
  },
  {
    number: '04',
    name: 'Sakhi',
    category: 'Offline-First Edge Healthcare Assistant',
    domain: 'AI & Knowledge Systems',
    description: 'An offline-first, voice-enabled healthcare assistant built for low-connectivity regions, enabling clinical query resolution and triage guidance without constant internet access.',
    keyFocus: 'Local model execution, offline agent state machine, voice transcription pipeline, and progressive cloud synchronization.',
    status: 'Open Source',
    metricBadge: 'Zero-Cloud Fallback',
    tags: ['Edge LLM', 'Voice AI', 'Offline-First', 'SQLite Cache', 'OAuth 2.0'],
    architecture: 'On-device quantized LLM inference combined with lightweight speech processing and a local SQLite cache that queues operations and synchronizes with remote servers when network restores.',
    architecturePipeline: [
      'Voice Audio In',
      'On-Device Speech Core',
      'Quantized Local LLM',
      'SQLite Local Memory',
      'Cloud Sync On-Reconnect',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/Sakhi' },
    ],
  },
  {
    number: '05',
    name: 'Namma3DLab',
    category: 'Asynchronous Workflow & Job Dispatch Engine',
    domain: 'Infrastructure & Tools',
    description: 'A cloud service platform streamlining 3D printing orders, file validation, queue management, and automated worker job dispatching for fabrication labs.',
    keyFocus: 'Asynchronous worker queue orchestration, multipart CAD mesh validation, and print duration estimation.',
    status: 'Operational',
    metricBadge: 'Zero Dropped Jobs',
    tags: ['Asynchronous Queues', 'REST API', 'CAD Mesh Validation', 'TypeScript'],
    architecture: 'Worker-node topology processing multipart CAD mesh uploads through an asynchronous Redis job queue with automated geometry verification before machine scheduling.',
    architecturePipeline: [
      'Multipart CAD Upload',
      'Geometry Inspector',
      'Redis Job Queue',
      'Worker Pool Dispatch',
      'Telemetry Sync',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/Namma3DLab' },
    ],
  },
  {
    number: '06',
    name: 'Devactics',
    category: 'Privacy-First Telemetry & Traffic Analytics',
    domain: 'Infrastructure & Tools',
    description: 'A cookieless, lightweight web traffic telemetry engine and bot verification platform designed specifically for developer documentation and open-source infrastructure.',
    keyFocus: 'High-throughput telemetry ingestion, bot anomaly heuristics, and time-series aggregation.',
    status: 'Open Source',
    metricBadge: '< 2.4KB Script Footprint',
    tags: ['Telemetry Engine', 'Geo-IP', 'Time-Series Buffer', 'Privacy First'],
    architecture: 'Ultra-lightweight append-only time-series ingestion endpoint writing to an ephemeral memory buffer before batch aggregation, keeping client footprint under 2.4KB.',
    architecturePipeline: [
      'Client Ping (<2.4KB)',
      'Edge Worker Ingress',
      'Bot Anomaly Filter',
      'Time-Series Buffer',
      'Batch Aggregation',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/Devactics' },
    ],
  },
  {
    number: '07',
    name: 'Attendly',
    category: 'High-Throughput Presence Analytics Engine',
    domain: 'Backend & Distributed',
    description: 'An enterprise attendance management application featuring intuitive swipe-based check-ins backed by batch ingestion and statistical presence anomaly detection.',
    keyFocus: 'Optimistic UI client updates combined with resilient batch ingestion endpoints.',
    status: 'Production Grade',
    metricBadge: 'Sub-100ms Ingestion',
    tags: ['PostgreSQL', 'Batch Ingestion', 'Analytics Heuristics', 'REST API'],
    architecture: 'High-throughput batch attendance ingestion endpoint with optimistic UI updates and statistical standard deviation heuristics to detect anomalous check-ins.',
    architecturePipeline: [
      'Check-in Ping',
      'Optimistic State Update',
      'Batch Ingestion Queue',
      'Statistical Anomaly Filter',
      'Historical Trend DB',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/Attendly' },
    ],
  },
  {
    number: '08',
    name: 'CrowdRakshak',
    category: 'Computer Vision & Real-Time Alert Pipeline',
    domain: 'AI & Knowledge Systems',
    description: 'An AI-powered computer vision monitoring system that processes continuous video feeds to detect crowd densities, bottleneck thresholds, and trigger automated alerts.',
    keyFocus: 'Real-time video frame inference pipeline, object tracking, and threshold alert webhook dispatch.',
    status: 'Research',
    metricBadge: 'Real-Time Inference',
    tags: ['Computer Vision', 'Object Tracking', 'Alert Webhooks', 'Python', 'YOLO'],
    architecture: 'Continuous video frame inference pipeline utilizing lightweight YOLO models connected to threshold triggers that dispatch prioritized webhook notifications upon capacity breach.',
    architecturePipeline: [
      'CCTV Stream Feed',
      'Frame Decimation',
      'YOLO Object Counter',
      'Threshold State Matrix',
      'Emergency Webhook Dispatch',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/AkShAdIt/CrowdRakshak' },
    ],
  },
]

export const navItems = [
  { label: 'Overview', href: '#top' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Competencies', href: '#competencies' },
  { label: 'Systems', href: '#systems' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Contact', href: '#contact' },
]

export function getAvailableLinks() {
  return [
    profile.email && { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
    profile.github && { label: 'GitHub', href: profile.github, value: 'AkShAdIt' },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, value: 'akshayadityakr' },
  ].filter(Boolean) as { label: string; href: string; value: string }[]
}
