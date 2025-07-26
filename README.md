# Portfolio Generator

Este proyecto es un generador de portfolios personalizables construido con un enfoque **full‑stack en Next.js 14** y un **playground en Vite** para la creación y previsualización de secciones. El objetivo es que puedas crear tu propio portfolio profesional a partir de diferentes plantillas y exportarlo como un sitio estático listo para publicar.

## Estructura del monorepo

```
portfolio-generator/
├── apps/
│   ├── web/       # Aplicación principal de Next.js (full‑stack)
│   └── builder/   # Editor/playground construido con Vite + React
├── packages/
│   ├── ui/        # Componentes compartidos (Botón, Card, etc.)
│   └── types/     # Tipos y enums compartidos (SectionType, Role, ...)
├── prisma/        # Esquema de base de datos y script seed
├── .github/
│   └── workflows/ # Configuración de GitHub Actions para CI
├── docker-compose.yml # Servicios locales (Postgres y Minio)
├── turbo.json     # Configuración de Turborepo
├── pnpm-workspace.yaml # Declaración de workspaces
├── package.json   # Scripts y dependencias raíz
└── README.md      # Documentación (este archivo)
```

## Primeros pasos

1. **Clona el repositorio y copia las variables de entorno:**

   ```bash
   cp .env.example .env
   # edita .env y completa valores reales
   ```

2. **Arranca los servicios locales:**

   ```bash
   docker-compose up -d
   ```

3. **Instala dependencias y genera el cliente de Prisma:**

   ```bash
   pnpm install
   pnpx prisma generate
   pnpx prisma migrate dev --name init
   pnpx ts-node prisma/seed.ts
   ```

4. **Arranca las aplicaciones en modo desarrollo:**

   En paralelo puedes levantar la app web y el builder:

   ```bash
   # Terminal 1
   pnpm --filter web dev

   # Terminal 2
   pnpm --filter builder dev
   ```

5. **Accede a la app:**

   - Aplicación principal: http://localhost:3000
   - Playground/builder: http://localhost:5173

## Añadir nuevas plantillas

Las plantillas de secciones se almacenan en la tabla `Template` de la base de datos. Cada plantilla contiene un campo `code` con el HTML/JSX correspondiente al fragmento de UI. Para añadir nuevas plantillas:

1. Crea una entrada en la tabla `Template` con el nombre, tipo de sección (`SectionType`) y el código de la plantilla.
2. Actualiza el seed si quieres que se incluya por defecto en instalaciones nuevas.
3. Reinicia la app o actualiza la base de datos según corresponda.

## Exportar a HTML estático

La funcionalidad de exportación se implementará en la aplicación web y permitirá generar un ZIP con los ficheros HTML y los assets necesarios. Una vez esté disponible, encontrarás instrucciones detalladas en el panel de usuario.

## Scripts útiles

- `pnpm run dev` – Ejecuta todas las aplicaciones en modo desarrollo mediante Turborepo.
- `pnpm run build` – Construye la aplicación para producción.
- `pnpm run lint` – Ejecuta ESLint en los paquetes y apps.
- `pnpm run test` – Ejecuta pruebas unitarias e integración.

## Contribuir

Se siguen las [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para los mensajes de commit. Asegúrate de ejecutar `pnpm install` para configurar los hooks de Husky (pendiente de añadir). Para contribuir con nuevas secciones o funcionalidades, crea una rama y abre un Pull Request describiendo tus cambios.

## Próximos pasos

Este repositorio contiene la base técnica inicial. Pendiente de implementar:

- **CRUD completo** de portfolios y secciones con interfaz de administración.
- **Live preview** con sincronización en tiempo real entre el editor y la vista previa.
- **Exportación a HTML estático** y descarga de ZIP.
- **Publicación en subdominios** usando Vercel o GitHub Pages.
- **Integración de tests** (unitarios e integración) con cobertura ≥ 85%.
- **Métricas de performance** (Lighthouse) y presupuestos de bundle.

Se irá avanzando en estos aspectos en los siguientes hitos del proyecto.