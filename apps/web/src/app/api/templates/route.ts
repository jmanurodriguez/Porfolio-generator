import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { auth } from '../../../lib/auth';

// const prisma = new PrismaClient();

// GET /api/templates?type=CARDS -> lista plantillas (públicas) por tipo
export async function GET(req: Request) {
  // No se requiere autenticación para obtener plantillas
  const { searchParams } = new URL(req.url);
  const typeParam = searchParams.get('type');
  
  // Mock templates data
  const templates = [
    {
      id: '1',
      name: 'Template 1',
      type: typeParam || 'HERO',
      code: '<div>Template content</div>'
    }
  ];
  
  return NextResponse.json(templates);
}

// POST /api/templates -> crea una plantilla (solo admin)
export async function POST(req: Request) {
  // TODO: Re-enable admin authentication
  // const session = await auth();
  // if (!session || session.user.role !== 'ADMIN') {
  //   return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  // }
  const data = await req.json();
  
  // Mock template creation
  const template = {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  return NextResponse.json(template, { status: 201 });
}