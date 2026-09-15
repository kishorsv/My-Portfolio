export interface AchievementItem {
  id: string;
  category: 'Sports' | 'Hackathon' | 'College Events' | 'Open Source' | 'Engineering';
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  accent: string;
}

export const achievements: AchievementItem[] = [
  {
    id: 'achieve-state-sports',
    category: 'Sports',
    title: 'State-Level Sports Achievement',
    organization: 'State Sports Association / Karnataka State Championship',
    year: '2023',
    description:
      'Represented institution and district at the Karnataka State Level Sports Championship. Honed extreme physical stamina, competitive discipline, high-pressure focus, and unwavering teamwork that directly informs engineering work ethic.',
    badge: 'State Representation',
    accent: '#89AACC',
  },
  {
    id: 'achieve-hackathon',
    category: 'Hackathon',
    title: 'Finalist / Top Innovator — AI & Civic Tech Challenge',
    organization: 'Inter-College Hackathon Series',
    year: '2024',
    description:
      'Led 24-hour sprint developing CivicFind India. Solved municipal routing and vernacular Kannada natural language queries, presenting prototype to industry judges and municipal stakeholders.',
    badge: 'Civic Innovation',
    accent: '#4E85BF',
  },
  {
    id: 'achieve-college-tech',
    category: 'College Events',
    title: 'Technical Presentation & Event Lead',
    organization: 'Department of AI & Machine Learning',
    year: '2024',
    description:
      'Organized and delivered hands-on technical workshops on "Building Your First LLM Agent with LangChain" for 120+ first and second-year engineering peers.',
    badge: 'Peer Leadership',
    accent: '#5C93C4',
  },
  {
    id: 'achieve-open-source',
    category: 'Open Source',
    title: 'Public Open-Source Tooling & Repositories',
    organization: 'GitHub Community',
    year: '2024 — Present',
    description:
      'Published 15+ open-source repositories spanning edge AI posture estimators, Kannada transliteration utilities, and local-first productivity systems with clean MIT licensing.',
    badge: 'Open Ecosystem',
    accent: '#72A1CF',
  },
];
