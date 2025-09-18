# MSLF - Sistema de Alquiler con Reducción por Puntos

Sistema web para gestión de propiedades de alquiler en Uruguay donde los inquilinos pueden reducir su renta mensual completando tareas domésticas y comunitarias.

## 🚀 Características Principales

- **Sistema de Puntos**: Los inquilinos ganan puntos completando tareas
- **Reducción de Alquiler**: Hasta 30% de descuento aplicando puntos
- **Configuración Flexible**: Todos los valores son editables por propiedad
- **Multi-Propiedad**: Gestión de múltiples propiedades desde un solo panel
- **Verificación de Tareas**: Sistema de verificación con evidencia fotográfica
- **Dashboard Completo**: Panel administrativo y portal para inquilinos

## 📋 Requisitos Previos

- Node.js 18+
- PostgreSQL 14+
- npm o yarn

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
cd mslf-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar `.env` con tus credenciales:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/mslf_db"
NEXTAUTH_SECRET="generar-una-clave-segura-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configurar la base de datos**
```bash
npx prisma generate
npx prisma db push
```

5. **Ejecutar el proyecto**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
mslf-app/
├── app/                    # Páginas y rutas de Next.js
│   ├── admin/             # Panel administrativo
│   ├── tenant/            # Portal de inquilinos
│   ├── api/               # Endpoints de API
│   └── auth/              # Páginas de autenticación
├── components/            # Componentes React
│   ├── ui/               # Componentes de interfaz
│   ├── admin/            # Componentes del admin
│   └── tenant/           # Componentes del inquilino
├── lib/                   # Utilidades y configuración
│   ├── auth/             # Configuración de autenticación
│   └── db.ts             # Cliente de Prisma
├── prisma/               # Esquema de base de datos
└── types/                # Definiciones de TypeScript
```

## 💡 Configuración del Sistema

### Valores Editables por Propiedad

- **Conversión de Puntos**: Cuántos puntos = 1 peso uruguayo
- **Reducción Máxima**: Porcentaje máximo de descuento (default 30%)
- **Puntos por Categoría**: Valores para cada tipo de tarea
- **Bonificaciones**: Multiplicadores por calidad, rapidez, consistencia
- **Verificación**: Tiempo de revisión, verificación por pares

### Categorías de Tareas

- Limpieza (básica y profunda)
- Mantenimiento
- Reparación
- Jardinería
- Administrativo
- Emergencias
- Comunidad

## 👥 Tipos de Usuario

1. **Admin**: Control total del sistema
2. **Manager**: Gestión de propiedades asignadas
3. **Tenant**: Inquilinos que completan tareas

## 📱 Funcionalidades Principales

### Para Administradores
- Crear y gestionar propiedades
- Configurar valores de puntos
- Asignar tareas
- Revisar verificaciones
- Ver reportes y estadísticas

### Para Inquilinos
- Ver tareas disponibles
- Tomar y completar tareas
- Subir evidencia fotográfica
- Ver balance de puntos
- Calcular reducción de alquiler

## 🔒 Seguridad

- Autenticación con NextAuth.js
- Contraseñas hasheadas con bcrypt
- Validación de roles y permisos
- Sesiones JWT seguras

## 📊 Base de Datos

El sistema utiliza PostgreSQL con Prisma ORM. Principales modelos:

- **User**: Usuarios del sistema
- **Property**: Propiedades en alquiler
- **Task**: Tareas disponibles
- **PointTransaction**: Historial de puntos
- **RentPayment**: Pagos de alquiler
- **PropertyConfig**: Configuración personalizada

## 🚀 Despliegue

Para producción se recomienda:

1. **Base de Datos**: Supabase, Neon, o PostgreSQL en servidor
2. **Hosting**: Vercel (optimizado para Next.js)
3. **Almacenamiento**: Supabase Storage o S3 para imágenes

## 📝 Licencia

Propiedad de MSLF - Todos los derechos reservados

## 📧 Contacto

Para consultas: info@mslf.uy
