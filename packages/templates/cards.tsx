"use client";

// Cards templates for projects
import React from 'react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Template 1: Grid Cards
export const GridCards: React.FC<any> = ({ 
  title = "Featured Projects",
  subtitle = "Some of my recent work",
  projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/project2.jpg",
      tags: ["Vue.js", "Firebase", "PWA"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio built with Next.js and Tailwind CSS",
      image: "/project3.jpg",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      link: "#"
    }
  ]
}) => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any, index: number) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Template 2: Masonry Cards
export const MasonryCards: React.FC<any> = ({ 
  title = "My Work",
  projects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand redesign for a tech startup",
      image: "/project1.jpg",
      category: "Design",
      link: "#"
    },
    {
      title: "Mobile App Development",
      description: "iOS and Android app with React Native",
      image: "/project2.jpg",
      category: "Development",
      link: "#"
    },
    {
      title: "Website Redesign",
      description: "Modern website with improved UX",
      image: "/project3.jpg",
      category: "Web Design",
      link: "#"
    }
  ]
}) => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
        {title}
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {projects.map((project: any, index: number) => (
          <div key={index} className="break-inside-avoid mb-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Template 3: Carousel Cards
export const CarouselCards: React.FC<any> = ({ 
  title = "Recent Projects",
  subtitle = "Swipe to explore my latest work",
  projects = [
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      image: "/project1.jpg",
      technologies: ["React", "D3.js", "Node.js"],
      link: "#"
    },
    {
      title: "E-learning Platform",
      description: "Online learning platform with video streaming",
      image: "/project2.jpg",
      technologies: ["Next.js", "Prisma", "Stripe"],
      link: "#"
    }
  ]
}) => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600">
          {subtitle}
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-6 pb-6">
        {projects.map((project: any, index: number) => (
          <div key={index} className="flex-none w-80">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Template 4: Featured Card
export const FeaturedCard: React.FC<any> = ({ 
  title = "Featured Project",
  project = {
    title: "Revolutionary Web App",
    description: "A comprehensive web application that transforms how users interact with data. Built with modern technologies and designed for scale.",
    image: "/featured-project.jpg",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: ["Real-time updates", "Advanced analytics", "Mobile responsive", "API integration"],
    link: "#",
    github: "#"
  }
}) => (
  <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
        {title}
      </h2>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-square lg:aspect-auto">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <a 
                href={project.link}
                className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Live Demo
              </a>
              <a 
                href={project.github}
                className="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Template 5: Minimal Cards
export const MinimalCards: React.FC<any> = ({ 
  title = "Selected Work",
  projects = [
    {
      title: "Project Alpha",
      year: "2024",
      category: "Web Development",
      link: "#"
    },
    {
      title: "Project Beta",
      year: "2023",
      category: "Mobile App",
      link: "#"
    },
    {
      title: "Project Gamma",
      year: "2023",
      category: "UI/UX Design",
      link: "#"
    }
  ]
}) => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
        {title}
      </h2>
      <div className="space-y-8">
        {projects.map((project: any, index: number) => (
          <a 
            key={index}
            href={project.link}
            className="block group"
          >
            <div className="border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {project.category}
                  </p>
                </div>
                <span className="text-gray-400 text-lg">
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Template Definitions
export const cardTemplates: TemplateDefinition[] = [
  {
    id: 'cards-grid',
    name: 'Grid Layout',
    type: SectionType.CARDS,
    description: 'Classic grid layout with project cards',
    preview: '/templates/cards-grid.png',
    component: GridCards,
    defaultProps: {
      title: "Featured Projects",
      subtitle: "Some of my recent work",
      projects: [
        {
          title: "E-commerce Platform",
          description: "A modern e-commerce solution built with React and Node.js",
          image: "/project1.jpg",
          tags: ["React", "Node.js", "MongoDB"],
          link: "#"
        }
      ]
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Section Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
      ]
    }
  },
  {
    id: 'cards-masonry',
    name: 'Masonry Layout',
    type: SectionType.CARDS,
    description: 'Pinterest-style masonry grid',
    preview: '/templates/cards-masonry.png',
    component: MasonryCards,
    defaultProps: {
      title: "My Work",
      projects: []
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Section Title', required: true },
      ]
    }
  },
  {
    id: 'cards-carousel',
    name: 'Carousel',
    type: SectionType.CARDS,
    description: 'Horizontal scrolling carousel',
    preview: '/templates/cards-carousel.png',
    component: CarouselCards,
    defaultProps: {
      title: "Recent Projects",
      subtitle: "Swipe to explore my latest work",
      projects: []
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Section Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
      ]
    }
  },
  {
    id: 'cards-featured',
    name: 'Featured Project',
    type: SectionType.CARDS,
    description: 'Showcase a single featured project',
    preview: '/templates/cards-featured.png',
    component: FeaturedCard,
    defaultProps: {
      title: "Featured Project",
      project: {
        title: "Revolutionary Web App",
        description: "A comprehensive web application that transforms how users interact with data.",
        image: "/featured-project.jpg",
        technologies: ["React", "TypeScript", "Node.js"],
        features: ["Real-time updates", "Advanced analytics"],
        link: "#",
        github: "#"
      }
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Section Title', required: true },
      ]
    }
  },
  {
    id: 'cards-minimal',
    name: 'Minimal List',
    type: SectionType.CARDS,
    description: 'Clean minimal project listing',
    preview: '/templates/cards-minimal.png',
    component: MinimalCards,
    defaultProps: {
      title: "Selected Work",
      projects: []
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Section Title', required: true },
      ]
    }
  }
];
