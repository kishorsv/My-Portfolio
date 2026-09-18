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
    id: 'achieve-athletics-sports',
    category: 'Sports',
    title: 'Athletics, Running & Volleyball',
    organization: 'MRIT Sports & Inter-Collegiate Competitions',
    year: '2023 — Present',
    description:
      'Active runner, track athlete, and competitive volleyball player. The discipline of athletic conditioning, mental resilience over long distances, and split-second team coordination directly informs my engineering persistence.',
    badge: 'Athletics & Stamina',
    accent: '#D8C39A',
  },
  {
    id: 'achieve-civic-tech',
    category: 'Hackathon',
    title: 'CivicFind India & GovTech Solutions',
    organization: 'Civic Tech & Open Innovation Sprints',
    year: '2024',
    description:
      'Engineered CivicFind India to map government offices and streamline public service discovery for citizens with interactive map routing, reducing municipal lookup friction.',
    badge: 'Civic Impact',
    accent: '#7C5CFF',
  },
  {
    id: 'achieve-creative-arts',
    category: 'Engineering',
    title: 'Visual Arts, Storytelling & Creative Writing',
    organization: 'Personal Craft & Creative Pursuits',
    year: 'Ongoing',
    description:
      'Outside engineering, I am passionate about drawing, painting, dance, storytelling, writing, and blogging. This artistic foundation shapes my meticulous approach to UI/UX, typography, and visual product design.',
    badge: 'Design & Arts',
    accent: '#FF8066',
  },
  {
    id: 'achieve-impact-research',
    category: 'Engineering',
    title: 'Severe Weather & Vernacular AI Research',
    organization: 'Independent Engineering Exploration',
    year: '2024 — Present',
    description:
      'Actively exploring solutions for severe weather intelligence / nowcasting, vernacular language technologies, real-time translation, and accessible government service discovery.',
    badge: 'Social Impact AI',
    accent: '#6EE7B7',
  },
];
