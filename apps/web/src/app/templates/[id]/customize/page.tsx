"use client";

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, Eye, Save, Palette, Type, Layout } from 'lucide-react';
import { useState } from 'react';
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

interface CustomizePageProps {
  params: { id: string };
}

export default function CustomizePage({ params }: CustomizePageProps) {
  const template = allTemplates.find(t => t.id === params.id);
  const [customProps, setCustomProps] = useState(template?.defaultProps || {});
  
  if (!template) {
    notFound();
  }

  const TemplateComponent = template.component;

  const handlePropChange = (key: string, value: any) => {
    setCustomProps(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleDownload = () => {
    // TODO: Generate and download the template code
    alert('Download functionality coming soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link 
                href={`/templates/${template.id}/preview`}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Preview
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="font-semibold text-lg text-gray-900">{template.name}</h1>
                <p className="text-sm text-gray-500">Customize Template</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href={`/templates/${template.id}/preview`}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Link>
              <button
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Code
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8 h-[calc(100vh-140px)]">
          {/* Customization Panel */}
          <div className="col-span-4 bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Customize
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Modify the template properties and see changes in real time
              </p>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {template.configSchema?.fields ? (
                <div className="space-y-6">
                  {template.configSchema.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      
                      {field.type === 'text' && (
                        <input
                          type="text"
                          value={customProps[field.name] || ''}
                          onChange={(e) => handlePropChange(field.name, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                      
                      {field.type === 'color' && (
                        <input
                          type="color"
                          value={customProps[field.name] || '#000000'}
                          onChange={(e) => handlePropChange(field.name, e.target.value)}
                          className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
                        />
                      )}
                      
                      {field.type === 'boolean' && (
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={customProps[field.name] || false}
                            onChange={(e) => handlePropChange(field.name, e.target.checked)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-900">Enable</span>
                        </label>
                      )}
                      
                      {field.type === 'select' && field.options && (
                        <select
                          value={customProps[field.name] || ''}
                          onChange={(e) => handlePropChange(field.name, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Layout className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No customization options available for this template</p>
                  <p className="text-sm text-gray-400 mt-2">The template will use its default configuration</p>
                </div>
              )}
            </div>
          </div>

          {/* Live Preview */}
          <div className="col-span-8 bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Live Preview
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Real-time preview of your customized template
              </p>
            </div>
            
            <div className="overflow-auto h-full">
              <div className="p-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <TemplateComponent {...customProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
