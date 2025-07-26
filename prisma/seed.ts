/*
 * Seed script for the portfolio generator database.
 * This script inserts demo users and portfolios along with a handful of template definitions.
 * Run with `npx ts-node prisma/seed.ts` after generating the Prisma client.
 */

import { PrismaClient, SectionType, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create an admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: 'password', // TODO: hash your passwords!
      name: 'Admin',
      role: Role.ADMIN,
    },
  });

  // Create a regular user
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: 'password',
      name: 'Demo User',
      role: Role.USER,
    },
  });

  // Insert a few templates per section type
  const templatePromises = Object.values(SectionType).flatMap((type) => {
    return Array.from({ length: 5 }).map((_, i) =>
      prisma.template.create({
        data: {
          name: `${type} Template ${i + 1}`,
          type,
          code: `<!-- TODO: insert template code for ${type} template ${i + 1} -->`,
        },
      }),
    );
  });
  await Promise.all(templatePromises);

  // Create a demo portfolio with sections
  const portfolio = await prisma.portfolio.create({
    data: {
      title: 'Mi portfolio de ejemplo',
      slug: 'demo-portfolio',
      userId: user.id,
      sections: {
        create: [
          {
            type: SectionType.NAVBAR,
            order: 0,
            data: {},
          },
          {
            type: SectionType.HERO,
            order: 1,
            data: {},
          },
          {
            type: SectionType.CARDS,
            order: 2,
            data: {},
          },
        ],
      },
    },
  });
  console.log('Seeded database. Portfolio ID:', portfolio.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());