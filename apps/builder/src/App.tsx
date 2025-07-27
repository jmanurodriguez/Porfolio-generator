import { useState } from 'react';
import { SectionType } from '@packages/types';

const sections = Object.values(SectionType);

export default function App() {
  const [selectedSection, setSelectedSection] = useState<SectionType>(sections[0]);
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-md p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Secciones</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedSection === section ? 'bg-indigo-100' : ''}`}
                onClick={() => setSelectedSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Plantillas para {selectedSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-32 rounded border border-gray-300 flex items-center justify-center text-gray-500 bg-white"
            >
              Template {i + 1}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}