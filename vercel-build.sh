#!/bin/bash
# vercel-build.sh - Script para build en Vercel

echo "🔧 Configurando build para Vercel..."

# Navegar al directorio de la aplicación web
cd apps/web

# Instalar dependencias específicas si es necesario
echo "📦 Verificando dependencias..."

# Generar cliente Prisma (si es necesario)
if [ -f "../../prisma/schema.prisma" ]; then
    echo "🗄️ Generando cliente Prisma..."
    npx prisma generate --schema=../../prisma/schema.prisma
fi

# Ejecutar el build de Next.js
echo "🚀 Ejecutando build de Next.js..."
npm run build

echo "✅ Build completado!"
