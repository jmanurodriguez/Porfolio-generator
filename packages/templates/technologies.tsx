"use client";

import React from 'react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Technology Template Components
const IconGridTech: React.FC<any> = ({ data, config = {} }) => {
  const technologies = data?.technologies || [];
  const columns = config.columns || 4;
  
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Technologies & Skills'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-6`}>
        {technologies.map((tech: any, index: number) => (
          <div key={index} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              {tech.icon ? (
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              ) : (
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              )}
            </div>
            <h3 className="font-medium text-gray-900">{tech.name}</h3>
            {tech.level && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{tech.level}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const CategoryTech: React.FC<any> = ({ data, config = {} }) => {
  const categories = data?.categories || [];
  
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Technical Skills'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className="space-y-8">
        {categories.map((category: any, index: number) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.technologies?.map((tech: any, techIndex: number) => (
                <div key={techIndex} className="flex items-center space-x-3">
                  {tech.icon && (
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  )}
                  <span className="text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProgressBarTech: React.FC<any> = ({ data, config = {} }) => {
  const technologies = data?.technologies || [];
  
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Skills & Proficiency'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className="space-y-6">
        {technologies.map((tech: any, index: number) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {tech.icon && (
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                )}
                <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
              </div>
              <span className="text-blue-600 font-semibold">{tech.level || 0}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${tech.level || 0}%` }}
              ></div>
            </div>
            {tech.years && (
              <p className="text-sm text-gray-500 mt-2">{tech.years} years of experience</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const CloudTech: React.FC<any> = ({ data, config = {} }) => {
  const technologies = data?.technologies || [];
  
  const getDeterministicSize = (techName: string, index: number) => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
    // Simple hash based on techName and index
    let hash = 0;
    const str = techName + index;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const sizeIndex = Math.abs(hash) % sizes.length;
    return sizes[sizeIndex];
  };
  
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Technology Stack'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech: any, index: number) => (
          <span 
            key={index}
            className={`inline-block px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-105 ${getDeterministicSize(tech.name, index)}`}
            style={{ 
              color: tech.color || '#6B7280',
              fontWeight: tech.level ? Math.min(600, 300 + (tech.level * 3)) : 400
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

const TimelineTech: React.FC<any> = ({ data, config = {} }) => {
  const timeline = data?.timeline || [];
  
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Technology Journey'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div className="space-y-8">
          {timeline.map((period: any, index: number) => (
            <div key={index} className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {period.year}
              </div>
              <div className="ml-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {period.title}
                </h3>
                <p className="text-gray-600 mb-4">{period.description}</p>
                <div className="flex flex-wrap gap-2">
                  {period.technologies?.map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Template Definitions
export const technologyTemplates: TemplateDefinition[] = [
  {
    id: 'icon-grid-tech',
    name: 'Icon Grid Technologies',
    description: 'Grid layout with technology icons and skill levels',
    type: SectionType.TECHNOLOGIES,
    preview: '/previews/icon-grid-tech.jpg',
    component: IconGridTech,
    defaultProps: {},
    configSchema: {
      fields: [
        {
          name: 'columns',
          type: 'number',
          label: 'Number of Columns',
          validation: {
            min: 2,
            max: 6,
          },
        },
      ],
    },
  },
  {
    id: 'category-tech',
    name: 'Categorized Technologies',
    description: 'Technologies organized by categories with clean layout',
    type: SectionType.TECHNOLOGIES,
    preview: '/previews/category-tech.jpg',
    component: CategoryTech,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'progress-bar-tech',
    name: 'Progress Bar Skills',
    description: 'Skills with animated progress bars and proficiency levels',
    type: SectionType.TECHNOLOGIES,
    preview: '/previews/progress-bar-tech.jpg',
    component: ProgressBarTech,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'cloud-tech',
    name: 'Technology Cloud',
    description: 'Tag cloud style display with varying sizes and colors',
    type: SectionType.TECHNOLOGIES,
    preview: '/previews/cloud-tech.jpg',
    component: CloudTech,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'timeline-tech',
    name: 'Technology Timeline',
    description: 'Chronological view of technology adoption and learning',
    type: SectionType.TECHNOLOGIES,
    preview: '/previews/timeline-tech.jpg',
    component: TimelineTech,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
];
