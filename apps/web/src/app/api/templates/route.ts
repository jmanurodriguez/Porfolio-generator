import { NextResponse } from 'next/server';
import { PrismaClient, SectionType } from '@prisma/client';
import { auth } from '../../lib/auth';

const prisma = new PrismaClient();

// GET /api/templates?type=CARDS -> lista plantillas (públicas) por tipo
export async function GET(req: Request) {
  // No se requiere autenticación para obtener plantillas
  const { searchParams } = new URL(req.url);
  const typeParam = searchParams.get('type');
  let where = {} as any;
  if (typeParam && (SectionType as any)[typeParam]) {
    where = { type: typeParam as SectionType };
  }
  const templates = await prisma.template.findMany({ where });
  return NextResponse.json(templates);
}

// POST /api/templates -> crea una plantilla (solo admin)
export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const data = await req.json();
  try {
    const template = await prisma.template.create({ data });
    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating template' }, { status: 500 });
  }
}