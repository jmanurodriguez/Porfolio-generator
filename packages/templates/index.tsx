// Export all template components
export * from './navbars';
export * from './heroes';
export * from './cards';
export * from './galleries';
export * from './technologies';
export * from './footers';

// Template registry for dynamic loading
import React from 'react';
import { SectionType, TemplateDefinition } from '@packages/types';

// Import all template definitions
import { navbarTemplates } from './navbars';
import { heroTemplates } from './heroes';
import { cardTemplates } from './cards';
import { galleryTemplates } from './galleries';
import { technologyTemplates } from './technologies';
import { footerTemplates } from './footers';

// Main template registry
export const templateRegistry: Record<SectionType, TemplateDefinition[]> = {
  [SectionType.NAVBAR]: navbarTemplates,
  [SectionType.HEADER]: [], // Alias for HERO
  [SectionType.HERO]: heroTemplates,
  [SectionType.CARDS]: cardTemplates,
  [SectionType.GALLERY]: galleryTemplates, // Gallery templates added
  [SectionType.FORM]: [], // TODO: Implement
  [SectionType.TECHNOLOGIES]: technologyTemplates, // Technology templates added
  [SectionType.CERTIFICATIONS]: [], // TODO: Implement
  [SectionType.EXPERIENCE]: [], // TODO: Implement
    [SectionType.FOOTER]: footerTemplates,   // Footer templates added
};

// Get all templates for a specific section type
export const getTemplatesByType = (type: SectionType): TemplateDefinition[] => {
  return templateRegistry[type] || [];
};

// Get a specific template by ID
export const getTemplateById = (id: string): TemplateDefinition | undefined => {
  for (const templates of Object.values(templateRegistry)) {
    const template = templates.find(t => t.id === id);
    if (template) return template;
  }
  return undefined;
};

// Get all available templates
export const getAllTemplates = (): TemplateDefinition[] => {
  return Object.values(templateRegistry).flat();
};

// Template component renderer
export const renderTemplate = (templateId: string, props: any) => {
  const template = getTemplateById(templateId);
  if (!template) {
    console.warn(`Template with ID "${templateId}" not found`);
    return null;
  }
  
  const Component = template.component as React.FC<any>;
  const mergedProps = { ...template.defaultProps, ...props };
  
  return React.createElement(Component, mergedProps);
};
