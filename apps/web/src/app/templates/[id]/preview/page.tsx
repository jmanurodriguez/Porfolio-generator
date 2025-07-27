"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Eye, Code2 } from 'lucide-react';
import { navbarTemplates } from '@packages/templates/navbars';
import { heroTemplates } from '@packages/templates/heroes';
import { cardTemplates } from '@packages/templates/cards';
import { galleryTemplates } from '@packages/templates/galleries';
import { technologyTemplates } from '@packages/templates/technologies';
import { footerTemplates } from '@packages/templates/footers';

const allTemplates = (() => {
  const templates = [];
  templates.push(...navbarTemplates);
  templates.push(...heroTemplates);
  templates.push(...cardTemplates);
  templates.push(...galleryTemplates);
  templates.push(...technologyTemplates);
  templates.push(...footerTemplates);
  return templates;
})();

interface PreviewPageProps {
  params: { id: string };
}

export default function TemplatePage({ params }: PreviewPageProps) {
  const template = allTemplates.find(t => t.id === params.id);
  
  if (!template) {
    notFound();
  }

  const TemplateComponent = template.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link 
                href="/templates" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Templates
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{template.name}</h1>
                <p className="text-sm text-gray-500">{template.description}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {template.name.includes('Premium') && (
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ✨ PREMIUM
                </span>
              )}
              <Link
                href={`/templates/${template.id}/customize`}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Customize
              </Link>
              <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Live Preview */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {/* Preview Header */}
          <div className="bg-gray-100 px-6 py-3 border-b flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                <div className="h-3 w-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-600 font-mono">
                portfolio-template-preview.com
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Eye className="h-4 w-4" />
              <span>Live Preview</span>
            </div>
          </div>

          {/* Component Preview */}
          <div className="min-h-[600px] bg-white">
            <TemplateComponent {...template.defaultProps} />
          </div>
        </div>

        {/* Template Info */}
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Template</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {template.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Fully Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Modern CSS/Tailwind
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    TypeScript Support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Customizable Props
                  </li>
                  {template.name.includes('Premium') && (
                    <>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        Smooth Animations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        Advanced Interactions
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-28">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link
                  href={`/templates/${template.id}/customize`}
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  Customize & Download
                </Link>
                
                <button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors">
                  <Eye className="h-4 w-4 mr-2" />
                  View Code
                </button>
                
                <button className="w-full flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-3 rounded-lg transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Download ZIP
                </button>
              </div>

              {/* Config Options Preview */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Customizable Options</h4>
                <div className="space-y-2">
                  {template.configSchema.fields.map((field: any) => (
                    <div key={field.name} className="flex justify-between text-sm">
                      <span className="text-gray-600">{field.label}</span>
                      <span className="text-blue-600 capitalize">{field.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
