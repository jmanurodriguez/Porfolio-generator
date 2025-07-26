# Guía de Configuración del Archivo .env

Este documento te ayudará a configurar correctamente todas las variables de entorno necesarias para el proyecto Portfolio Generator.

## Variables Configuradas Automáticamente

### ✅ NEXTAUTH_SECRET
Ya está configurado con una clave segura generada automáticamente:
```
NEXTAUTH_SECRET=sXDTqkegA7PBdFm9fWneOM1prVEIlML2JlBt3zHiHEo=
```

### ✅ NEXTAUTH_URL
Configurado para desarrollo local:
```
NEXTAUTH_URL=http://localhost:3000
```
**Para producción:** Cámbialo por tu URL de Vercel, ejemplo:
```
NEXTAUTH_URL=https://porfolio-generator.vercel.app
```

## Variables que Necesitas Configurar

### 🔧 DATABASE_URL
**Para desarrollo local (usando Docker):**
```
DATABASE_URL=postgresql://portfolio_user:portfolio_pass@localhost:5432/portfolio_db
```

**Para producción (Railway, Neon, Supabase, etc.):**
Reemplaza con la URL completa que te proporcione tu proveedor:
```
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/nombreBD
```

Ejemplos de proveedores:
- **Railway:** `postgresql://postgres:password@containers-us-west-xxx.railway.app:6543/railway`
- **Neon:** `postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/neondb`
- **Supabase:** `postgresql://postgres:password@db.xxx.supabase.co:5432/postgres`

### 🔧 S3 Storage (Para subida de imágenes)

**Para desarrollo local (MinIO con Docker):**
```
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY=minioadmin
S3_SECRET_KEY=minioadmin
S3_BUCKET_NAME=portfolio-assets
```

**Para producción:**
- **Cloudflare R2:**
  ```
  S3_ENDPOINT=https://xxx.r2.cloudflarestorage.com
  S3_ACCESS_KEY=tu_access_key
  S3_SECRET_KEY=tu_secret_key
  ```
- **AWS S3:**
  ```
  S3_ENDPOINT=https://s3.amazonaws.com
  S3_ACCESS_KEY=tu_access_key
  S3_SECRET_KEY=tu_secret_key
  ```

### 🔧 SMTP (Para funcionalidad de correo)

**Gmail (recomendado para desarrollo):**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_contraseña_de_aplicacion
```

**Otros proveedores:**
- **SendGrid:**
  ```
  SMTP_HOST=smtp.sendgrid.net
  SMTP_PORT=587
  SMTP_USER=apikey
  SMTP_PASS=tu_sendgrid_api_key
  ```
- **Resend:**
  ```
  SMTP_HOST=smtp.resend.com
  SMTP_PORT=587
  SMTP_USER=resend
  SMTP_PASS=tu_resend_api_key
  ```

## Pasos para Configurar

### 1. Base de Datos (Desarrollo Local)
```bash
# Levanta los servicios con Docker
docker-compose up -d

# Instala dependencias
pnpm install

# Configura Prisma
pnpx prisma generate
pnpx prisma migrate dev --name init
pnpx ts-node prisma/seed.ts
```

### 2. Base de Datos (Producción)
1. Crea una base de datos en tu proveedor preferido
2. Copia la URL de conexión
3. Actualiza `DATABASE_URL` en tu `.env`
4. En Vercel, añade la variable en "Environment Variables"

### 3. Configurar Gmail para SMTP
1. Ve a tu cuenta de Google
2. Activa la verificación en 2 pasos
3. Genera una "Contraseña de aplicación"
4. Usa esa contraseña en `SMTP_PASS`

### 4. Variables en Vercel (Producción)
En tu proyecto de Vercel, ve a Settings → Environment Variables y añade:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `S3_ENDPOINT`
- `S3_ACCESS_KEY`
- `S3_SECRET_KEY`
- `S3_BUCKET_NAME`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

## Verificar Configuración

Ejecuta esto para verificar que las variables están correctamente cargadas:
```bash
pnpm run dev
```

Si hay errores de conexión, revisa:
1. ✅ Database URL es correcta
2. ✅ Servicios Docker están corriendo (para desarrollo local)
3. ✅ Variables SMTP son válidas
4. ✅ Credenciales S3 son correctas

## Seguridad

⚠️ **NUNCA** subas el archivo `.env` al repositorio
✅ El archivo `.gitignore` ya está configurado para ignorarlo
✅ Usa variables de entorno diferentes para desarrollo y producción
✅ Rota las claves regularmente en producción
