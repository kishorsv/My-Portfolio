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
    description: 'Foundational languages for problem-solving, algorithms, and high-performance logic.',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'AI / GenAI',
    categoryKey: 'ai-genai',
    description: 'Applied machine learning, generative intelligence, and agent workflows.',
    skills: [
      { name: 'Artificial Intelligence' },
      { name: 'Machine Learning' },
      { name: 'Generative AI' },
      { name: 'AI APIs' },
      { name: 'Prompt Engineering' },
      { name: 'AI Application Development' },
    ],
  },
  {
    title: 'Web Development',
    categoryKey: 'frontend',
    description: 'Crafting responsive, tactile, and high-performance user interfaces.',
    skills: [
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Responsive Web Design' },
      { name: 'CSS Flexbox' },
    ],
  },
  {
    title: 'Backend & Data',
    categoryKey: 'backend',
    description: 'Architecting scalable server logic, REST endpoints, and database models.',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'MongoDB' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Tools & Cloud',
    categoryKey: 'tools',
    description: 'Developer environments, version control, platforms, and deployment workflows.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Google AI Studio' },
      { name: 'Vercel' },
      { name: 'NxtWave / CCBP' },
      { name: 'Kaggle' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'CI/CD' },
    ],
  },
];
