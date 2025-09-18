import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect()

    // Try to read from a system table to verify connection
    const result = await prisma.$queryRaw`SELECT version() as version`

    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      version: result[0]?.version || 'Unknown'
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}