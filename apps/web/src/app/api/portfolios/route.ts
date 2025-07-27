import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { auth } from '../../../lib/auth';

// const prisma = new PrismaClient();

// GET /api/portfolios -> devuelve la lista de portfolios del usuario autenticado
export async function GET() {
  // TODO: Re-enable authentication and database
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  // const portfolios = await prisma.portfolio.findMany({
  //   where: { userId: session.user.id },
  //   include: { theme: true, sections: true },
  //   orderBy: { createdAt: 'desc' },
  // });
  
  // Mock data for development
  const portfolios = [
    {
      id: '1',
      title: 'Mi Portfolio Personal',
      slug: 'mi-portfolio-personal',
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      theme: null,
      sections: []
    }
  ];
  
  return NextResponse.json(portfolios);
}

// POST /api/portfolios -> crea un portfolio
export async function POST(req: Request) {
  // TODO: Re-enable authentication and database
  // const session = await auth();
  // if (!session || !session.user) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  const data = await req.json();
  const { title, slug, themeId } = data;
  
  // Mock portfolio creation
  const portfolio = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    slug,
    userId: '1',
    themeId,
    published: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  return NextResponse.json(portfolio, { status: 201 });
  
  // try {
  //   const portfolio = await prisma.portfolio.create({
  //     data: {
  //       title,
  //       slug,
  //       userId: session.user.id,
  //       themeId,
  //     },
  //   });
  //   return NextResponse.json(portfolio, { status: 201 });
  // } catch (error) {
  //   return NextResponse.json({ error: 'Error creating portfolio' }, { status: 500 });
  // }
}