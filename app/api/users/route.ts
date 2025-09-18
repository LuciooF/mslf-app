import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Use raw SQL since there's a mismatch between Prisma schema and DB schema
    const users = await prisma.$queryRaw`
      SELECT id, email, name, "lastName", role, "pointsBalance", "createdAt"
      FROM "User"
      ORDER BY "createdAt" DESC
    `

    return NextResponse.json({
      success: true,
      users: users
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}