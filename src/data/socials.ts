export interface SocialLink {
  name: string;
  url: string;
  username: string;
}

export const personalInfo = {
  name: 'Kishor S V',
  shortName: 'KS',
  primaryRole: 'AI/ML Engineer & Full-Stack Developer',
  location: 'Bengaluru, India',
  eyebrow: "COLLECTION '26",
  email: 'kishorsv.work@gmail.com',
  shortTagline:
    'I build AI-powered products and modern full-stack applications that turn ideas into working solutions.',
  aboutMe: {
    status: '2nd-Year Engineering Student (AI/ML Specialization)',
    focus: 'AI/ML & Modern Full-Stack Development',
    genAiPassion:
      'Passionate about Generative AI, autonomous agents, and building intelligent LLM workflows that solve non-trivial problems.',
    philosophy:
      'I believe in learning by building. Rather than just memorizing theory, I turn complex concepts into production-ready web platforms.',
    careerGoal:
      'Dedicated to becoming a high-impact professional AI/ML engineer and software architect building products used by millions.',
  },
  rotatingRoles: [
    'AI/ML Engineer',
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
