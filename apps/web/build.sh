#!/bin/bash
# Script de build para Vercel que maneja Prisma correctamente

echo "Generando cliente de Prisma..."
cd ../..
PRISMA_CLI_BINARY_TARGETS=native,debian-openssl-1.1.x npx prisma generate --schema=./prisma/schema.prisma

echo "Construyendo aplicación Next.js..."
cd apps/web
pnpm run build
