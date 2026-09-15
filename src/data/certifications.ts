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
    id: 'cert-nxtwave',
    name: 'CCBP 4.0 Full Stack Web Development & Python',
    issuer: 'NxtWave Disruptive Technologies',
    issueDate: '2024',
    credentialId: 'NXW-CCBP-FS-9428',
    verifyUrl: 'https://certificates.ccbp.in',
    skills: ['Python', 'React', 'Node.js', 'SQL', 'REST APIs'],
    gradient: 'from-[#1a2333] to-[#0d1622]',
    category: 'Full-Stack',
  },
  {
    id: 'cert-google-genai',
    name: 'Generative AI Fundamentals Specialization',
    issuer: 'Google Cloud Skills Boost',
    issueDate: '2024',
    credentialId: 'GCL-GENAI-78210',
    verifyUrl: 'https://cloudskillsboost.google',
    skills: ['Large Language Models', 'Attention Mechanisms', 'Diffusion Models', 'Responsible AI'],
    gradient: 'from-[#19242d] to-[#101920]',
    category: 'Generative AI',
  },
  {
    id: 'cert-msft-linkedin',
    name: 'Career Essentials in Software Development',
    issuer: 'Microsoft & LinkedIn Learning',
    issueDate: '2024',
    credentialId: 'MSFT-LI-SWE-5519',
    verifyUrl: 'https://linkedin.com/learning',
    skills: ['System Design Basics', 'Git Version Control', 'Software Lifecycle', 'Code Quality'],
    gradient: 'from-[#16272e] to-[#0d171c]',
    category: 'Software Engineering',
  },
  {
    id: 'cert-kaggle-ml',
    name: 'Machine Learning & Python Micro-Courses',
    issuer: 'Kaggle',
    issueDate: '2024',
    credentialId: 'KGL-ML-PY-4402',
    verifyUrl: 'https://kaggle.com/learn',
    skills: ['Pandas', 'Feature Engineering', 'Random Forests', 'Model Validation'],
    gradient: 'from-[#152538] to-[#0c1824]',
    category: 'Machine Learning',
  },
  {
    id: 'cert-prompt-eng',
    name: 'Prompt Engineering for Developer Workflows',
    issuer: 'DeepLearning.AI & OpenAI',
    issueDate: '2024',
    credentialId: 'DLAI-PE-8841',
    verifyUrl: 'https://deeplearning.ai',
    skills: ['System Prompts', 'Few-Shot Learning', 'Chain-of-Thought', 'Structured Parsing'],
    gradient: 'from-[#1b2633] to-[#101720]',
    category: 'Generative AI',
  },
];
