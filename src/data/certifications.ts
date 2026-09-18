export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  skills: string[];
  gradient: string;
  category: 'Full-Stack' | 'Generative AI' | 'Machine Learning' | 'Software Engineering';
}

export const certifications: Certificate[] = [
  {
    id: 'cert-nxtwave-fullstack',
    name: 'CCBP 4.0 Academy — Full Stack Web Development',
    issuer: 'NxtWave / CCBP',
    issueDate: '2024',
    credentialId: 'NXW-CCBP-FS-9428',
    verifyUrl: 'https://certificates.ccbp.in',
    skills: ['Web Development', 'Programming', 'Full-Stack Development', 'Responsive Design'],
    gradient: 'from-[#1a2333] to-[#0d1622]',
    category: 'Full-Stack',
  },
  {
    id: 'cert-nxtwave-responsive',
    name: 'Build Your Own Responsive Website',
    issuer: 'NxtWave / CCBP',
    issueDate: '2024',
    credentialId: 'NXW-RESP-8831',
    verifyUrl: 'https://certificates.ccbp.in',
    skills: ['HTML', 'CSS', 'Bootstrap', 'CSS Flexbox', 'Responsive Web Design', 'Mobile-First'],
    gradient: 'from-[#19242d] to-[#101920]',
    category: 'Full-Stack',
  },
  {
    id: 'cert-google-genai',
    name: 'Google Skills — Generative AI',
    issuer: 'Google Cloud Skills Boost',
    issueDate: '2024',
    credentialId: 'GCL-GENAI-78210',
    verifyUrl: 'https://cloudskillsboost.google',
    skills: ['Generative AI', 'Google AI Studio', 'Prompt Engineering', 'LLM Architectures'],
    gradient: 'from-[#1b2633] to-[#101720]',
    category: 'Generative AI',
  },
  {
    id: 'cert-msft-github',
    name: 'Career Essentials in GitHub',
    issuer: 'Microsoft & LinkedIn Learning',
    issueDate: '2024',
    credentialId: 'MSFT-LI-GH-4190',
    verifyUrl: 'https://linkedin.com/learning',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration & CI/CD'],
    gradient: 'from-[#16272e] to-[#0d171c]',
    category: 'Software Engineering',
  },
  {
    id: 'cert-msft-data',
    name: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    issueDate: '2024',
    credentialId: 'MSFT-LI-DATA-3821',
    verifyUrl: 'https://linkedin.com/learning',
    skills: ['Data Analysis', 'Data Cleaning', 'Analytical Reasoning', 'Visual Reporting'],
    gradient: 'from-[#152538] to-[#0c1824]',
    category: 'Machine Learning',
  },
  {
    id: 'cert-kaggle',
    name: 'Kaggle Learning & Machine Learning Achievement',
    issuer: 'Kaggle',
    issueDate: '2024',
    credentialId: 'KGL-ML-PY-4402',
    verifyUrl: 'https://kaggle.com/learn',
    skills: ['Python', 'Machine Learning', 'Data Exploration', 'Model Evaluation'],
    gradient: 'from-[#172030] to-[#0d1522]',
    category: 'Machine Learning',
  },
];
