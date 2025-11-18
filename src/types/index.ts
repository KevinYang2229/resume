export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  summary: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  highlights?: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa?: string;
  honors?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights?: string[];
}

export interface SkillCategory {
  [category: string]: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: SkillCategory;
  experiences: Experience[];
  education: Education[];
  projects: Project[];
}
