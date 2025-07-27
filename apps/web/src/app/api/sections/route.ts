import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { auth } from '../../../lib/auth';

// const prisma = new PrismaClient();

// GET /api/sections -> lista todas las secciones del usuario (opcionalmente filtrado por portfolioId)
export async function GET(req: Request) {
  // TODO: Re-enable authentication
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  const { searchParams } = new URL(req.url);
  const portfolioId = searchParams.get('portfolioId');
  
  // Mock sections data
  const sections = [
    {
      id: '1',
      type: 'HERO',
      order: 1,
      data: {},
      portfolioId: portfolioId || '1'
    }
  ];
  
  return NextResponse.json(sections);
}

// POST /api/sections -> crea una sección
export async function POST(req: Request) {
  // TODO: Re-enable authentication
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  const data = await req.json();
  const { portfolioId, type, order, data: payload, templateId } = data;
  
  // Mock section creation
  const section = {
    id: Math.random().toString(36).substr(2, 9),
    portfolioId,
    type,
    order,
    data: payload,
    templateId,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  return NextResponse.json(section, { status: 201 });
}