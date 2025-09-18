import { Client } from 'pg'
import { NextResponse } from 'next/server'

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  })

  try {
    await client.connect()

    const result = await client.query(`
      SELECT id, email, name, "lastName", role, "pointsBalance", "createdAt"
      FROM "User"
      ORDER BY "createdAt" DESC
    `)

    return NextResponse.json({
      success: true,
      users: result.rows
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    await client.end()
  }
}