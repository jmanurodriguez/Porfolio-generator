import Link from 'next/link';
import { auth } from '../../lib/auth';

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return <p className="p-4">Debes iniciar sesión para acceder al panel.</p>;
  }
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Panel de control</h1>
      <ul className="space-y-2">
        <li>
          <Link className="text-blue-600 underline" href="/dashboard/portfolios">
            Mis Portfolios
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/dashboard/templates">
            Plantillas
          </Link>
        </li>
      </ul>
    </div>
  );
}