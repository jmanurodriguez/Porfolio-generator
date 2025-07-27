import { useState } from 'react';
import { SectionType } from '@packages/types';
import { templateRegistry, getTemplatesByType, renderTemplate } from '@packages/templates';

const sections = Object.values(SectionType);

export default function App() {
  const [selectedSection, setSelectedSection] = useState<SectionType>(sections[0]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const availableTemplates = getTemplatesByType(selectedSection);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-80 bg-white shadow-lg overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Template Builder</h1>
          
          {/* Section Selector */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Section Types</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedSection === section 
                      ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedSection(section);
                    setSelectedTemplate(null);
                  }}
                >
                  <div className="font-medium">{section}</div>
                  <div className="text-sm opacity-75">
                    {getTemplatesByType(section).length} templates
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Template Selector */}
          {availableTemplates.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {selectedSection} Templates
              </h3>
              <div className="space-y-2">
                {availableTemplates.map((template) => (
                  <button
                    key={template.id}
                    className={`w-full text-left p-3 rounded-lg transition-all border ${
                      selectedTemplate === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="font-medium text-gray-900">{template.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{template.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {availableTemplates.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-gray-500">No templates available for {selectedSection}</p>
              <p className="text-sm text-gray-400 mt-1">Coming soon!</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedTemplate ? `Preview: ${availableTemplates.find(t => t.id === selectedTemplate)?.name}` : `Select a ${selectedSection} Template`}
            </h2>
            {selectedTemplate && (
              <p className="text-gray-600 mt-1">
                {availableTemplates.find(t => t.id === selectedTemplate)?.description}
              </p>
            )}
          </div>

          {/* Template Preview */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            {selectedTemplate ? (
              <div className="min-h-96">
                {renderTemplate(selectedTemplate, {})}
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="text-lg">Select a template to preview</p>
                  <p className="text-sm mt-1">Choose from {availableTemplates.length} available templates</p>
                </div>
              </div>
            )}
          </div>

          {/* Template Stats */}
          {selectedTemplate && (
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Template Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Template ID:</span>
                  <span className="ml-2 font-mono text-gray-900">{selectedTemplate}</span>
                </div>
                <div>
                  <span className="text-gray-600">Section Type:</span>
                  <span className="ml-2 text-gray-900">{selectedSection}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}