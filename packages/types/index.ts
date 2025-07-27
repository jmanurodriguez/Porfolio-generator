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

// Template System Types
export interface TemplateDefinition {
  id: string;
  name: string;
  type: SectionType;
  description: string;
  preview: string;
  component: React.ComponentType<any>;
  defaultProps: Record<string, any>;
  configSchema: TemplateConfigSchema;
}

export interface TemplateConfigSchema {
  fields: TemplateField[];
}

export interface TemplateField {
  name: string;
  type: 'text' | 'textarea' | 'color' | 'number' | 'boolean' | 'select' | 'image';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select type
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

// Section Data Types
export interface SectionData {
  id: string;
  type: SectionType;
  templateId: string;
  order: number;
  config: Record<string, any>;
  content: Record<string, any>;
}

// Portfolio Types
export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  description?: string;
  published: boolean;
  sections: SectionData[];
  theme: PortfolioTheme;
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioTheme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  typography: {
    fontFamily: string;
    headingFamily?: string;
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}