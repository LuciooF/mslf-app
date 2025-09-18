"use client"

import Link from "next/link"

export default function AdminDashboard() {
  const stats = {
    totalProperties: 5,
    totalTenants: 23,
    activeTasks: 12,
    monthlyRevenue: 185000,
    totalPointsIssued: 4500,
    averageOccupancy: 92
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
              <Link href="/admin" style={{ color: "#2563eb", fontWeight: "500", textDecoration: "none" }}>
                Panel
              </Link>
              <Link href="/admin/properties" style={{ color: "#6b7280", textDecoration: "none" }}>
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
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", color: "#1f2937" }}>Panel de Administración</h1>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#6b7280" }}>
                Propiedades Activas
              </div>
              <div style={{ fontSize: "1rem", color: "#9ca3af" }}>🏠</div>
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>{stats.totalProperties}</div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              {stats.averageOccupancy}% ocupación promedio
            </p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#6b7280" }}>
                Total Inquilinos
              </div>
              <div style={{ fontSize: "1rem", color: "#9ca3af" }}>👥</div>
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>{stats.totalTenants}</div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              Activos en el sistema
            </p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#6b7280" }}>
                Tareas Activas
              </div>
              <div style={{ fontSize: "1rem", color: "#9ca3af" }}>📋</div>
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>{stats.activeTasks}</div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              Pendientes y en progreso
            </p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#6b7280" }}>
                Ingresos del Mes
              </div>
              <div style={{ fontSize: "1rem", color: "#9ca3af" }}>📈</div>
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>
              ${stats.monthlyRevenue.toLocaleString('es-UY')}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              Pesos uruguayos
            </p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#6b7280" }}>
                Puntos Emitidos
              </div>
              <div style={{ fontSize: "1rem", color: "#9ca3af" }}>⭐</div>
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>
              {stats.totalPointsIssued.toLocaleString('es-UY')}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              Este mes
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          <Link href="/admin/properties/new" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", cursor: "pointer", transition: "box-shadow 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1f2937" }}>Nueva Propiedad</span>
                <div style={{ fontSize: "1.25rem" }}>➕</div>
              </div>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Agregar una nueva propiedad al sistema
              </p>
            </div>
          </Link>

          <Link href="/admin/tenants/new" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", cursor: "pointer", transition: "box-shadow 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1f2937" }}>Nuevo Inquilino</span>
                <div style={{ fontSize: "1.25rem" }}>👤</div>
              </div>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Registrar un nuevo inquilino
              </p>
            </div>
          </Link>

          <Link href="/admin/tasks/new" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", cursor: "pointer", transition: "box-shadow 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1f2937" }}>Nueva Tarea</span>
                <div style={{ fontSize: "1.25rem" }}>📝</div>
              </div>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Crear una nueva tarea para una propiedad
              </p>
            </div>
          </Link>

          <Link href="/admin/settings" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", cursor: "pointer", transition: "box-shadow 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#1f2937" }}>Configuración</span>
                <div style={{ fontSize: "1.25rem" }}>⚙️</div>
              </div>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Ajustar configuración del sistema
              </p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
          <div style={{ padding: "1.5rem", borderBottom: "1px solid #e5e7eb" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.25rem" }}>Actividad Reciente</h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
              Últimas acciones en el sistema
            </p>
          </div>
          <div style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid #f3f4f6" }}>
                <div>
                  <p style={{ fontWeight: "500", color: "#1f2937", marginBottom: "0.25rem" }}>Tarea completada</p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    Juan Pérez completó &ldquo;Limpieza de áreas comunes&rdquo; - 100 puntos otorgados
                  </p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Hace 5 min</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid #f3f4f6" }}>
                <div>
                  <p style={{ fontWeight: "500", color: "#1f2937", marginBottom: "0.25rem" }}>Nuevo inquilino</p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    María González se registró en Propiedad Centro
                  </p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Hace 1 hora</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid #f3f4f6" }}>
                <div>
                  <p style={{ fontWeight: "500", color: "#1f2937", marginBottom: "0.25rem" }}>Pago recibido</p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    Alquiler de Febrero - Propiedad Pocitos - $25,000 (300 puntos aplicados)
                  </p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Hace 3 horas</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontWeight: "500", color: "#1f2937", marginBottom: "0.25rem" }}>Configuración actualizada</p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                    Puntos por limpieza actualizados en Propiedad Cordón
                  </p>
                </div>
                <span style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Hace 1 día</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div style={{ backgroundColor: "#fef3c7", border: "1px solid #f59e0b", borderRadius: "8px", padding: "1rem", marginTop: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ fontSize: "1.25rem" }}>ℹ️</div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#92400e", marginBottom: "0.25rem" }}>Modo Demo</h3>
              <p style={{ fontSize: "0.875rem", color: "#92400e" }}>
                Esta es una demostración del panel administrativo. Para usar funcionalidades completas,
                configure la base de datos en el archivo .env
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}