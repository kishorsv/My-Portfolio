export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: { name: string; level?: string }[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    categoryKey: 'programming',
    description: 'Foundational languages for problem-solving, algorithms, and systems.',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript / TypeScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'AI / GenAI',
    categoryKey: 'ai-genai',
    description: 'Applied machine learning, generative intelligence, and agent workflows.',
    skills: [
      { name: 'Generative AI' },
      { name: 'LLM Applications' },
      { name: 'AI Agents' },
      { name: 'Prompt Engineering' },
      { name: 'AI APIs & SDKs' },
    ],
  },
  {
    title: 'Frontend',
    categoryKey: 'frontend',
    description: 'Crafting responsive, tactile, and high-performance user interfaces.',
    skills: [
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Responsive UI / UX' },
    ],
  },
  {
    title: 'Backend',
    categoryKey: 'backend',
    description: 'Architecting scalable server logic, secure auth, and data storage.',
    skills: [
      { name: 'Node.js' },
      { name: 'REST APIs' },
      { name: 'Authentication' },
      { name: 'Databases (SQL & NoSQL)' },
    ],
  },
  {
    title: 'Tools & DevOps',
    categoryKey: 'tools',
    description: 'Engineering workflows, version control, and production deployments.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Vercel' },
    ],
  },
];
