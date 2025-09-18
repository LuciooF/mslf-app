"use client"

import Link from "next/link"

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Limpieza de cocina común",
      description: "Limpiar completamente la cocina común incluyendo electrodomésticos",
      property: "Propiedad Centro",
      category: "LIMPIEZA",
      points: 50,
      estimatedTime: "45 min",
      status: "COMPLETADA",
      assignedTo: "Juan Pérez",
      createdDate: "2024-03-15",
      completedDate: "2024-03-15",
      priority: "NORMAL"
    },
    {
      id: 2,
      title: "Reparación de grifo baño principal",
      description: "Arreglar el goteo del grifo del lavabo en el baño principal",
      property: "Propiedad Pocitos",
      category: "MANTENIMIENTO",
      points: 80,
      estimatedTime: "30 min",
      status: "ASIGNADA",
      assignedTo: "María González",
      createdDate: "2024-03-14",
      completedDate: null,
      priority: "ALTA"
    },
    {
      id: 3,
      title: "Compra de productos de limpieza",
      description: "Comprar detergente, desinfectante y papel higiénico para áreas comunes",
      property: "Propiedad Cordón",
      category: "COMPRAS",
      points: 30,
      estimatedTime: "60 min",
      status: "PENDIENTE",
      assignedTo: null,
      createdDate: "2024-03-13",
      completedDate: null,
      priority: "NORMAL"
    },
    {
      id: 4,
      title: "Organización del área de lavado",
      description: "Organizar y limpiar el área de lavandería común",
      property: "Propiedad Punta Carretas",
      category: "ORGANIZACION",
      points: 40,
      estimatedTime: "30 min",
      status: "EN_PROGRESO",
      assignedTo: "Ana Silva",
      createdDate: "2024-03-12",
      completedDate: null,
      priority: "BAJA"
    },
    {
      id: 5,
      title: "Limpieza de ventanas del salón",
      description: "Limpiar todas las ventanas del salón común por dentro y por fuera",
      property: "Propiedad Tres Cruces",
      category: "LIMPIEZA",
      points: 60,
      estimatedTime: "90 min",
      status: "PENDIENTE",
      assignedTo: null,
      createdDate: "2024-03-11",
      completedDate: null,
      priority: "NORMAL"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETADA":
        return { bg: "#dcfce7", color: "#166534" }
      case "ASIGNADA":
        return { bg: "#dbeafe", color: "#1d4ed8" }
      case "EN_PROGRESO":
        return { bg: "#fef3c7", color: "#92400e" }
      case "PENDIENTE":
        return { bg: "#f3f4f6", color: "#374151" }
      default:
        return { bg: "#f3f4f6", color: "#374151" }
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "ALTA":
        return { bg: "#fee2e2", color: "#dc2626" }
      case "NORMAL":
        return { bg: "#f3f4f6", color: "#374151" }
      case "BAJA":
        return { bg: "#e0f2fe", color: "#0369a1" }
      default:
        return { bg: "#f3f4f6", color: "#374151" }
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: "24px", height: "24px", backgroundColor: "#2563eb", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>🏠</div>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>MSLF Admin</span>
            </div>
            <nav style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/admin" style={{ color: "#6b7280", textDecoration: "none" }}>
                Panel
              </Link>
              <Link href="/admin/properties" style={{ color: "#6b7280", textDecoration: "none" }}>
                Propiedades
              </Link>
              <Link href="/admin/tenants" style={{ color: "#6b7280", textDecoration: "none" }}>
                Inquilinos
              </Link>
              <Link href="/admin/tasks" style={{ color: "#2563eb", fontWeight: "500", textDecoration: "none" }}>
                Tareas
              </Link>
              <Link href="/admin/settings" style={{ color: "#6b7280", textDecoration: "none" }}>
                Configuración
              </Link>
              <Link href="/" style={{ color: "#dc2626", textDecoration: "none", fontSize: "0.875rem" }}>
                ← Salir
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Tareas</h1>
            <p style={{ color: "#6b7280" }}>Gestiona todas las tareas del sistema</p>
          </div>
          <Link
            href="/admin/tasks/new"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "500",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            📝 Nueva Tarea
          </Link>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", overflowX: "auto" }}>
          {["Todas", "Pendientes", "Asignadas", "En Progreso", "Completadas"].map((filter) => (
            <button
              key={filter}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                border: filter === "Todas" ? "2px solid #2563eb" : "1px solid #d1d5db",
                backgroundColor: filter === "Todas" ? "#dbeafe" : "white",
                color: filter === "Todas" ? "#1d4ed8" : "#374151",
                fontWeight: "500",
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Tasks Grid */}
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
                padding: "1.5rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1f2937" }}>
                      {task.title}
                    </h3>
                    <span
                      style={{
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        backgroundColor: "#f3f4f6",
                        color: "#374151"
                      }}
                    >
                      {task.category}
                    </span>
                  </div>
                  <p style={{ color: "#6b7280", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                    {task.description}
                  </p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    📍 {task.property}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "999px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      ...getStatusColor(task.status)
                    }}
                  >
                    {task.status.replace('_', ' ')}
                  </span>
                  <span
                    style={{
                      padding: "0.25rem 0.5rem",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      ...getPriorityColor(task.priority)
                    }}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Puntos</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#2563eb" }}>
                    {task.points} pts
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Tiempo Estimado</p>
                  <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1f2937" }}>
                    {task.estimatedTime}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Asignado a</p>
                  <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1f2937" }}>
                    {task.assignedTo || "Sin asignar"}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Fecha Creación</p>
                  <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1f2937" }}>
                    {new Date(task.createdDate).toLocaleDateString('es-UY')}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid #f3f4f6" }}>
                <div>
                  {task.completedDate && (
                    <p style={{ fontSize: "0.875rem", color: "#059669" }}>
                      ✅ Completada el {new Date(task.completedDate).toLocaleDateString('es-UY')}
                    </p>
                  )}
                  {!task.completedDate && task.assignedTo && (
                    <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                      🔄 En proceso por {task.assignedTo}
                    </p>
                  )}
                  {!task.assignedTo && (
                    <p style={{ fontSize: "0.875rem", color: "#dc2626" }}>
                      ⏳ Esperando asignación
                    </p>
                  )}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Link
                    href={`/admin/tasks/${task.id}`}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#f3f4f6",
                      color: "#374151",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontSize: "0.875rem",
                      fontWeight: "500"
                    }}
                  >
                    Ver Detalles
                  </Link>
                  <Link
                    href={`/admin/tasks/${task.id}/edit`}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#dbeafe",
                      color: "#1d4ed8",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontSize: "0.875rem",
                      fontWeight: "500"
                    }}
                  >
                    Editar
                  </Link>
                  {task.status === "COMPLETADA" && (
                    <Link
                      href={`/admin/tasks/${task.id}/verify`}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontSize: "0.875rem",
                        fontWeight: "500"
                      }}
                    >
                      Verificar
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}