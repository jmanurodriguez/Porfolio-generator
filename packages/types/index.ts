// Shared TypeScript types for the portfolio generator monorepo

export enum SectionType {
  NAVBAR = 'NAVBAR',
  HEADER = 'HEADER',
  HERO = 'HERO',
  CARDS = 'CARDS',
  GALLERY = 'GALLERY',
  FORM = 'FORM',
  TECHNOLOGIES = 'TECHNOLOGIES',
  CERTIFICATIONS = 'CERTIFICATIONS',
  EXPERIENCE = 'EXPERIENCE',
  FOOTER = 'FOOTER',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

// Template system types
export interface TemplateProps {
  content?: any;
  theme?: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    radius: number;
  };
  className?: string;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  type: SectionType;
  description: string;
  preview: string; // URL to preview image
  defaultContent: any;
  component: React.ComponentType<TemplateProps>;
}

export interface PortfolioSection {
  id: string;
  portfolioId: string;
  type: SectionType;
  templateId: string;
  order: number;
  content: any;
  isVisible: boolean;
}