export interface NavLink {
  href: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProjectTag {
  name: string;
  color: string;
}

export interface ProjectDetail {
  features: { id: number; text: string }[];
  technicalDetails: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  details: ProjectDetail;
  githubLink: string;
  delay: number;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  skills: Skill[];
  color: string;
  delay: number;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  dotColor: string;
  timeBadgeColor: string;
  delay: number;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  icon: JSX.Element;
}

export interface CertificationCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  iconBg: string;
  iconTextColor: string;
  certifications: Certification[];
  delay: number;
}

export interface ContactInfo {
  id: number;
  title: string;
  value: string;
  icon: JSX.Element;
  link: string;
}
