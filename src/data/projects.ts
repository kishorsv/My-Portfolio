export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  colSpan: string; // e.g. 'md:col-span-7', 'md:col-span-5'
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  architecture: string[];
  demoUrl?: string;
  githubUrl?: string;
  previewGradient: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: 'aqenix-career-os',
    number: '01',
    title: 'AQENIX AI Career OS',
    category: 'AI Operating System & Agentic Workflows',
    shortDescription: 'An intelligent operating system that automates talent discovery, skill-gap analysis, and algorithmic career path optimization using multi-agent workflows.',
    fullDescription: 'AQENIX AI Career OS bridges the disconnect between rapid industry evolution and talent development. Built with an autonomous agent pipeline, it parses candidate trajectories, runs semantic skill-gap audits against live market graphs, and generates personalized roadmaps with actionable milestones.',
    colSpan: 'md:col-span-7',
    tags: ['Next.js', 'Python', 'LangChain', 'FastAPI', 'Vector DB', 'Tailwind CSS'],
    metrics: [
      { label: 'Skill Match Precision', value: '94.8%' },
      { label: 'Evaluation Latency', value: '<420ms' },
      { label: 'Active Pathways', value: '1,200+' }
    ],
    features: [
      'Multi-agent graph for concurrent career milestone projection',
      'Vector semantic search matching skills to 50k+ job market taxonomies',
      'Real-time interview simulator with speech emotion & context scoring',
      'Automated portfolio and resume feedback synthesis'
    ],
    architecture: [
      'Frontend: React 19, TypeScript, Tailwind, Framer Motion',
      'Inference: FastAPI, LangChain Agent Executor, OpenAI & Claude models',
      'Storage: PostgreSQL + pgvector for high-dimensional skill embeddings'
    ],
    demoUrl: 'https://github.com/kishorsv/aqenix-career-os',
    githubUrl: 'https://github.com/kishorsv/aqenix-career-os',
    previewGradient: 'from-[#1a2333] via-[#0e1622] to-[#080d14]',
    accentColor: '#89AACC',
  },
  {
    id: 'aqenix-chat-ai',
    number: '02',
    title: 'AQENIX Chat AI',
    category: 'Conversational Intelligence & RAG',
    shortDescription: 'Low-latency conversational intelligence platform featuring real-time token streaming, multi-modal context memory, and dynamic retrieval-augmented generation.',
    fullDescription: 'A high-performance conversational intelligence engine designed for engineering teams and researchers. Delivers sub-50ms initial token latency with adaptive context window compaction, grounded citations, and local vector cache.',
    colSpan: 'md:col-span-5',
    tags: ['React', 'TypeScript', 'WebSockets', 'Ollama / vLLM', 'Redis', 'Node.js'],
    metrics: [
      { label: 'Time-to-First-Token', value: '38ms' },
      { label: 'Context Retention', value: '128k Tokens' },
      { label: 'Cache Hit Ratio', value: '87.4%' }
    ],
    features: [
      'SSE & WebSocket hybrid streaming pipeline for instant UI rendering',
      'Hierarchical conversation summarization to conserve memory tokens',
      'Code execution sandbox with live terminal output virtualization',
      'Markdown rendering engine with math typesetting and syntax highlighting'
    ],
    architecture: [
      'Streaming Gateway: Node.js worker pools with Redis Pub/Sub',
      'LLM Router: Custom load balancer across edge inference endpoints',
      'Client: Virtualized scroll lists with zero layout shift during stream'
    ],
    demoUrl: 'https://github.com/kishorsv/aqenix-chat-ai',
    githubUrl: 'https://github.com/kishorsv/aqenix-chat-ai',
    previewGradient: 'from-[#19242d] via-[#101920] to-[#090e12]',
    accentColor: '#4E85BF',
  },
  {
    id: 'civicfind-india',
    number: '03',
    title: 'CivicFind India',
    category: 'Geo-Spatial AI & Public GovTech',
    shortDescription: 'Smart public service & government-office discovery engine powered by geospatial indexing and natural-language civic query resolution.',
    fullDescription: 'Navigating bureaucratic civic infrastructure in Indian municipalities is notoriously difficult. CivicFind India resolves ambiguous natural language queries (e.g., "Where can I renew my senior citizen ration card in Malleshwaram?") to exact department desks, required checklists, and turnaround times.',
    colSpan: 'md:col-span-5',
    tags: ['React', 'GeoJSON', 'OpenStreetMap', 'FastAPI', 'Semantic Search', 'IndexedDB'],
    metrics: [
      { label: 'Offices Indexed', value: '14,000+' },
      { label: 'Avg Query Time', value: '65ms' },
      { label: 'Offline Query Cache', value: '100%' }
    ],
    features: [
      'Multilingual transliteration support for Kannada, Hindi, and Tamil query terms',
      'Geo-fenced route assistance with public transit integrations',
      'Crowdsourced turnaround time and counter status verification',
      'PWA architecture providing offline-first discovery for low-bandwidth zones'
    ],
    architecture: [
      'Spatial Engine: PostGIS spatial bounding-box indexing',
      'Query Parser: Hybrid BM25 + dense sentence embeddings',
      'Frontend: Leaflet / WebGL maps with dark mode raster styling'
    ],
    demoUrl: 'https://github.com/kishorsv/civicfind-india',
    githubUrl: 'https://github.com/kishorsv/civicfind-india',
    previewGradient: 'from-[#182124] via-[#0f1618] to-[#080d0e]',
    accentColor: '#5C93C4',
  },
  {
    id: 'posture-guardian-ai',
    number: '04',
    title: 'Posture Guardian AI',
    category: 'Computer Vision & Edge Machine Learning',
    shortDescription: 'Client-side computer vision posture monitoring system running 100% locally in-browser via WebAssembly and MediaPipe with zero video stream transmission.',
    fullDescription: 'Engineered for knowledge workers spending 8+ hours at desk setups. Posture Guardian AI calculates spinal misalignment, neck forward inclination, and ergonomic fatigue directly inside the browser using MediaPipe pose estimators. Complete data sovereignty: zero video frames ever touch a remote server.',
    colSpan: 'md:col-span-7',
    tags: ['MediaPipe', 'TensorFlow.js', 'WebAssembly', 'React', 'Canvas API', 'Web Audio'],
    metrics: [
      { label: 'Edge Inference FPS', value: '60 FPS' },
      { label: 'Privacy Guarantee', value: '0 Remote Bytes' },
      { label: 'Angle Accuracy', value: '±1.2°' }
    ],
    features: [
      '33-point skeletal tracking calibrated to user torso dimensions',
      'Subtle ambient audio cues and visual perimeter glow notifications',
      'Ergonomic fatigue index scoring and break recommendations',
      'Local IndexedDB analytics with daily trend charts and posture heatmaps'
    ],
    architecture: [
      'Vision Pipeline: Web Workers + OffscreenCanvas with WASM acceleration',
      'Keypoint Math: Real-time vector trigonometry calculating spinal curvature',
      'Client: React UI with high-frequency audio synthesis via Web Audio API'
    ],
    demoUrl: 'https://github.com/kishorsv/posture-guardian-ai',
    githubUrl: 'https://github.com/kishorsv/posture-guardian-ai',
    previewGradient: 'from-[#17242c] via-[#0e171e] to-[#080d12]',
    accentColor: '#72A1CF',
  },
  {
    id: 'linguabridge',
    number: '05',
    title: 'LinguaBridge',
    category: 'NLP & Indic Language Accessibility',
    shortDescription: 'AI-assisted Kannada-to-English communication pipeline preserving regional colloquial idioms, rural dialects, and administrative terminology.',
    fullDescription: 'Traditional translation models struggle with non-standard vernacular syntax and regional Indian administrative jargon. LinguaBridge leverages fine-tuned Indic transformer models to deliver natural, context-aware translations between Kannada and English, empowering grassroots communication and accessible digital governance.',
    colSpan: 'md:col-span-7',
    tags: ['PyTorch', 'Transformers', 'FastAPI', 'Next.js', 'Whisper API', 'Tailwind'],
    metrics: [
      { label: 'BLEU Score Gain', value: '+7.4 pts' },
      { label: 'Vernacular Idioms', value: '8,500+' },
      { label: 'Audio Latency', value: '<600ms' }
    ],
    features: [
      'Bilingual speech-to-text pipeline tuned for South Indian acoustics',
      'Idiomatic nuance preservation retaining cultural sentiment',
      'Side-by-side phonetic transliteration and morphological breakdown',
      'Audio pronunciation synthesis with natural pitch modulation'
    ],
    architecture: [
      'Model: Fine-tuned IndicBART & Whisper ASR models',
      'API: Async FastAPI with token chunk streaming and batch queuing',
      'UI: Interactive typography support optimized for Kannada glyphs'
    ],
    demoUrl: 'https://github.com/kishorsv/linguabridge',
    githubUrl: 'https://github.com/kishorsv/linguabridge',
    previewGradient: 'from-[#1b2230] via-[#101621] to-[#090d14]',
    accentColor: '#89AACC',
  },
  {
    id: 'lifeos',
    number: '06',
    title: 'LifeOS',
    category: 'Autonomous Agents & Personal Knowledge',
    shortDescription: 'Personal AI life operating system unifying habits, deep work sprints, academic research synthesis, and health telemetry into a proactive dashboard.',
    fullDescription: 'Modern productivity software is fragmented into siloes. LifeOS unites task telemetry, biometric markers, knowledge graph notes, and daily cognitive load metrics into an autonomous orchestrator that prepares daily agendas, schedules deep-work blocks, and synthesizes study notes.',
    colSpan: 'md:col-span-5',
    tags: ['React', 'TypeScript', 'Node.js', 'SQLite', 'Zustand', 'Framer Motion'],
    metrics: [
      { label: 'Daily Time Saved', value: '45 mins' },
      { label: 'Sync Latency', value: '<20ms' },
      { label: 'Data Portability', value: '100% Offline' }
    ],
    features: [
      'Proactive agenda synthesis based on circadian energy cycles',
      'Local markdown knowledge base linked via bidirectional graph citations',
      'Command bar interface with fuzzy keyboard navigation',
      'Automated weekly reflection summaries generated by local LLM'
    ],
    architecture: [
      'Local-First Core: CRDT sync mechanism with SQLite backplane',
      'UI Layer: Minimal dark interface with custom keyboard shortcuts',
      'Automation: Background cron workers analyzing daily focus sessions'
    ],
    demoUrl: 'https://github.com/kishorsv/lifeos',
    githubUrl: 'https://github.com/kishorsv/lifeos',
    previewGradient: 'from-[#152331] via-[#0d1620] to-[#070d13]',
    accentColor: '#4E85BF',
  }
];
