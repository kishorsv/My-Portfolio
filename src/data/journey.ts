export interface JourneyMilestone {
  period: string;
  stage: string;
  title: string;
  description: string;
  skills: string[];
  highlight: string;
}

export const engineeringJourney: JourneyMilestone[] = [
  {
    period: '2024 — Present',
    stage: 'Undergraduate Milestone',
    title: 'Bachelor of Engineering — 2nd Year',
    description:
      'Pursuing an AI/ML-focused engineering degree in Bengaluru. Deepening formal knowledge in Data Structures & Algorithms, Discrete Mathematics, Operating Systems, and Linear Algebra.',
    skills: ['DSA', 'Python', 'Algorithms', 'Linear Algebra'],
    highlight: 'Maintaining high academic rigor while dedicating evening sprint blocks to shipping production software.',
  },
  {
    period: '2023 — 2024',
    stage: 'Intensive Training',
    title: 'NxtWave CCBP 4.0 Academy',
    description:
      'Completed rigorous hands-on technical curriculum focused on industry 4.0 standards. Built multiple full-stack projects, mastered fundamental programming paradigms, and solved structured coding challenges daily.',
    skills: ['Full Stack Development', 'Python', 'Web Architectures', 'Problem Solving'],
    highlight: 'Certified in Full Stack Web Development and Python foundations with practical code reviews.',
  },
  {
    period: 'Foundations',
    stage: 'Interface Craft',
    title: 'Frontend Development Mastery',
    description:
      'Transitioned from basic HTML/CSS to component-driven architectures in React, TypeScript, and modern Tailwind CSS. Studied layout reflow, keyboard accessibility, and state machines.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    highlight: 'Engineered reusable design token systems and animated components using Framer Motion.',
  },
  {
    period: 'Core Computing',
    stage: 'Logic & Architecture',
    title: 'Python & Data Structures & Algorithms',
    description:
      'Mastered Pythonic idioms, object-oriented design, time/space complexity analysis, recursion, trees, and graphs. Practiced algorithmic problem-solving to write clean, maintainable logic.',
    skills: ['Python', 'DSA', 'Time Complexity', 'Graph Algorithms'],
    highlight: 'Applied algorithmic indexing to search queries in projects like CivicFind and LifeOS.',
  },
  {
    period: 'Innovation',
    stage: 'Cutting-Edge AI',
    title: 'Generative AI & LLM Systems',
    description:
      'Pioneered experimentation with LangChain, retrieval-augmented generation (RAG), embeddings, prompt evaluations, and multi-agent coordination pipelines.',
    skills: ['GenAI', 'LLM Agents', 'Vector Embeddings', 'Prompt Engineering'],
    highlight: 'Shipped AQENIX Career OS and AQENIX Chat AI with sub-50ms streaming token UX.',
  },
  {
    period: 'Integration',
    stage: 'End-to-End Delivery',
    title: 'Full-Stack Development & Real-World Deployments',
    description:
      'Bridged client interfaces with robust backends: Node.js, FastAPI, PostgreSQL, SQLite, and WebSockets. Deployed containerized applications with production CI/CD pipelines.',
    skills: ['FastAPI', 'Node.js', 'Databases', 'Vercel / Docker'],
    highlight: 'Deployed 7 functional web applications serving real users with zero-server crash resilience.',
  },
];
