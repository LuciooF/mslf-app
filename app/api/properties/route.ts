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
      SELECT
        p.id,
        p.name,
        p.address,
        p."propertyType",
        p."totalRooms",
        p."createdAt",
        u.name as "managerName"
      FROM "Property" p
      LEFT JOIN "User" u ON p."managerId" = u.id
      ORDER BY p."createdAt" DESC
    `)

    return NextResponse.json({
      success: true,
      properties: result.rows
    })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    await client.end()
  }
}