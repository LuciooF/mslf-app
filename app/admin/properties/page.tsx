"use client"

import Link from "next/link"

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      name: "Propiedad Centro",
      address: "18 de Julio 1234, Montevideo",
      type: "Apartamento",
      rooms: 12,
      occupiedRooms: 10,
      monthlyRent: 25000,
      status: "Activa"
    },
    {
      id: 2,
      name: "Propiedad Pocitos",
      address: "Bvar. España 567, Pocitos",
      type: "Casa",
      rooms: 8,
      occupiedRooms: 8,
      monthlyRent: 35000,
      status: "Activa"
    },
    {
      id: 3,
      name: "Propiedad Cordón",
      address: "Canelones 890, Cordón",
      type: "Apartamento",
      rooms: 15,
      occupiedRooms: 12,
      monthlyRent: 22000,
      status: "Activa"
    },
    {
      id: 4,
      name: "Propiedad Punta Carretas",
      address: "Ellauri 234, Punta Carretas",
      type: "Casa",
      rooms: 6,
      occupiedRooms: 5,
      monthlyRent: 40000,
      status: "Mantenimiento"
    },
    {
      id: 5,
      name: "Propiedad Tres Cruces",
      address: "Miguelete 456, Tres Cruces",
      type: "Apartamento",
      rooms: 10,
      occupiedRooms: 7,
      monthlyRent: 28000,
      status: "Activa"
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
              <Link href="/admin/properties" style={{ color: "#2563eb", fontWeight: "500", textDecoration: "none" }}>
                Propiedades
              </Link>
              <Link href="/admin/tenants" style={{ color: "#6b7280", textDecoration: "none" }}>
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
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Propiedades</h1>
            <p style={{ color: "#6b7280" }}>Gestiona todas las propiedades del sistema</p>
          </div>
          <Link
            href="/admin/properties/new"
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
            ➕ Nueva Propiedad
          </Link>
        </div>

        {/* Properties Grid */}
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {properties.map((property) => (
            <div
              key={property.id}
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
                    {property.name}
                  </h3>
                  <p style={{ color: "#6b7280", marginBottom: "0.25rem" }}>{property.address}</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{property.type}</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "999px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      backgroundColor: property.status === "Activa" ? "#dcfce7" : "#fef3c7",
                      color: property.status === "Activa" ? "#166534" : "#92400e"
                    }}
                  >
                    {property.status}
                  </span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Habitaciones</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>
                    {property.occupiedRooms}/{property.rooms}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Ocupación</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>
                    {Math.round((property.occupiedRooms / property.rooms) * 100)}%
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Alquiler Mensual</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>
                    ${property.monthlyRent.toLocaleString('es-UY')}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.25rem" }}>Ingresos Mensuales</p>
                  <p style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>
                    ${(property.monthlyRent * property.occupiedRooms).toLocaleString('es-UY')}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Link
                  href={`/admin/properties/${property.id}`}
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
                  href={`/admin/properties/${property.id}/edit`}
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
                  href={`/admin/properties/${property.id}/settings`}
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
                  Configurar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}