export interface WhatIBuildItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'cpu' | 'sparkles' | 'layers' | 'layout';
  tags: string[];
  gradient: string;
  badge: string;
}

export const whatIBuildItems: WhatIBuildItem[] = [
  {
    id: 'ai-applications',
    title: 'AI Applications',
    shortDesc: 'AI-powered tools and assistants.',
    fullDesc:
      'Designing domain-specific intelligent utilities, real-time computer vision monitors, and proactive assistive agents that automate repetitive friction.',
    iconName: 'cpu',
    tags: ['Edge AI', 'Computer Vision', 'FastAPI', 'WASM'],
    gradient: 'from-[#142332] via-[#0b1622] to-[#050c14]',
    badge: 'Applied AI',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    shortDesc: 'LLM-powered applications and intelligent workflows.',
    fullDesc:
      'Architecting multi-agent consensus loops, retrieval-augmented generation (RAG) with vector databases, and deterministic schema-guided LLM pipelines.',
    iconName: 'sparkles',
    tags: ['LangChain', 'RAG', 'Vector Embeddings', 'vLLM'],
    gradient: 'from-[#19242d] via-[#101920] to-[#090e12]',
    badge: 'LLM Systems',
  },
  {
    id: 'full-stack-products',
    title: 'Full-Stack Products',
    shortDesc: 'Complete frontend + backend applications.',
    fullDesc:
      'Building robust end-to-end web products with strict TypeScript contracts, relational and spatial databases, streaming protocols, and clean API design.',
    iconName: 'layers',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST & WS'],
    gradient: 'from-[#1a2133] via-[#0e1320] to-[#080b13]',
    badge: 'Architecture',
  },
  {
    id: 'modern-interfaces',
    title: 'Modern Interfaces',
    shortDesc: 'Interactive, responsive and animated UI/UX.',
    fullDesc:
      'Obsessed with editorial typography, tactile micro-interactions, dark aesthetic harmony, GSAP motion choreography, and zero layout shift experiences.',
    iconName: 'layout',
    tags: ['Tailwind CSS', 'Framer Motion', 'GSAP', 'Accessibility'],
    gradient: 'from-[#152538] via-[#0c1824] to-[#060c13]',
    badge: 'Design Engineering',
  },
];
