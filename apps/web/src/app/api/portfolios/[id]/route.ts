import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '../../../../lib/auth';

const prisma = new PrismaClient();

interface Params {
  params: { id: string };
}

// GET /api/portfolios/[id] -> obtiene un portfolio
export async function GET(_req: Request, { params }: Params) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const portfolio = await prisma.portfolio.findUnique({
    where: { id: params.id, userId: session.user.id },
    include: { sections: true, theme: true },
  });
  if (!portfolio) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(portfolio);
}

// PUT /api/portfolios/[id] -> actualiza un portfolio
export async function PUT(req: Request, { params }: Params) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  try {
    const portfolio = await prisma.portfolio.update({
      where: { id: params.id, userId: session.user.id },
      data,
    });
    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating portfolio' }, { status: 500 });
  }
}

// DELETE /api/portfolios/[id] -> elimina un portfolio
export async function DELETE(_req: Request, { params }: Params) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await prisma.portfolio.delete({ where: { id: params.id, userId: session.user.id } });
    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting portfolio' }, { status: 500 });
  }
}