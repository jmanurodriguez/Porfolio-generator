import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { getTemplateComponent } from '../../../../packages/templates';

const prisma = new PrismaClient();

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
        .sort((a, b) => a.order - b.order)
        .map((section) => {
          // For now select the first template (index 1) for each section type
          const Component = getTemplateComponent(section.type, 1);
          return (
            <div key={section.id}>
              {Component ? <Component /> : <p>Falta plantilla para {section.type}</p>}
            </div>
          );
        })}
    </div>
  );
}