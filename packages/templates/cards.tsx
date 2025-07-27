import React from 'react';
import { TemplateProps } from '@packages/types';

// Cards Template 1 - Grid Layout
export function CardsGridLayout({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'My Projects',
    projects = [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with React and Node.js',
        image: '/placeholder-project.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates',
        image: '/placeholder-project.jpg',
        technologies: ['Vue.js', 'Express', 'Socket.io'],
        link: '#'
      },
      {
        id: 3,
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing creative work',
        image: '/placeholder-project.jpg',
        technologies: ['Next.js', 'Tailwind', 'Vercel'],
        link: '#'
      }
    ]
  } = content || {};
  
  return (
    <section className={`py-16 px-6 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cards Template 2 - Masonry Layout
export function CardsMasonryLayout({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'Featured Work',
    projects = [
      {
        id: 1,
        title: 'Mobile App Design',
        category: 'UI/UX',
        image: '/placeholder-project.jpg',
        link: '#'
      },
      {
        id: 2,
        title: 'Brand Identity',
        category: 'Branding',
        image: '/placeholder-project.jpg',
        link: '#'
      },
      {
        id: 3,
        title: 'Web Development',
        category: 'Development',
        image: '/placeholder-project.jpg',
        link: '#'
      }
    ]
  } = content || {};
  
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project: any) => (
            <div key={project.id} className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-purple-600 font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {project.title}
                </h3>
                <a 
                  href={project.link}
                  className="inline-block mt-3 text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cards Template 3 - Horizontal Scroll
export function CardsHorizontalScroll({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'Recent Projects',
    projects = [
      {
        id: 1,
        title: 'Project Alpha',
        description: 'Description of project alpha',
        image: '/placeholder-project.jpg',
        status: 'Completed'
      },
      {
        id: 2,
        title: 'Project Beta',
        description: 'Description of project beta',
        image: '/placeholder-project.jpg',
        status: 'In Progress'
      },
      {
        id: 3,
        title: 'Project Gamma',
        description: 'Description of project gamma',
        image: '/placeholder-project.jpg',
        status: 'Planning'
      }
    ]
  } = content || {};
  
  return (
    <section className={`py-16 px-6 bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          {title}
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {projects.map((project: any) => (
            <div key={project.id} className="flex-none w-80 bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <span className="bg-green-600 text-xs px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cards Template 4 - Minimal Cards
export function CardsMinimal({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'Portfolio',
    projects = [
      {
        id: 1,
        title: 'Project One',
        year: '2024',
        client: 'Client Name',
        link: '#'
      },
      {
        id: 2,
        title: 'Project Two',
        year: '2024',
        client: 'Client Name',
        link: '#'
      },
      {
        id: 3,
        title: 'Project Three',
        year: '2023',
        client: 'Client Name',
        link: '#'
      }
    ]
  } = content || {};
  
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12">
          {title}
        </h2>
        <div className="space-y-8">
          {projects.map((project: any) => (
            <div key={project.id} className="border-b border-gray-200 pb-8 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.client}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-sm">
                    {project.year}
                  </span>
                  <br />
                  <a 
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cards Template 5 - Featured Project
export function CardsFeatured({ content, theme, className = '' }: TemplateProps) {
  const { 
    featuredProject = {
      title: 'Featured Project',
      description: 'This is my most recent and exciting project that showcases my latest skills and technologies.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    otherProjects = [
      { title: 'Project 1', image: '/placeholder-project.jpg', link: '#' },
      { title: 'Project 2', image: '/placeholder-project.jpg', link: '#' },
      { title: 'Project 3', image: '/placeholder-project.jpg', link: '#' }
    ]
  } = content || {};
  
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {featuredProject.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.technologies.map((tech: string, index: number) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={featuredProject.liveUrl}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Live Demo
              </a>
              <a 
                href={featuredProject.githubUrl}
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        
        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project: any, index: number) => (
            <div key={index} className="group cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-3 group-hover:text-indigo-600 transition-colors duration-200">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
