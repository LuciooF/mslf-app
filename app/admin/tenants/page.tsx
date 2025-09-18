"use client"

import Link from "next/link"

export default function TenantsPage() {
  const tenants = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@email.com",
      cedula: "12345678",
      phone: "099123456",
      property: "Propiedad Centro",
      room: "Habitación 3",
      rentAmount: 25000,
      pointsBalance: 450,
      status: "Activo",
      joinDate: "2024-01-15",
      tasksCompleted: 12
    },
    {
      id: 2,
      name: "María González",
      email: "maria.gonzalez@email.com",
      cedula: "87654321",
      phone: "098765432",
      property: "Propiedad Pocitos",
      room: "Habitación 1",
      rentAmount: 35000,
      pointsBalance: 320,
      status: "Activo",
      joinDate: "2024-02-01",
      tasksCompleted: 8
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@email.com",
      cedula: "11223344",
      phone: "091234567",
      property: "Propiedad Cordón",
      room: "Habitación 7",
      rentAmount: 22000,
      pointsBalance: 180,
      status: "Activo",
      joinDate: "2023-12-10",
      tasksCompleted: 15
    },
    {
      id: 4,
      name: "Ana Silva",
      email: "ana.silva@email.com",
      cedula: "55667788",
      phone: "092345678",
      property: "Propiedad Punta Carretas",
      room: "Habitación 2",
      rentAmount: 40000,
      pointsBalance: 590,
      status: "Activo",
      joinDate: "2024-01-20",
      tasksCompleted: 18
    },
    {
      id: 5,
      name: "Pedro Martínez",
      email: "pedro.martinez@email.com",
      cedula: "99887766",
      phone: "093456789",
      property: "Propiedad Tres Cruces",
      room: "Habitación 5",
      rentAmount: 28000,
      pointsBalance: 75,
      status: "Inactivo",
      joinDate: "2023-11-05",
      tasksCompleted: 3
    }
  ]

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
              <Link href="/admin/tenants" style={{ color: "#2563eb", fontWeight: "500", textDecoration: "none" }}>
                Inquilinos
              </Link>
              <Link href="/admin/tasks" style={{ color: "#6b7280", textDecoration: "none" }}>
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
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Inquilinos</h1>
            <p style={{ color: "#6b7280" }}>Gestiona todos los inquilinos del sistema</p>
          </div>
          <Link
            href="/admin/tenants/new"
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
            👤 Nuevo Inquilino
          </Link>
        </div>

        {/* Tenants Grid */}
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {tenants.map((tenant) => (
            <div
              key={tenant.id}
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
                padding: "1.5rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                    {tenant.name}
                  </h3>
                  <p style={{ color: "#6b7280", marginBottom: "0.25rem" }}>{tenant.email}</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Cédula: {tenant.cedula}</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Tel: {tenant.phone}</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "999px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      backgroundColor: tenant.status === "Activo" ? "#dcfce7" : "#fee2e2",
                      color: tenant.status === "Activo" ? "#166534" : "#dc2626"
                    }}
                  >
                    {tenant.status}
                  </span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Propiedad</p>
                  <p style={{ fontSize: "1rem", fontWeight: "500", color: "#1f2937" }}>{tenant.property}</p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{tenant.room}</p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Alquiler Mensual</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>
                    ${tenant.rentAmount.toLocaleString('es-UY')}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Puntos Acumulados</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#2563eb" }}>
                    {tenant.pointsBalance} pts
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Tareas Completadas</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#059669" }}>
                    {tenant.tasksCompleted}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid #f3f4f6" }}>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    Miembro desde: {new Date(tenant.joinDate).toLocaleDateString('es-UY')}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    Descuento estimado: ${Math.round(tenant.pointsBalance * 0.8).toLocaleString('es-UY')}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Link
                    href={`/admin/tenants/${tenant.id}`}
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
                    Ver Perfil
                  </Link>
                  <Link
                    href={`/admin/tenants/${tenant.id}/edit`}
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
                  <Link
                    href={`/admin/tenants/${tenant.id}/points`}
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#fef3c7",
                      color: "#92400e",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontSize: "0.875rem",
                      fontWeight: "500"
                    }}
                  >
                    Gestionar Puntos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}