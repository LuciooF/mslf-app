"use client"

import Link from "next/link"

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: "400px", width: "100%", margin: "0 1rem" }}>
        <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "32px", height: "32px", backgroundColor: "#2563eb", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>🏠</div>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>MSLF</span>
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>Iniciar Sesión</h1>
            <p style={{ color: "#6b7280" }}>Accedé a tu cuenta MSLF</p>
          </div>

          {/* Form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                type="email"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  boxSizing: "border-box"
                }}
                placeholder="tu-email@ejemplo.com"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                Contraseña
              </label>
              <input
                type="password"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  boxSizing: "border-box"
                }}
                placeholder="••••••••"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.875rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#374151" }}>
                <input type="checkbox" />
                Recordarme
              </label>
              <Link href="/auth/forgot-password" style={{ color: "#2563eb", textDecoration: "none" }}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Divider */}
          <div style={{ margin: "1.5rem 0", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
              <div style={{ width: "100%", border: "1px solid #e5e7eb" }}></div>
            </div>
            <div style={{ position: "relative", backgroundColor: "white", padding: "0 1rem", fontSize: "0.875rem", color: "#6b7280" }}>
              ¿No tenés cuenta?
            </div>
          </div>

          {/* Register Link */}
          <Link
            href="/auth/register"
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              textAlign: "center",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              color: "#374151",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              boxSizing: "border-box"
            }}
          >
            Crear cuenta nueva
          </Link>

          {/* Back to Home */}
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/" style={{ color: "#6b7280", fontSize: "0.875rem", textDecoration: "none" }}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}