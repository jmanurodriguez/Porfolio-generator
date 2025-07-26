import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
// Temporal: comentamos el import de templates hasta configurar el monorepo
// import { getTemplateComponent } from '../../../../packages/templates';

const prisma = new PrismaClient();

// Función temporal para desarrollo
function getTemplateComponent(sectionType: string, templateIndex: number) {
  // Por ahora devolvemos null, luego conectaremos con el paquete templates
  return null;
}

interface Props {
  params: { slug: string };
}

export default async function PortfolioPage({ params }: Props) {
  const portfolio = await prisma.portfolio.findUnique({
    where: { slug: params.slug },
    include: { sections: true },
  });
  if (!portfolio) {
    notFound();
  }
  return (
    <div>
      {portfolio.sections
        .sort((a: any, b: any) => a.order - b.order)
        .map((section: any) => {
          // Por ahora mostramos solo un div con el tipo de sección
          return (
            <div key={section.id}>
              <p>Sección: {section.type}</p>
            </div>
          );
        })}
    </div>
  );
}