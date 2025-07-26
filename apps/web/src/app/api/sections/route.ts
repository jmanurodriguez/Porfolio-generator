import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '../../../lib/auth';

const prisma = new PrismaClient();

// GET /api/sections -> lista todas las secciones del usuario (opcionalmente filtrado por portfolioId)
export async function GET(req: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const portfolioId = searchParams.get('portfolioId');
  const sections = await prisma.section.findMany({
    where: {
      portfolio: {
        userId: session.user.id,
        ...(portfolioId ? { id: portfolioId } : {}),
      },
    },
    orderBy: { order: 'asc' },
  });
  return NextResponse.json(sections);
}

// POST /api/sections -> crea una sección
export async function POST(req: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  const { portfolioId, type, order, data: payload, templateId } = data;
  try {
    const section = await prisma.section.create({
      data: {
        portfolioId,
        type,
        order,
        data: payload,
        templateId,
      },
    });
    return NextResponse.json(section, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating section' }, { status: 500 });
  }
}