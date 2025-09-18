"use client"

import Link from "next/link"

export default function RegisterPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 0" }}>
      <div style={{ maxWidth: "400px", width: "100%", margin: "0 1rem" }}>
        <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "32px", height: "32px", backgroundColor: "#2563eb", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>🏠</div>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>MSLF</span>
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>Crear Cuenta</h1>
            <p style={{ color: "#6b7280" }}>Unite a la comunidad MSLF</p>
          </div>

          {/* Form */}
          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                  placeholder="Juan"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                  Apellido
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                  placeholder="Pérez"
                />
              </div>
            </div>

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
                placeholder="juan@ejemplo.com"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                Cédula (sin puntos ni guiones)
              </label>
              <input
                type="text"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  boxSizing: "border-box"
                }}
                placeholder="12345678"
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  boxSizing: "border-box"
                }}
                placeholder="099 123 456"
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

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                Confirmar Contraseña
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

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <input type="checkbox" required style={{ marginTop: "0.25rem" }} />
              <label style={{ fontSize: "0.875rem", color: "#374151", lineHeight: "1.4" }}>
                Acepto los{" "}
                <Link href="/terms" style={{ color: "#2563eb", textDecoration: "none" }}>
                  términos y condiciones
                </Link>{" "}
                y la{" "}
                <Link href="/privacy" style={{ color: "#2563eb", textDecoration: "none" }}>
                  política de privacidad
                </Link>
              </label>
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
                transition: "background-color 0.2s",
                marginTop: "0.5rem"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}
            >
              Crear Cuenta
            </button>
          </form>

          {/* Divider */}
          <div style={{ margin: "1.5rem 0", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
              <div style={{ width: "100%", border: "1px solid #e5e7eb" }}></div>
            </div>
            <div style={{ position: "relative", backgroundColor: "white", padding: "0 1rem", fontSize: "0.875rem", color: "#6b7280" }}>
              ¿Ya tenés cuenta?
            </div>
          </div>

          {/* Login Link */}
          <Link
            href="/auth/login"
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
            Iniciar sesión
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