export interface SocialLink {
  name: string;
  url: string;
  username: string;
}

export const personalInfo = {
  name: 'Kishor SV',
  shortName: 'KS',
  primaryRole: 'AI/ML Engineering Student & Full-Stack Developer',
  location: 'Bengaluru, India',
  eyebrow: "COLLECTION '26",
  email: 'kishorsv.work@gmail.com',
  heroDescription:
    'Building intelligent digital experiences by combining AI, modern web technologies, thoughtful UI/UX, and real-world problem solving.',
  heroStatement:
    'I design and build intelligent digital products where AI, engineering, and thoughtful interaction come together.',
  aboutEditorial: {
    lead: 'I like turning complex ideas into simple, useful digital experiences.',
    highlightWord: 'complex ideas',
    subtext:
      'Currently exploring AI, Generative AI, full-stack development, Python, DSA, and modern product design.',
    pillars: [
      {
        title: 'Artificial Intelligence & ML',
        description:
          'Deep interest in LLM orchestration, Retrieval-Augmented Generation (RAG), vector similarity search, agentic pipelines, and local edge inference with ONNX and WebAssembly.',
      },
      {
        title: 'Full-Stack Engineering',
        description:
          'Building performant, type-safe web systems using React 19, TypeScript, Next.js, Node.js, FastAPI, PostgreSQL, and Redis with clean decoupled architectures.',
      },
      {
        title: 'Human-Centered Interaction',
        description:
          'Obsessed with micro-interactions, editorial typography, spatial layouts, Framer Motion choreography, zero-layout-shift streaming interfaces, and tactile design.',
      },
    ],
  },
  rotatingRoles: [
    'AI Engineer',
    'Full-Stack Developer',
    'GenAI Builder',
    'Problem Solver',
  ],
  stats: [
    { value: 20, suffix: '+', label: 'Experiments & Builds' },
    { value: 15, suffix: '+', label: 'Projects & Concepts' },
    { value: 10, suffix: '+', label: 'Technologies Explored' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/kishorsv', username: 'kishorsv' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/kishorsv', username: 'kishorsv' },
    { name: 'X', url: 'https://x.com/kishorsv_', username: '@kishorsv_' },
    { name: 'Medium', url: 'https://medium.com/@kishorsv', username: '@kishorsv' },
  ],
};
