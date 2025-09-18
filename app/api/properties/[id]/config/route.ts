import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/config"
import { prisma } from "@/lib/db"

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role === "TENANT") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const body = await request.json()

    // Verificar que el usuario tiene acceso a esta propiedad
    if (session.user.role === "MANAGER") {
      const property = await prisma.property.findFirst({
        where: {
          id: params.id,
          managerId: session.user.id
        }
      })

      if (!property) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 })
      }
    }

    const config = await prisma.propertyConfig.update({
      where: {
        propertyId: params.id
      },
      data: {
        puntosPorPeso: body.puntosPorPeso,
        maxReduccionPorcentaje: body.maxReduccionPorcentaje,
        maxPuntosMensuales: body.maxPuntosMensuales,
        puntosLimpiezaBasica: body.puntosLimpiezaBasica,
        puntosLimpiezaProfunda: body.puntosLimpiezaProfunda,
        puntosMantenimiento: body.puntosMantenimiento,
        puntosReparacion: body.puntosReparacion,
        puntosJardineria: body.puntosJardineria,
        puntosAdministrativo: body.puntosAdministrativo,
        puntosEmergencia: body.puntosEmergencia,
        puntosComunidad: body.puntosComunidad,
        bonusConsistencia: body.bonusConsistencia,
        bonusCalidad: body.bonusCalidad,
        bonusRapidez: body.bonusRapidez,
        tiempoMaximoRevision: body.tiempoMaximoRevision,
        requiereVerificacion: body.requiereVerificacion,
        verificacionPorPares: body.verificacionPorPares,
      }
    })

    return NextResponse.json(config)
  } catch (error) {
    console.error("Error updating config:", error)
    return NextResponse.json(
      { error: "Error al actualizar configuración" },
      { status: 500 }
    )
  }
}