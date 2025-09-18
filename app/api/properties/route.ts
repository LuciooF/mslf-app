import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/config"
import { prisma } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const includeInactive = searchParams.get("includeInactive") === "true"

    let where: any = {}

    if (!includeInactive) {
      where.activa = true
    }

    if (session.user.role === "TENANT") {
      const tenancies = await prisma.tenancy.findMany({
        where: {
          userId: session.user.id,
          activo: true
        },
        select: {
          propertyId: true
        }
      })

      where.id = {
        in: tenancies.map(t => t.propertyId)
      }
    } else if (session.user.role === "MANAGER") {
      where.managerId = session.user.id
    }

    const properties = await prisma.property.findMany({
      where,
      include: {
        configuracion: true,
        _count: {
          select: {
            tenancies: true,
            tasks: true
          }
        }
      },
      orderBy: {
        nombre: 'asc'
      }
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error("Error fetching properties:", error)
    return NextResponse.json(
      { error: "Error al obtener propiedades" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role === "TENANT") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const body = await request.json()

    const property = await prisma.property.create({
      data: {
        nombre: body.nombre,
        direccion: body.direccion,
        ciudad: body.ciudad,
        departamento: body.departamento,
        codigoPostal: body.codigoPostal,
        descripcion: body.descripcion,
        cantidadHabitaciones: body.cantidadHabitaciones,
        cantidadBanos: body.cantidadBanos,
        areaConstruida: body.areaConstruida,
        amenidades: body.amenidades || [],
        managerId: session.user.role === "MANAGER" ? session.user.id : body.managerId,
        configuracion: {
          create: {
            puntosPorPeso: body.configuracion?.puntosPorPeso || 10,
            maxReduccionPorcentaje: body.configuracion?.maxReduccionPorcentaje || 30,
            maxPuntosMensuales: body.configuracion?.maxPuntosMensuales || 5000,
            puntosLimpiezaBasica: body.configuracion?.puntosLimpiezaBasica || 50,
            puntosLimpiezaProfunda: body.configuracion?.puntosLimpiezaProfunda || 200,
            puntosMantenimiento: body.configuracion?.puntosMantenimiento || 150,
            puntosReparacion: body.configuracion?.puntosReparacion || 300,
            puntosJardineria: body.configuracion?.puntosJardineria || 100,
            puntosAdministrativo: body.configuracion?.puntosAdministrativo || 75,
            puntosEmergencia: body.configuracion?.puntosEmergencia || 500,
            puntosComunidad: body.configuracion?.puntosComunidad || 100,
          }
        }
      },
      include: {
        configuracion: true
      }
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error("Error creating property:", error)
    return NextResponse.json(
      { error: "Error al crear propiedad" },
      { status: 500 }
    )
  }
}