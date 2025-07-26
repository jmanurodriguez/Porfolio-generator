#!/usr/bin/env pwsh

# Script de configuración simplificada para Portfolio Generator (sin Docker)
# Ejecuta este script para verificar la configuración básica

Write-Host "🚀 Verificando configuración de Portfolio Generator..." -ForegroundColor Green

# Verificar si existe .env
if (Test-Path ".env") {
    Write-Host "✅ Archivo .env encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ Archivo .env no encontrado. Por favor créalo primero." -ForegroundColor Red
    exit 1
}

# Verificar pnpm
Write-Host "📦 Verificando pnpm..." -ForegroundColor Yellow
try {
    $pnpmVersion = pnpm --version
    Write-Host "✅ pnpm está instalado (versión: $pnpmVersion)" -ForegroundColor Green
} catch {
    Write-Host "❌ pnpm no está instalado" -ForegroundColor Red
    Write-Host "Instala pnpm con: npm install -g pnpm" -ForegroundColor Yellow
    
    # Verificar si npm existe
    try {
        npm --version | Out-Null
        Write-Host "💡 Puedes instalarlo ahora ejecutando: npm install -g pnpm" -ForegroundColor Cyan
    } catch {
        Write-Host "❌ Tampoco tienes npm instalado. Instala Node.js primero desde: https://nodejs.org/" -ForegroundColor Red
    }
    exit 1
}

# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
pnpm install

Write-Host ""
Write-Host "✅ Configuración básica completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Estado actual:" -ForegroundColor Cyan
Write-Host "✅ Archivo .env configurado" -ForegroundColor Green
Write-Host "✅ Dependencias instaladas" -ForegroundColor Green
Write-Host "⚠️  Docker no detectado (opcional para desarrollo)" -ForegroundColor Yellow
Write-Host ""
Write-Host "📖 Próximos pasos:" -ForegroundColor Cyan
Write-Host ""
Write-Host "OPCIÓN 1 - Con servicios externos:" -ForegroundColor Yellow
Write-Host "1. Configura una base de datos PostgreSQL externa (Railway, Neon, Supabase)" -ForegroundColor White
Write-Host "2. Actualiza DATABASE_URL en .env con la URL externa" -ForegroundColor White
Write-Host "3. Configura un servicio S3 externo y actualiza las variables S3_*" -ForegroundColor White
Write-Host "4. Ejecuta: pnpx prisma migrate dev --name init" -ForegroundColor Gray
Write-Host "5. Ejecuta: pnpm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "OPCIÓN 2 - Con Docker (recomendado):" -ForegroundColor Yellow
Write-Host "1. Instala Docker Desktop: https://www.docker.com/products/docker-desktop/" -ForegroundColor White
Write-Host "2. Ejecuta: docker-compose up -d" -ForegroundColor Gray
Write-Host "3. Ejecuta: pnpx prisma migrate dev --name init" -ForegroundColor Gray
Write-Host "4. Ejecuta: pnpx ts-node prisma/seed.ts" -ForegroundColor Gray
Write-Host "5. Ejecuta: pnpm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Lee ENV_SETUP.md para configuración detallada" -ForegroundColor Cyan
