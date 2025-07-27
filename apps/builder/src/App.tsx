import { useState } from 'react';
import { SectionType } from '@packages/types';
import { TEMPLATE_REGISTRY, getTemplatesByType } from '@packages/templates';

const sections = Object.values(SectionType);

export default function App() {
  const [selectedSection, setSelectedSection] = useState<SectionType>(sections[0]);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const templates = getTemplatesByType(selectedSection);
  const currentTemplate = templates.find(t => t.id === selectedTemplate);
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 overflow-y-auto border-r">
        <h2 className="text-xl font-semibold mb-4">Secciones</h2>
        <ul className="space-y-2 mb-6">
          {sections.map((section) => (
            <li key={section}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                  selectedSection === section ? 'bg-indigo-100 text-indigo-800' : ''
                }`}
                onClick={() => {
                  setSelectedSection(section);
                  setSelectedTemplate(null);
                }}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Templates for selected section */}
        {templates.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-3">Templates</h3>
            <div className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  className={`w-full text-left p-3 rounded-md border hover:bg-gray-50 transition-colors ${
                    selectedTemplate === template.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="font-medium text-sm">{template.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{template.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </aside>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-6 py-4">
          <h1 className="text-2xl font-bold">Templates para {selectedSection}</h1>
          {currentTemplate && (
            <p className="text-gray-600 mt-1">{currentTemplate.description}</p>
          )}
        </header>
        
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {currentTemplate ? (
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-2 text-sm">
                  Preview: {currentTemplate.name}
                </div>
                <div className="min-h-[400px]">
                  <currentTemplate.component content={currentTemplate.defaultContent} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl font-medium text-gray-600 mb-2">
                  Selecciona un template para ver la vista previa
                </h2>
                <p className="text-gray-500">
                  Hay {templates.length} templates disponibles para {selectedSection}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}