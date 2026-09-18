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
    category: '01 / AI / CAREER TECH / 2026',
    tagline: 'AI-powered career platform concept focused on career development, learning goals, skills, and professional growth.',
    tech: ['React', 'TypeScript', 'AI Engine', 'Tailwind CSS', 'Vercel'],
    problem:
      'Engineers and students struggle with fragmented roadmaps, unverified skill goals, and subjective career planning.',
    solution:
      'Engineered an intelligent career platform integrating AI career assistants, personalized learning goals, skill development paths, and career guidance.',
    result:
      'Accelerates professional trajectory planning with continuous milestone tracking and adaptive AI mentorship.',
    liveDemoUrl: 'https://aqenix-ai-career-operating-system.vercel.app',
    githubUrl: 'https://github.com/kishorsv',
    caseStudyUrl: 'https://aqenix-ai-career-operating-system.vercel.app',
    previewGradient: 'from-[#1A122E] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Flagship AI Career Platform',
  },
  {
    id: 'health-guide-ai',
    number: '02',
    name: 'HEALTH GUIDE AI',
    category: '02 / GENERATIVE AI / HEALTHCARE',
    tagline: 'AI-powered health information application designed around an accessible conversational wellness experience.',
    tech: ['React', 'Generative AI', 'AI APIs', 'Prompt Engineering', 'Lovable'],
    problem:
      'Medical information on the web is often fragmented, overly technical, or stressful to decipher during acute wellness queries.',
    solution:
      'Built an accessible conversational AI health guide that explains health information clearly, suggests wellness habits, and assists users with thoughtful conversational empathy.',
    result:
      'Provides instantaneous, easy-to-understand health explanations with empathetic conversational structure and safety guardrails.',
    liveDemoUrl: 'https://health-guide-ai-66.lovable.app',
    githubUrl: 'https://github.com/kishorsv',
    caseStudyUrl: 'https://health-guide-ai-66.lovable.app',
    previewGradient: 'from-[#142328] via-[#121214] to-[#0A0A0B]',
    accentColor: '#6EE7B7',
    badge: 'Generative AI Healthcare',
  },
  {
    id: 'civicfind-india',
    number: '03',
    name: 'CIVICFIND INDIA',
    category: '03 / CIVIC TECH / GEO-SPATIAL',
    tagline: 'Interactive map-based civic discovery platform helping citizens locate government offices and public services.',
    tech: ['React', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'Vercel'],
    problem:
      'Navigating civic bureaucracy in India is hindered by unindexed administrative offices, ambiguous counters, and lack of map-based guidance.',
    solution:
      'Engineered an interactive geospatial web application using Leaflet and OpenStreetMap to index public offices, pin service locations, and clarify civic processes.',
    result:
      'Empowers citizens to pinpoint exact municipal and administrative counters with instant interactive map search and verified service details.',
    liveDemoUrl: 'https://government-office-finder.vercel.app',
    githubUrl: 'https://github.com/kishorsv',
    caseStudyUrl: 'https://government-office-finder.vercel.app',
    previewGradient: 'from-[#221C14] via-[#141210] to-[#0A0A0B]',
    accentColor: '#D8C39A',
    badge: 'Civic Tech & Maps',
  },
  {
    id: 'posture-guardian-ai',
    number: '04',
    name: 'POSTURE GUARDIAN AI',
    category: '04 / AI / COMPUTER VISION',
    tagline: 'AI-powered posture assistance project providing intelligent ergonomic feedback in real-time.',
    tech: ['Computer Vision', 'React', 'AI Pose Models', 'Tailwind', 'Vercel'],
    problem:
      'Prolonged desk work leads to chronic slouching, cervical spine strain, and fatigue without proactive physical feedback.',
    solution:
      'Developed an intelligent computer vision posture monitor running real-time pose tracking to analyze spinal alignment and alert users to posture deviations.',
    result:
      'Promotes healthy ergonomics with instantaneous on-screen feedback and ergonomic awareness without invasive hardware.',
    liveDemoUrl: 'https://posture-guardian-ai.vercel.app',
    githubUrl: 'https://github.com/kishorsv',
    caseStudyUrl: 'https://posture-guardian-ai.vercel.app',
    previewGradient: 'from-[#281512] via-[#151010] to-[#0A0A0B]',
    accentColor: '#FF8066',
    badge: 'Vision & Ergonomics',
  },
  {
    id: 'aqenix-fit-ai',
    number: '05',
    name: 'AQENIX FIT AI',
    category: '05 / AI / FITNESS INTELLIGENCE',
    tagline: 'AI-powered personalized fitness platform delivering adaptive workout planning, nutrition guidance, and tracking.',
    tech: ['React', 'AI Assistance', 'Google AI Studio', 'Tailwind', 'Vercel'],
    problem:
      'One-size-fits-all workout plans fail to adjust to individual fatigue levels, variable schedules, and distinct dietary preferences.',
    solution:
      'Architected an intelligent fitness companion concept integrating AI assistance, dynamic workout planning, fitness tracking, nutrition guidance, and personalized progress analysis.',
    result:
      'Delivers customized fitness recommendations that adapt to user progress, creating sustainable and intelligent workout habits.',
    liveDemoUrl: 'https://aqenix-fit-ai.vercel.app',
    githubUrl: 'https://github.com/kishorsv',
    caseStudyUrl: 'https://aqenix-fit-ai.ai.studio',
    previewGradient: 'from-[#171328] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Adaptive AI Fitness',
  },
];

export const allProjects: FeaturedProject[] = [
  ...featuredProjects,
  {
    id: 'aqenix-chat-ai',
    number: '06',
    name: 'AQENIX CHAT AI',
    category: '06 / GENERATIVE AI / CHAT',
    tagline: 'Modern conversational AI chat application engineered for responsive and intuitive conversational experiences.',
    tech: ['React', 'Generative AI', 'TypeScript', 'AI APIs', 'Vercel'],
    problem: 'Traditional chat interfaces lack fluid responsiveness, aesthetic refinement, and smart context handling.',
    solution: 'Designed an elegant, low-latency conversational AI experience with streaming text and intelligent context processing.',
    result: 'Delivers snappy conversational interactions with an ultra-clean UI and zero layout friction.',
    liveDemoUrl: 'https://aqenix-chat-uz8i.vercel.app',
    githubUrl: 'https://github.com/kishorsv',
    previewGradient: 'from-[#1E122A] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Conversational AI',
  },
  {
    id: 'aqenix-ai-hub',
    number: '07',
    name: 'AQENIX AI HUB',
    category: '07 / AI PLATFORM / SUITE',
    tagline: 'Comprehensive AI platform concept uniting AI-powered productivity tools, assistants, and experiments.',
    tech: ['React', 'Tailwind CSS', 'AI APIs', 'TypeScript', 'Vercel'],
    problem: 'AI tools and utilities are often scattered across disparate websites with inconsistent interfaces.',
    solution: 'Engineered a unified AI hub providing a single launchpad for AI assistants, productivity tools, and creative apps.',
    result: 'Centralizes diverse AI capabilities under one coherent, high-performance ecosystem.',
    liveDemoUrl: 'https://aqenix-ai-hub.vercel.app',
    githubUrl: 'https://github.com/kishorsv',
    previewGradient: 'from-[#121E28] via-[#121214] to-[#0A0A0B]',
    accentColor: '#6EE7B7',
    badge: 'AI Platform Suite',
  },
  {
    id: 'bmw-showroom',
    number: '08',
    name: 'BMW SHOWROOM',
    category: '08 / INTERACTIVE FRONTEND / WEB DESIGN',
    tagline: 'Interactive automotive digital showroom experience focused on premium visual design and product presentation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'Netlify'],
    problem: 'Automotive showcase websites often feel clunky and fail to evoke the luxury and precision of the brand.',
    solution: 'Built a sleek, high-impact digital showroom highlighting automotive craftsmanship through rich visuals and fluid layout.',
    result: 'Delivers an engaging digital car exploration experience with editorial styling and responsive performance.',
    liveDemoUrl: 'https://bmw-showroom1.netlify.app',
    githubUrl: 'https://github.com/kishorsv',
    previewGradient: 'from-[#181822] via-[#121214] to-[#0A0A0B]',
    accentColor: '#D8C39A',
    badge: 'Automotive Showcase',
  },
  {
    id: 'lifeos',
    number: '09',
    name: 'LIFEOS',
    category: '09 / AI / PRODUCTIVITY',
    tagline: 'Personal productivity and life-management platform concept featuring an AI Brain, Life Graph, and What-If Simulator.',
    tech: ['React', 'TypeScript', 'Zustand', 'Data Graphs', 'Framer Motion'],
    problem: 'Managing goals, daily tasks, habit analytics, and long-term life decisions across disconnected apps causes cognitive overload.',
    solution: 'Conceptualized a unified personal OS combining Personal Dashboard, AI Brain, What-If Simulator, Life Graph, Goals, and Analytics.',
    result: 'Brings systematic clarity to personal planning, goal execution, and decision simulation.',
    githubUrl: 'https://github.com/kishorsv',
    previewGradient: 'from-[#1A122E] via-[#121214] to-[#0A0A0B]',
    accentColor: '#7C5CFF',
    badge: 'Productivity Concept',
  },
  {
    id: 'smart-framing',
    number: '10',
    name: 'SMART FRAMING',
    category: '10 / WEB / FULL-STACK',
    tagline: 'Modern full-stack web application built with React 19, TypeScript, and Tailwind CSS.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    problem: 'Traditional layout and framing tools are rigid, lack modern responsive mechanics, and slow down creative assembly.',
    solution: 'Developed a component-driven framing application leveraging React 19 concurrent features and fluid Tailwind styling.',
    result: 'Streamlines visual layouts with real-time responsive scaling and clean architectural modularity.',
    githubUrl: 'https://github.com/kishorsv',
    previewGradient: 'from-[#201828] via-[#121214] to-[#0A0A0B]',
    accentColor: '#FF8066',
    badge: 'Modern Web Stack',
  },
];
