#!/usr/bin/env pwsh

# Script de configuración automática para Portfolio Generator
# Ejecuta este script para configurar tu entorno de desarrollo

Write-Host "🚀 Configurando Portfolio Generator..." -ForegroundColor Green

# Verificar si existe .env
if (Test-Path ".env") {
    Write-Host "✅ Archivo .env encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ Archivo .env no encontrado. Por favor créalo primero." -ForegroundColor Red
    exit 1
}

# Verificar Docker
Write-Host "🐳 Verificando Docker..." -ForegroundColor Yellow
try {
    docker --version | Out-Null
    Write-Host "✅ Docker está instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker no está instalado o no está en PATH" -ForegroundColor Red
    Write-Host "Instala Docker Desktop desde: https://www.docker.com/products/docker-desktop/" -ForegroundColor Yellow
    exit 1
}

# Verificar pnpm
Write-Host "📦 Verificando pnpm..." -ForegroundColor Yellow
try {
    pnpm --version | Out-Null
    Write-Host "✅ pnpm está instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ pnpm no está instalado" -ForegroundColor Red
    Write-Host "Instala pnpm con: npm install -g pnpm" -ForegroundColor Yellow
    exit 1
}

# Levantar servicios Docker
Write-Host "🐳 Levantando servicios Docker..." -ForegroundColor Yellow
docker-compose up -d

# Esperar a que los servicios estén listos
Write-Host "⏳ Esperando a que los servicios estén listos..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
pnpm install

# Configurar Prisma
Write-Host "🗄️ Configurando Prisma..." -ForegroundColor Yellow
pnpx prisma generate
pnpx prisma migrate dev --name init

# Ejecutar seed
Write-Host "🌱 Ejecutando seed de la base de datos..." -ForegroundColor Yellow
pnpx ts-node prisma/seed.ts

Write-Host ""
Write-Host "🎉 ¡Configuración completada!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximos pasos:" -ForegroundColor Cyan
Write-Host "1. Revisa y actualiza las variables en .env según tus necesidades" -ForegroundColor White
Write-Host "2. Para desarrollo:" -ForegroundColor White
Write-Host "   pnpm run dev" -ForegroundColor Gray
Write-Host "3. Accede a:" -ForegroundColor White
Write-Host "   - App principal: http://localhost:3000" -ForegroundColor Gray
Write-Host "   - Builder: http://localhost:5173" -ForegroundColor Gray
Write-Host "   - MinIO: http://localhost:9001 (minioadmin/minioadmin)" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 Lee ENV_SETUP.md para más detalles de configuración" -ForegroundColor Yellow
