import Link from 'next/link';
import { auth } from '../../lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function PortfoliosPage() {
  const session = await auth();
  if (!session) {
    return <p className="p-4">Debes iniciar sesión para ver tus portfolios.</p>;
  }
  const portfolios = await prisma.portfolio.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Mis Portfolios</h1>
      <Link className="text-blue-600 underline" href="/dashboard/portfolios/new">
        Crear nuevo
      </Link>
      <ul className="space-y-2">
        {portfolios.map((p) => (
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