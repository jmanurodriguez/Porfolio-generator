# Portfolio Generator 🚀

Este proyecto es un generador de portfolios personalizables construido con un enfoque **full‑stack en Next.js 14** y un **playground en Vite** para la creación y previsualización de secciones. El objetivo es que puedas crear tu propio portfolio profesional a partir de diferentes plantillas y exportarlo como un sitio estático listo para publicar.

## ✨ Características

- 🎨 **Editor Visual**: Playground interactivo con Vite + React para crear secciones
- 🌐 **Aplicación Full-Stack**: Next.js 14 con App Router y autenticación
- 🗄️ **Base de Datos**: PostgreSQL con Prisma ORM
- 🎭 **Plantillas**: Sistema de plantillas personalizables
- 🔐 **Autenticación**: NextAuth.js integrado
- 📱 **Responsive**: Tailwind CSS para diseño adaptativo
- 🐳 **Docker**: Servicios locales con PostgreSQL y MinIO
- 📦 **Monorepo**: Turborepo para gestión eficiente
- 🔧 **TypeScript**: Tipado completo en todo el proyecto

## 🏗️ Estructura del Monorepo

```
portfolio-generator/
├── apps/
│   ├── web/       # Aplicación principal de Next.js (full‑stack)
│   └── builder/   # Editor/playground construido con Vite + React
├── packages/
│   ├── ui/        # Componentes compartidos (Botón, Card, etc.)
│   ├── types/     # Tipos y enums compartidos (SectionType, Role, ...)
│   └── templates/ # Plantillas de secciones reutilizables
├── prisma/        # Esquema de base de datos y script seed
├── .github/
│   └── workflows/ # Configuración de GitHub Actions para CI
├── docker-compose.yml # Servicios locales (Postgres y Minio)
├── turbo.json     # Configuración de Turborepo
├── pnpm-workspace.yaml # Declaración de workspaces
├── package.json   # Scripts y dependencias raíz
└── README.md      # Documentación (este archivo)
```

## 🚀 Inicio Rápido

### 1. **Clona el repositorio**
```bash
git clone https://github.com/jmanurodriguez/Porfolio-generator.git
cd portfolio-generator
```

### 2. **Configurar variables de entorno**
```bash
cp .env.example .env
# Edita .env con tus valores reales
```

### 3. **Instalar Docker y pnpm**
- **Docker Desktop**: https://www.docker.com/products/docker-desktop/
- **pnpm**: `npm install -g pnpm`

### 4. **Configuración automatizada**
```bash
# Windows PowerShell
.\setup-basic.ps1

# O manual:
docker-compose up -d
pnpm install
pnpm prisma migrate dev --name init
```

### 5. **Iniciar desarrollo**
```bash
# Todas las aplicaciones
pnpm run dev

# O individualmente:
pnpm --filter web dev      # http://localhost:3000
pnpm --filter builder dev  # http://localhost:5174
```

## 🌐 URLs de Desarrollo

- **Aplicación Principal**: http://localhost:3000
- **Builder/Playground**: http://localhost:5174
- **MinIO Console**: http://localhost:9001 (minioadmin/minioadmin)
- **Prisma Studio**: `pnpm prisma studio` → http://localhost:5555

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm run dev           # Ejecutar todas las apps en modo desarrollo
pnpm run build         # Construir para producción
pnpm run lint          # Ejecutar linting
pnpm run test          # Ejecutar tests

# Base de datos
pnpm prisma studio     # Interfaz web para la base de datos
pnpm prisma migrate dev # Aplicar migraciones
pnpm prisma generate   # Generar cliente Prisma

# Docker
docker-compose up -d   # Levantar servicios
docker-compose down    # Parar servicios
docker-compose logs -f # Ver logs
```

## 🔧 Configuración de Variables de Entorno

El archivo `.env` contiene las siguientes variables clave:

```env
# Base de datos (local con Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio

# NextAuth (auto-generado)
NEXTAUTH_SECRET=your_generated_secret
NEXTAUTH_URL=http://localhost:3000

# Storage S3 (MinIO local)
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY=minioadmin
S3_SECRET_KEY=minioadmin
S3_BUCKET_NAME=portfolio-assets

# SMTP (configurar según tu proveedor)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_contraseña_de_aplicacion
```

Ver [ENV_SETUP.md](./ENV_SETUP.md) para configuración detallada.

## 🎨 Añadir Nuevas Plantillas

Las plantillas se almacenan en la base de datos. Para añadir nuevas:

1. Crea una entrada en la tabla `Template` con:
   - `name`: Nombre descriptivo
   - `type`: Tipo de sección (`SectionType`)
   - `code`: HTML/JSX del componente
   
2. Actualiza el seed si quieres incluirla por defecto:
```bash
# Edita prisma/seed.ts
pnpm ts-node prisma/seed.ts
```

## 📤 Exportar a HTML Estático

La funcionalidad de exportación permite generar un ZIP con:
- Archivos HTML estáticos
- Assets optimizados
- Estilos CSS compilados
- Imágenes y recursos

*(Implementación en desarrollo)*

## 🚢 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar variables de entorno en Vercel dashboard
```

### Variables de Producción
- `DATABASE_URL`: URL de PostgreSQL (Railway, Neon, Supabase)
- `NEXTAUTH_URL`: Tu URL de producción
- `S3_*`: Credenciales de almacenamiento (Cloudflare R2, AWS S3)
- `SMTP_*`: Configuración de correo real

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'feat: añadir nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

Seguimos [Conventional Commits](https://www.conventionalcommits.org/) para los mensajes.

## 📋 Próximos Pasos

- [x] **Setup inicial**: Monorepo configurado ✅
- [x] **Aplicaciones base**: Next.js + Vite funcionando ✅
- [x] **Base de datos**: Prisma + PostgreSQL ✅
- [x] **Docker**: Servicios locales ✅
- [ ] **CRUD completo**: Interfaz de administración
- [ ] **Live preview**: Sincronización en tiempo real
- [ ] **Exportación**: Generación de HTML estático
- [ ] **Publicación**: Deploy automático en subdominios
- [ ] **Tests**: Cobertura ≥ 85%
- [ ] **Performance**: Métricas Lighthouse

## 📜 Licencia

MIT © [jmanurodriguez](https://github.com/jmanurodriguez)

---

⭐ ¡Dale una estrella si te gusta el proyecto!