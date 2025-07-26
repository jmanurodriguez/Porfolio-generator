import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '../../../lib/auth';

const prisma = new PrismaClient();

interface Params {
  params: { id: string };
}

// GET /api/sections/[id]
export async function GET(_req: Request, { params }: Params) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const section = await prisma.section.findUnique({
    where: { id: params.id },
    include: { template: true, portfolio: true },
  });
  if (!section || section.portfolio.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(section);
}

// PUT /api/sections/[id]
export async function PUT(req: Request, { params }: Params) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  try {
    const section = await prisma.section.update({
      where: { id: params.id },
      data,
      include: { portfolio: true },
    });
    if (section.portfolio.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    return NextResponse.json(section);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating section' }, { status: 500 });
  }
}

// DELETE /api/sections/[id]
export async function DELETE(_req: Request, { params }: Params) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    // Ensure user owns the section via portfolio
    const section = await prisma.section.findUnique({
      where: { id: params.id },
      include: { portfolio: true },
    });
    if (!section || section.portfolio.userId !== session.user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    await prisma.section.delete({ where: { id: params.id } });
    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting section' }, { status: 500 });
  }
}