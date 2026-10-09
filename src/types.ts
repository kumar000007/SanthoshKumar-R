export interface Project {
  id: string;
  title: string;
  category: 'data-science' | 'full-stack';
  shortDescription: string;
  problemStatement: string;
  keyApproach: string;
  resultImpact: string;
  technologies: string[];
  image: string;
  architecture?: string;
  frontendTech?: string[];
  backendTech?: string[];
  database?: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProfilePhotoOption {
  id: string;
  name: string;
  description: string;
  tag: string;
  url: string;
}

