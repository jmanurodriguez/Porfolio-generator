// import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
// Temporal: comentamos el import de templates hasta configurar el monorepo
// import { getTemplateComponent } from '../../../../packages/templates';

// const prisma = new PrismaClient();

// Función temporal para desarrollo
function getTemplateComponent(sectionType: string, templateIndex: number) {
  // Por ahora devolvemos null, luego conectaremos con el paquete templates
  return null;
}

interface Props {
  params: { slug: string };
}

export default async function PortfolioPage({ params }: Props) {
  // TODO: Re-enable database when configured
  // const portfolio = await prisma.portfolio.findUnique({
  //   where: { slug: params.slug },
  //   include: { sections: true },
  // });
  
  // Mock portfolio data for development
  const portfolio = {
    id: '1',
    title: 'Mi Portfolio Personal',
    slug: params.slug,
    sections: [
      {
        id: '1',
        type: 'HERO',
        order: 1,
        data: {}
      },
      {
        id: '2',
        type: 'PROJECTS',
        order: 2,
        data: {}
      }
    ]
  };
  
  if (!portfolio) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{portfolio.title}</h1>
        {portfolio.sections
          .sort((a: any, b: any) => a.order - b.order)
          .map((section: any) => {
            // Por ahora mostramos solo un div con el tipo de sección
            return (
              <div key={section.id} className="mb-8 p-6 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sección: {section.type}</h2>
                <p className="text-gray-600">Contenido de la sección {section.type} aquí...</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}