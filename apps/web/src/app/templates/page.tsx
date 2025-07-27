"use client";

import Link from 'next/link';
import Image from 'next/image';
import { navbarTemplates } from '@packages/templates/navbars';
import { heroTemplates } from '@packages/templates/heroes';
import { cardTemplates } from '@packages/templates/cards';
import { galleryTemplates } from '@packages/templates/galleries';
import { technologyTemplates } from '@packages/templates/technologies';
import { footerTemplates } from '@packages/templates/footers';

const allTemplates = [
  ...navbarTemplates,
  ...heroTemplates,
  ...cardTemplates,
  ...galleryTemplates,
  ...technologyTemplates,
  ...footerTemplates,
];

export default function TemplatesGallery() {
  const templatesByType = allTemplates.reduce((acc, template) => {
    if (!acc[template.type]) {
      acc[template.type] = [];
    }
    acc[template.type].push(template);
    return acc;
  }, {} as Record<string, typeof allTemplates>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Portfolio Generator
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/templates" className="text-blue-600 font-medium">
                Templates
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Portfolio 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Templates
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Choose from our collection of stunning, responsive templates. Customize with your content and download ready-to-use code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#templates" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse Templates
            </a>
            <Link 
              href="/dashboard" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Start Building
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{allTemplates.length}+</div>
              <div className="text-gray-600">Templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{Object.keys(templatesByType).length}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">Responsive</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">React</div>
              <div className="text-gray-600">& Next.js</div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section id="templates" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {Object.entries(templatesByType).map(([type, templates]) => (
            <div key={type} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
                {type.toLowerCase().replace('_', ' ')} Templates
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({templates.length} templates)
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template) => (
                  <div 
                    key={template.id}
                    className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    {/* Preview Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">
                          {type === 'NAVBAR' && '🧭'}
                          {type === 'HERO' && '🚀'}
                          {type === 'CARDS' && '🎨'}
                          {type === 'GALLERY' && '🖼️'}
                          {type === 'TECHNOLOGIES' && '⚡'}
                          {type === 'FOOTER' && '🔗'}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {/* Premium Badge */}
                      {template.name.includes('Premium') && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            ✨ PREMIUM
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {template.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {template.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Link
                            href={`/templates/${template.id}/preview`}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            Preview
                          </Link>
                          <span className="text-gray-300">•</span>
                          <Link
                            href={`/templates/${template.id}/customize`}
                            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                          >
                            Customize
                          </Link>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                          Use Template
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start with a template, customize it to match your style, and download production-ready code.
          </p>
          <Link 
            href="/dashboard" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            Start Building Now 🚀
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfolio Generator</h3>
              <p className="text-gray-400">
                Build stunning portfolios with our premium templates and tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Templates</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/templates?type=navbar">Navbars</Link></li>
                <li><Link href="/templates?type=hero">Heroes</Link></li>
                <li><Link href="/templates?type=cards">Cards</Link></li>
                <li><Link href="/templates?type=galleries">Galleries</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Portfolio Generator. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
