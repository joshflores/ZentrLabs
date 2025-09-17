export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  title: string;
  description: string;
  metric: string;
  impact: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}