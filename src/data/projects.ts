export interface FeaturedProject {
  id: string;
  number: string;
  name: string;
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
    name: 'AQENIX AI Career Operating System',
    tagline: 'Autonomous AI talent discovery and personalized algorithmic career roadmapping platform.',
    tech: ['React', 'Python', 'FastAPI', 'LangChain', 'Vector DB', 'Tailwind CSS'],
    problem:
      'Students and junior developers face fragmented career advice, unclear skill benchmarks, and generic resume feedback that doesn’t align with live industry hiring criteria.',
    solution:
      'Built a multi-agent career operating system that parses candidate skill graphs, audits semantic gaps against 50k+ market nodes, and generates weekly milestone pathways.',
    result:
      'Empowers students to pinpoint exact missing prerequisites, simulate technical interviews with feedback scoring, and cut roadmap planning time by 80%.',
    liveDemoUrl: 'https://github.com/kishorsv/aqenix-career-os',
    githubUrl: 'https://github.com/kishorsv/aqenix-career-os',
    caseStudyUrl: '#case-study-aqenix-career',
    previewGradient: 'from-[#1a2333] via-[#0e1622] to-[#080d14]',
    accentColor: '#89AACC',
    badge: 'Flagship Agentic AI',
  },
  {
    id: 'aqenix-chat-ai',
    number: '02',
    name: 'AQENIX Chat AI',
    tagline: 'Ultra-low latency conversational assistant featuring adaptive context memory and real-time streaming.',
    tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'vLLM', 'Redis'],
    problem:
      'Standard chat interfaces struggle with high initial token latency (TTFT), context drift across long conversations, and lack of specialized coding sandboxes.',
    solution:
      'Engineered an edge streaming chat platform with SSE/WebSocket hybrid streaming, hierarchical token compaction, and an embedded code virtualization sandbox.',
    result:
      'Delivers sub-40ms initial token response, clean markdown typesetting with mathematical KaTeX equations, and zero layout shift during continuous generation.',
    liveDemoUrl: 'https://github.com/kishorsv/aqenix-chat-ai',
    githubUrl: 'https://github.com/kishorsv/aqenix-chat-ai',
    caseStudyUrl: '#case-study-aqenix-chat',
    previewGradient: 'from-[#19242d] via-[#101920] to-[#090e12]',
    accentColor: '#4E85BF',
    badge: 'Real-Time Streaming',
  },
  {
    id: 'health-companion-ai',
    number: '03',
    name: 'Health Companion AI',
    tagline: 'Intelligent proactive wellness monitor & symptom triage assistant with medical knowledge grounding.',
    tech: ['Python', 'React', 'FastAPI', 'BioBERT', 'Tailwind CSS', 'SQLite'],
    problem:
      'Users experiencing early symptoms often encounter panic-inducing web search results or clinical jargon that confuses rather than clarifies actionable next steps.',
    solution:
      'Developed a compassionate conversational triage agent grounded in verified clinical guidelines that asks structured follow-up questions and estimates urgency levels.',
    result:
      'Provides calm, structured summaries with recommended clinical specialties, dietary cautions, and emergency escalation alerts without diagnosing dangerously.',
    liveDemoUrl: 'https://github.com/kishorsv/health-companion-ai',
    githubUrl: 'https://github.com/kishorsv/health-companion-ai',
    caseStudyUrl: '#case-study-health-companion',
    previewGradient: 'from-[#14232c] via-[#0b171f] to-[#060e14]',
    accentColor: '#5C93C4',
    badge: 'Applied Healthcare AI',
  },
  {
    id: 'civicfind-india',
    number: '04',
    name: 'CivicFind India',
    tagline: 'Smart public service & municipal office discovery platform with vernacular query resolution.',
    tech: ['React', 'GeoJSON', 'FastAPI', 'OpenStreetMap', 'Semantic Search', 'Tailwind'],
    problem:
      'Navigating civic bureaucracy in Indian cities is frustrating due to unindexed office locations, complex counter procedures, and language barriers.',
    solution:
      'Built a spatial discovery engine mapping 14,000+ public service desks with support for colloquial Kannada and English natural language civic queries.',
    result:
      'Reduced average civic search time from hours to 65ms with full offline PWA caching for low-bandwidth zones and exact document verification checklists.',
    liveDemoUrl: 'https://github.com/kishorsv/civicfind-india',
    githubUrl: 'https://github.com/kishorsv/civicfind-india',
    caseStudyUrl: '#case-study-civicfind',
    previewGradient: 'from-[#182124] via-[#0f1618] to-[#080d0e]',
    accentColor: '#72A1CF',
    badge: 'GovTech & Geo-Spatial',
  },
  {
    id: 'posture-guardian-ai',
    number: '05',
    name: 'Posture Guardian AI',
    tagline: '100% private, client-side computer vision posture monitoring running in-browser via WebAssembly.',
    tech: ['MediaPipe', 'TensorFlow.js', 'WebAssembly', 'React', 'Canvas API'],
    problem:
      'Desk workers suffer spinal fatigue and repetitive strain, yet cloud-based webcam monitoring tools raise severe privacy and data leakage concerns.',
    solution:
      'Created a zero-cloud posture assistant running pose estimation models at 60 FPS entirely inside the browser using WebAssembly with zero network frames transmitted.',
    result:
      'Tracks 33 skeletal points locally, calculates ergonomic neck-spine inclination within ±1.2°, and triggers ambient audio cues when slouching exceeds 2 minutes.',
    liveDemoUrl: 'https://github.com/kishorsv/posture-guardian-ai',
    githubUrl: 'https://github.com/kishorsv/posture-guardian-ai',
    caseStudyUrl: '#case-study-posture-guardian',
    previewGradient: 'from-[#17242c] via-[#0e171e] to-[#080d12]',
    accentColor: '#89AACC',
    badge: 'Edge ML / Privacy First',
  },
  {
    id: 'linguabridge',
    number: '06',
    name: 'Lingua Bridge',
    tagline: 'AI-assisted Kannada-to-English communication pipeline preserving regional idioms and colloquial dialects.',
    tech: ['PyTorch', 'Transformers', 'FastAPI', 'Next.js', 'Whisper API'],
    problem:
      'Mainstream commercial machine translation engines fail to comprehend non-standard Kannada vernacular syntax, rural idioms, and regional administrative vocabulary.',
    solution:
      'Fine-tuned Indic transformer models on bilingual vernacular corpora with side-by-side phonetic transliteration and speech-to-text acoustic matching.',
    result:
      'Achieved a +7.4 BLEU gain over standard baselines, enabling natural communication between regional citizens and digital administrative systems.',
    liveDemoUrl: 'https://github.com/kishorsv/linguabridge',
    githubUrl: 'https://github.com/kishorsv/linguabridge',
    caseStudyUrl: '#case-study-linguabridge',
    previewGradient: 'from-[#1b2230] via-[#101621] to-[#090d14]',
    accentColor: '#4E85BF',
    badge: 'Indic NLP & Accessibility',
  },
  {
    id: 'lifeos',
    number: '07',
    name: 'LifeOS',
    tagline: 'Personal AI life operating system unifying habits, deep work sprints, and academic knowledge synthesis.',
    tech: ['React', 'TypeScript', 'Node.js', 'SQLite', 'Zustand', 'Framer Motion'],
    problem:
      'Students and engineers balance high-friction fragmented apps for task tracking, code notes, and study scheduling, leading to cognitive fatigue.',
    solution:
      'Architected a local-first keyboard-centric workspace combining circadian sprint timers, bidirectional markdown note linking, and daily AI recap synthesis.',
    result:
      'Saves ~45 minutes of daily context switching, operates 100% offline with zero server lag, and automatically prepares high-yield exam revision summaries.',
    liveDemoUrl: 'https://github.com/kishorsv/lifeos',
    githubUrl: 'https://github.com/kishorsv/lifeos',
    caseStudyUrl: '#case-study-lifeos',
    previewGradient: 'from-[#152331] via-[#0d1620] to-[#070d13]',
    accentColor: '#5C93C4',
    badge: 'Local-First Product',
  },
];
