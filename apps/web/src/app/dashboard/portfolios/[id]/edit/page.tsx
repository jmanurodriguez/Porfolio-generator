"use client";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditPortfolioPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/portfolios/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTitle(data.title);
        setSlug(data.slug);
      }
      setLoading(false);
    }
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/portfolios/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug }),
    });
    if (res.ok) {
      router.push('/dashboard/portfolios');
    } else {
      alert('Error al actualizar el portfolio');
    }
  };

  if (loading) return <p className="p-4">Cargando...</p>;

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Editar Portfolio</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full rounded border border-gray-300 p-2"
          />
        </div>
        <button type="submit" className="rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700">
          Guardar cambios
        </button>
      </form>
    </div>
  );
}