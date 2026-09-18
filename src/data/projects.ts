export interface FeaturedProject {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  tech: string[];
  problem: string;
  solution: string;
  result: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  previewGradient: string;
  accentColor: string;
  badge: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'aqenix-career-os',
    number: '01',
    name: 'AQENIX AI CAREER OS',
    category: 'AI / PRODUCT / 2026',
    tagline: 'Autonomous multi-agent career roadmapping and dynamic algorithmic skill evaluation platform.',
    tech: ['React 19', 'Python', 'FastAPI', 'LangChain', 'Vector DB', 'Tailwind'],
    problem:
      'Engineers struggle with disjointed roadmaps and subjective resume advice disconnected from live industry hiring criteria.',
    solution:
      'Engineered an agentic pipeline auditing candidate skill graphs against 50k+ market nodes with weekly adaptive milestones.',
    result:
      'Accelerates roadmap planning by 80% with granular prerequisite graph traversal and real-time interview simulation.',
    liveDemoUrl: 'https://github.com/kishorsv/aqenix-career-os',
    githubUrl: 'https://github.com/kishorsv/aqenix-career-os',
    caseStudyUrl: '#case-study-aqenix-career',
    previewGradient: 'from-[#1A122E] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Flagship AI Product',
  },
  {
    id: 'aqenix-chat-ai',
    number: '02',
    name: 'AQENIX CHAT AI',
    category: 'AI SYSTEM / CONVERSATIONAL',
    tagline: 'Ultra-low latency conversational assistant featuring hierarchical context memory and streaming virtualization.',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'vLLM', 'Redis'],
    problem:
      'Standard LLM chat frontends suffer from high time-to-first-token (TTFT) and layout shifts during long code stream outputs.',
    solution:
      'Built a hybrid SSE/WebSocket edge platform with token compaction and an embedded code execution sandbox.',
    result:
      'Sub-40ms streaming response time with zero layout shift and deterministic markdown/KaTeX typesetting.',
    liveDemoUrl: 'https://github.com/kishorsv/aqenix-chat-ai',
    githubUrl: 'https://github.com/kishorsv/aqenix-chat-ai',
    caseStudyUrl: '#case-study-aqenix-chat',
    previewGradient: 'from-[#1E122A] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Real-Time Streaming',
  },
  {
    id: 'civicfind-india',
    number: '03',
    name: 'CIVICFIND INDIA',
    category: 'GEO-SPATIAL / CITIZEN TECH',
    tagline: 'Spatial municipal discovery engine indexing public service desks with vernacular natural language search.',
    tech: ['React', 'GeoJSON', 'FastAPI', 'OpenStreetMap', 'Semantic Search'],
    problem:
      'Navigating civic bureaucracy in Indian cities is hindered by unindexed counters, missing checklists, and language barriers.',
    solution:
      'Mapped 14,000+ public service desks with colloquial Kannada and English query resolution and offline PWA support.',
    result:
      'Reduced civic query discovery time from hours to 65ms with full offline document checklists for citizens.',
    liveDemoUrl: 'https://github.com/kishorsv/civicfind-india',
    githubUrl: 'https://github.com/kishorsv/civicfind-india',
    caseStudyUrl: '#case-study-civicfind',
    previewGradient: 'from-[#221C14] via-[#141210] to-[#0A0A0B]',
    accentColor: '#D8C39A',
    badge: 'GovTech & Geo-Spatial',
  },
  {
    id: 'linguabridge',
    number: '04',
    name: 'LINGUABRIDGE',
    category: 'INDIC NLP / TRANSLATION',
    tagline: 'Vernacular Kannada-English communication transformer preserving cultural idioms and administrative nuances.',
    tech: ['PyTorch', 'Transformers', 'FastAPI', 'React', 'Whisper API'],
    problem:
      'Commercial translation tools fail to comprehend regional Kannada syntax, rural idioms, and regional administrative terms.',
    solution:
      'Fine-tuned transformer models on vernacular bilingual corpora with acoustic speech-to-text transliteration.',
    result:
      '+7.4 BLEU score improvement over baseline translation APIs with natural conversational cadence.',
    liveDemoUrl: 'https://github.com/kishorsv/linguabridge',
    githubUrl: 'https://github.com/kishorsv/linguabridge',
    caseStudyUrl: '#case-study-linguabridge',
    previewGradient: 'from-[#281512] via-[#151010] to-[#0A0A0B]',
    accentColor: '#FF8066',
    badge: 'Indic NLP & Human Language',
  },
  {
    id: 'lifeos',
    number: '05',
    name: 'LIFEOS',
    category: 'SYSTEM / OPERATING ENVIRONMENT',
    tagline: 'Personal operating system synthesizing daily sprints, bidirectional markdown nodes, and habit rhythms.',
    tech: ['React', 'TypeScript', 'Node.js', 'SQLite', 'Zustand', 'Framer Motion'],
    problem:
      'Context fatigue from fragmenting notes, study roadmaps, and circadian timers across 5 separate bloated apps.',
    solution:
      'Designed a keyboard-first local environment uniting circadian blocks, graph-linked thoughts, and automated recaps.',
    result:
      '100% offline functionality, 0ms input latency, and 45 minutes saved per day in academic context switching.',
    liveDemoUrl: 'https://github.com/kishorsv/lifeos',
    githubUrl: 'https://github.com/kishorsv/lifeos',
    caseStudyUrl: '#case-study-lifeos',
    previewGradient: 'from-[#171328] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Local-First Architecture',
  },
];
