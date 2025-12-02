import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  image: string;
  description: string;
}

export enum ProjectCategory {
  ALL = 'All',
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  CORPORATE = 'Corporate',
  RETAIL = 'Retail',
  BRANDING = 'Outdoor Branding'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}