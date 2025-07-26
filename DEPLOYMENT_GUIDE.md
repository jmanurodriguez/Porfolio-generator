# 🚀 Guía de Deployment en Vercel

## Pasos para hacer el deploy:

### 1. Configurar Base de Datos Externa
- **Neon (Recomendado)**: https://neon.tech
- **Railway**: https://railway.app  
- **Supabase**: https://supabase.com

### 2. Configurar en Vercel Dashboard
```
Project Name: portfolio-generator
Framework: Next.js
Root Directory: apps/web

Build Command: pnpm run build (Override: ON)
Output Directory: .next (Override: ON)
Install Command: pnpm install (Override: ON)
```

### 3. Variables de Entorno en Vercel
Ve a Settings > Environment Variables y agrega:

```
NEXTAUTH_SECRET=sXDTqkegA7PBdFm9fWneOM1prVEIlML2JlBt3zHiHEo=
NEXTAUTH_URL=https://tu-app.vercel.app
DATABASE_URL=postgresql://...tu-base-de-datos...
```

### 4. Deploy
Una vez configurado todo, Vercel desplegará automáticamente.

### 5. Verificar
- ✅ Aplicación carga correctamente
- ✅ Base de datos se conecta
- ✅ NextAuth funciona
- ✅ No hay errores en los logs

## Comandos útiles:
```bash
# Verificar build local antes del deploy
cd apps/web
pnpm run build

# Ver logs de Vercel
vercel logs
```
