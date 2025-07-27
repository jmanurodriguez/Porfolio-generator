import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { auth } from '../../../../lib/auth';

// const prisma = new PrismaClient();

interface Params {
  params: { id: string };
}

// GET /api/portfolios/[id] -> obtiene un portfolio
export async function GET(_req: Request, { params }: Params) {
  // TODO: Re-enable authentication and database
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  // const portfolio = await prisma.portfolio.findUnique({
  //   where: { id: params.id, userId: session.user.id },
  //   include: { sections: true, theme: true },
  // });
  
  // Mock portfolio data
  const portfolio = {
    id: params.id,
    title: 'Mi Portfolio Personal',
    slug: 'mi-portfolio-personal',
    published: true,
    userId: '1',
    themeId: null,
    sections: [],
    theme: null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  return NextResponse.json(portfolio);
}

// PUT /api/portfolios/[id] -> actualiza un portfolio
export async function PUT(req: Request, { params }: Params) {
  // TODO: Re-enable authentication and database
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  const data = await req.json();
  
  // Mock update - just return the updated data
  const portfolio = {
    id: params.id,
    ...data,
    userId: '1',
    updatedAt: new Date()
  };
  
  return NextResponse.json(portfolio);
}

// DELETE /api/portfolios/[id] -> elimina un portfolio
export async function DELETE(_req: Request, { params }: Params) {
  // TODO: Re-enable authentication and database
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  
  // Mock deletion - just return success
  return NextResponse.json({ message: 'Deleted' });
  
  // try {
  //   await prisma.portfolio.delete({ where: { id: params.id, userId: session.user.id } });
  //   return NextResponse.json({ message: 'Deleted' });
  // } catch (error) {
  //   return NextResponse.json({ error: 'Error deleting portfolio' }, { status: 500 });
  // }
}