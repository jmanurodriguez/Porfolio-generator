import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '../../lib/auth';

const prisma = new PrismaClient();

// GET /api/portfolios -> devuelve la lista de portfolios del usuario autenticado
export async function GET() {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const portfolios = await prisma.portfolio.findMany({
    where: { userId: session.user.id },
    include: { theme: true, sections: true },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(portfolios);
}

// POST /api/portfolios -> crea un portfolio
export async function POST(req: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  const { title, slug, themeId } = data;
  try {
    const portfolio = await prisma.portfolio.create({
      data: {
        title,
        slug,
        userId: session.user.id,
        themeId,
      },
    });
    return NextResponse.json(portfolio, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating portfolio' }, { status: 500 });
  }
}