import Link from 'next/link';
import { Suspense } from 'react';
// import { auth } from '../../../lib/auth';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

type Portfolio = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default async function PortfoliosPage() {
  // TODO: Re-enable authentication and database when properly configured
  // const session = await auth();
  // if (!session) {
  //   return <p className="p-4">Debes iniciar sesión para ver tus portfolios.</p>;
  // }
  const session = { user: { id: '1', name: 'Demo User' } };
  // TODO: Re-enable database queries when Prisma is configured
  // const portfolios = await prisma.portfolio.findMany({
  //   where: { userId: session.user.id },
  //   orderBy: { createdAt: 'desc' },
  // });
  
  // Mock data for demonstration
  const portfolios: Portfolio[] = [
    {
      id: '1',
      title: 'Mi Portfolio Personal',
      slug: 'mi-portfolio-personal',
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      title: 'Portfolio de Proyectos',
      slug: 'portfolio-de-proyectos',
      published: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Mis Portfolios</h1>
      <Link className="text-blue-600 underline" href="/dashboard/portfolios/new">
        Crear nuevo
      </Link>
      <ul className="space-y-2">
        {portfolios.map((p: Portfolio) => (
          <li key={p.id} className="border p-3 rounded">
            <div className="flex justify-between items-center">
              <span>{p.title}</span>
              <div className="space-x-2">
                <Link className="text-blue-600 underline" href={`/dashboard/portfolios/${p.id}/edit`}>
                  Editar
                </Link>
                <Link className="text-blue-600 underline" href={`/portfolio/${p.slug}`} target="_blank">
                  Ver
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}