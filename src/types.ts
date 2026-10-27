export interface Certification {
  code: string;
  name: string;
  issuer: string;
  category: 'Architect' | 'Developer' | 'Cloud' | 'AI' | 'Fundamentals';
  badgeColor: string;
  description: string;
}

export interface EnterpriseCaseStudy {
  id: string;
  title: string;
  clientContext: string;
  role: string;
  timeline: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  challenge: string;
  architectureSolution: string[];
  keyEngineeringTriumph: string;
  technologies: string[];
  tag: string;
}

export interface TechnicalProject {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  overview: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  evaluationMetric?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  keyAchievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    featured?: boolean;
  }[];
}
