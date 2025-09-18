import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST() {
  try {
    // Create the schema manually since prisma db push is having issues
    await prisma.$executeRaw`
      -- Create enum types
      DO $$ BEGIN
        CREATE TYPE "Role" AS ENUM ('ADMIN', 'TENANT', 'MANAGER');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "PropertyType" AS ENUM ('CASA', 'APARTAMENTO', 'PENSION');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "TaskStatus" AS ENUM ('PENDIENTE', 'ASIGNADA', 'EN_PROGRESO', 'COMPLETADA', 'VERIFICADA');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "TaskCategory" AS ENUM ('LIMPIEZA', 'MANTENIMIENTO', 'ORGANIZACION', 'COMPRAS', 'OTROS');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "Priority" AS ENUM ('BAJA', 'NORMAL', 'ALTA', 'URGENTE');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "TransactionType" AS ENUM ('GANANCIA', 'DESCUENTO', 'PENALIZACION', 'BONO');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "PaymentStatus" AS ENUM ('PENDIENTE', 'PAGADO', 'VENCIDO', 'PARCIAL');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `

    // Create tables
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "User" (
        "id" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "lastName" TEXT,
        "cedula" TEXT,
        "phone" TEXT,
        "password" TEXT NOT NULL,
        "role" "Role" NOT NULL DEFAULT 'TENANT',
        "emailVerified" TIMESTAMP(3),
        "image" TEXT,
        "pointsBalance" INTEGER NOT NULL DEFAULT 0,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT "User_pkey" PRIMARY KEY ("id")
      );
    `

    await prisma.$executeRaw`
      CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
    `

    await prisma.$executeRaw`
      CREATE UNIQUE INDEX IF NOT EXISTS "User_cedula_key" ON "User"("cedula");
    `

    return NextResponse.json({
      success: true,
      message: 'Database schema created successfully!'
    })

  } catch (error) {
    console.error('Error creating schema:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}