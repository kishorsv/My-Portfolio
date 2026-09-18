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
    stage: 'Academic Milestone',
    title: 'B.E. — Artificial Intelligence (2nd Year)',
    description:
      'Pursuing an AI-focused engineering degree at Mysore Royal Institute of Technology (MRIT). From roots in Shankanahalli village, Karnataka, channeling intense curiosity into engineering disciplined AI and web architectures.',
    skills: ['AI / ML', 'Python', 'DSA', 'Algorithms', 'Discrete Math'],
    highlight: 'Balancing rigorous engineering academics with intensive evening production builds and open source.',
  },
  {
    period: 'Intensive Training',
    stage: 'Structured Foundation',
    title: 'NxtWave CCBP 4.0 Academy & Google Skills',
    description:
      'Completed comprehensive technical curricula covering full-stack development, Python fundamentals, responsive web design, and Google Cloud Generative AI specializations.',
    skills: ['Python', 'Full-Stack', 'Responsive Web Design', 'Google AI Studio'],
    highlight: 'Built end-to-end full-stack architectures and mastered hands-on industry standards.',
  },
  {
    period: 'Algorithmic Mastery',
    stage: 'Core Computing',
    title: 'Advanced Python & DSA Problem Solving',
    description:
      'Deepened problem-solving rigor through Data Structures & Algorithms, dynamic programming, tree traversals, and algorithmic optimization using Python, C++, and Java.',
    skills: ['Advanced Python', 'DSA', 'Time & Space Complexity', 'Problem Solving'],
    highlight: 'Applying algorithmic rigor directly to spatial indexing and search in CivicFind and LifeOS.',
  },
  {
    period: 'Interface Craft',
    stage: 'Modern Web Engineering',
    title: 'Full-Stack & Responsive UI/UX',
    description:
      'Engineered tactile web experiences using React, TypeScript, Tailwind CSS, Bootstrap, Node.js, Express, MongoDB, and SQL with a strong eye for visual art direction.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlight: 'Shipped 10+ live projects and concepts with responsive mobile-first performance.',
  },
  {
    period: 'Frontier AI',
    stage: 'Intelligent Systems',
    title: 'Generative AI & Real-World Deployments',
    description:
      'Architecting Generative AI applications, prompt engineering pipelines, computer vision models, and conversational agents deployed on Vercel and cloud platforms.',
    skills: ['Generative AI', 'Computer Vision', 'Prompt Engineering', 'AI APIs', 'Vercel'],
    highlight: 'Shipped AQENIX AI Career OS, Health Guide AI, and Posture Guardian AI to real users.',
  },
];
