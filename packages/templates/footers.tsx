"use client";

import React from 'react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Footer Template Components
const MinimalFooter: React.FC<any> = ({ data, config = {} }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} {data?.name || 'Your Name'}. All rights reserved.
        </p>
        {data?.socialLinks && data.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-6 mt-4">
            {data.socialLinks.map((link: any, index: number) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

const ComprehensiveFooter: React.FC<any> = ({ data, config = {} }) => {
  const sections = data?.sections || [];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{data?.name || 'Your Name'}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {data?.description || 'Building amazing digital experiences with passion and creativity.'}
            </p>
          </div>
          
          {/* Dynamic Sections */}
          {sections.map((section: any, index: number) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links?.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {data?.name || 'Your Name'}. All rights reserved.
          </p>
          {data?.socialLinks && (
            <div className="flex space-x-4 mt-4 md:mt-0">
              {data.socialLinks.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

const NewsletterFooter: React.FC<any> = ({ data, config = {} }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-blue-100 mb-6">
              {data?.newsletterText || 'Get the latest updates on my projects and insights delivered to your inbox.'}
            </p>
          </div>
          
          <div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} {data?.name || 'Your Name'}. All rights reserved.
          </p>
          {data?.socialLinks && (
            <div className="flex space-x-4 mt-4 md:mt-0">
              {data.socialLinks.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-blue-200 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

const ContactFooter: React.FC<any> = ({ data, config = {} }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {data?.email && (
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">{data.email}</span>
                </div>
              )}
              {data?.phone && (
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">{data.phone}</span>
                </div>
              )}
              {data?.location && (
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{data.location}</span>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {data?.quickLinks?.map((link: any, index: number) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
            {data?.socialLinks && (
              <div className="flex space-x-4">
                {data.socialLinks.map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {data?.name || 'Your Name'}. Built with ❤️ using React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

const CreativeFooter: React.FC<any> = ({ data, config = {} }) => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {data?.ctaText || 'Ready to turn your ideas into reality? Let\'s collaborate and build the future together.'}
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <a
            href={data?.ctaLink || '#contact'}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            {data?.ctaButton || 'Start a Project'}
          </a>
        </div>
        
        {data?.socialLinks && (
          <div className="flex justify-center space-x-8 mb-8">
            {data.socialLinks.map((link: any, index: number) => (
              <a
                key={index}
                href={link.url}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform.charAt(0).toUpperCase()}
              </a>
            ))}
          </div>
        )}
        
        <div className="text-center border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {data?.name || 'Your Name'}. Crafted with passion and pixels.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Template Definitions
export const footerTemplates: TemplateDefinition[] = [
  {
    id: 'minimal-footer',
    name: 'Minimal Footer',
    description: 'Clean and simple footer with copyright and social links',
    type: SectionType.FOOTER,
    preview: '/previews/minimal-footer.jpg',
    component: MinimalFooter,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'comprehensive-footer',
    name: 'Comprehensive Footer',
    description: 'Multi-column footer with navigation and detailed information',
    type: SectionType.FOOTER,
    preview: '/previews/comprehensive-footer.jpg',
    component: ComprehensiveFooter,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'newsletter-footer',
    name: 'Newsletter Footer',
    description: 'Footer with newsletter signup and gradient background',
    type: SectionType.FOOTER,
    preview: '/previews/newsletter-footer.jpg',
    component: NewsletterFooter,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'contact-footer',
    name: 'Contact Footer',
    description: 'Footer with contact information and quick navigation',
    type: SectionType.FOOTER,
    preview: '/previews/contact-footer.jpg',
    component: ContactFooter,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'creative-footer',
    name: 'Creative Footer',
    description: 'Bold design with call-to-action and creative elements',
    type: SectionType.FOOTER,
    preview: '/previews/creative-footer.jpg',
    component: CreativeFooter,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
];
