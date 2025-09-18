import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Use raw SQL to get tenant users with their data
    const users = await prisma.$queryRaw`
      SELECT id, email, name, "lastName", cedula, phone, role, "pointsBalance", "createdAt"
      FROM "User"
      WHERE role = 'TENANT'
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