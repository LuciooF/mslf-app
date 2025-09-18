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
    const propertyId = searchParams.get("propertyId")
    const status = searchParams.get("status")
    const assignedToMe = searchParams.get("assignedToMe") === "true"
    const available = searchParams.get("available") === "true"

    let where: any = {}

    if (propertyId) {
      where.propertyId = propertyId
    }

    if (status) {
      where.estado = status
    }

    if (assignedToMe) {
      where.assignedToId = session.user.id
    }

    if (available) {
      where.estado = "PENDIENTE"
      where.assignedToId = null
    }

    // Verificar acceso del usuario
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

      where.propertyId = {
        in: tenancies.map(t => t.propertyId)
      }
    } else if (session.user.role === "MANAGER") {
      const properties = await prisma.property.findMany({
        where: {
          managerId: session.user.id
        },
        select: {
          id: true
        }
      })

      where.propertyId = {
        in: properties.map(p => p.id)
      }
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        property: true,
        createdBy: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true
          }
        },
        assignedTo: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true
          }
        },
        verifications: {
          include: {
            verifiedBy: {
              select: {
                nombre: true,
                apellido: true
              }
            }
          }
        },
        evidencia: true
      },
      orderBy: [
        { prioridad: 'desc' },
        { fechaCreacion: 'desc' }
      ]
    })

    return NextResponse.json(tasks)
  } catch (error) {
    console.error("Error fetching tasks:", error)
    return NextResponse.json(
      { error: "Error al obtener tareas" },
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

    // Obtener configuración de la propiedad para los puntos
    const propertyConfig = await prisma.propertyConfig.findUnique({
      where: {
        propertyId: body.propertyId
      }
    })

    if (!propertyConfig) {
      return NextResponse.json(
        { error: "Configuración de propiedad no encontrada" },
        { status: 400 }
      )
    }

    // Calcular puntos base según la categoría
    let puntosBase = 100
    switch (body.categoria) {
      case "LIMPIEZA":
        puntosBase = body.tipo === "profunda"
          ? propertyConfig.puntosLimpiezaProfunda
          : propertyConfig.puntosLimpiezaBasica
        break
      case "MANTENIMIENTO":
        puntosBase = propertyConfig.puntosMantenimiento
        break
      case "REPARACION":
        puntosBase = propertyConfig.puntosReparacion
        break
      case "JARDINERIA":
        puntosBase = propertyConfig.puntosJardineria
        break
      case "ADMINISTRATIVO":
        puntosBase = propertyConfig.puntosAdministrativo
        break
      case "EMERGENCIA":
        puntosBase = propertyConfig.puntosEmergencia
        break
      case "COMUNIDAD":
        puntosBase = propertyConfig.puntosComunidad
        break
    }

    // Aplicar multiplicador de prioridad
    if (body.prioridad === "URGENTE") {
      puntosBase = Math.round(puntosBase * 1.5)
    } else if (body.prioridad === "ALTA") {
      puntosBase = Math.round(puntosBase * 1.2)
    }

    const task = await prisma.task.create({
      data: {
        titulo: body.titulo,
        descripcion: body.descripcion,
        categoria: body.categoria,
        prioridad: body.prioridad || "MEDIA",
        puntosBase: body.puntosBase || puntosBase,
        tiempoEstimado: body.tiempoEstimado,
        fechaLimite: body.fechaLimite ? new Date(body.fechaLimite) : undefined,
        esRecurrente: body.esRecurrente || false,
        frecuenciaDias: body.frecuenciaDias,
        propertyId: body.propertyId,
        createdById: session.user.id,
        assignedToId: body.assignedToId,
        estado: body.assignedToId ? "ASIGNADA" : "PENDIENTE",
        fechaAsignacion: body.assignedToId ? new Date() : undefined,
      },
      include: {
        property: true,
        createdBy: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true
          }
        },
        assignedTo: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            email: true
          }
        }
      }
    })

    // Crear notificación si se asignó a alguien
    if (body.assignedToId) {
      await prisma.notification.create({
        data: {
          userId: body.assignedToId,
          tipo: "tarea",
          titulo: "Nueva tarea asignada",
          mensaje: `Se te ha asignado la tarea: ${body.titulo}`,
          enlace: `/tenant/tasks/${task.id}`
        }
      })
    }

    return NextResponse.json(task)
  } catch (error) {
    console.error("Error creating task:", error)
    return NextResponse.json(
      { error: "Error al crear tarea" },
      { status: 500 }
    )
  }
}