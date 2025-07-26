import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '../../../lib/auth';

const prisma = new PrismaClient();

interface Params {
  params: { id: string };
}

// GET /api/templates/[id] -> obtiene una plantilla
export async function GET(_req: Request, { params }: Params) {
  const template = await prisma.template.findUnique({ where: { id: params.id } });
  if (!template) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(template);
}

// PUT /api/templates/[id] -> actualiza una plantilla (solo admin)
export async function PUT(req: Request, { params }: Params) {
  const session = await auth();
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const data = await req.json();
  try {
    const template = await prisma.template.update({ where: { id: params.id }, data });
    return NextResponse.json(template);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating template' }, { status: 500 });
  }
}

// DELETE /api/templates/[id] -> elimina una plantilla (solo admin)
export async function DELETE(_req: Request, { params }: Params) {
  const session = await auth();
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  try {
    await prisma.template.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting template' }, { status: 500 });
  }
}