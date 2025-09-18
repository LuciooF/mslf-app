import Link from "next/link"

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #e2e8f0", padding: "1rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: "#2563eb", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>🏠</div>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}>MSLF</span>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/auth/login" style={{ padding: "0.5rem 1rem", color: "#6b7280", textDecoration: "none", borderRadius: "4px" }}>
              Iniciar Sesión
            </Link>
            <Link href="/auth/register" style={{ padding: "0.5rem 1rem", backgroundColor: "#2563eb", color: "white", textDecoration: "none", borderRadius: "4px" }}>
              Registrarse
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1f2937" }}>
          Viví mejor, pagá menos
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "2rem", maxWidth: "800px", margin: "0 auto 2rem" }}>
          Sistema revolucionario de alquiler donde completar tareas del hogar
          te permite reducir tu renta mensual. Ganás puntos, ahorrás dinero.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/auth/register" style={{
            padding: "0.75rem 2rem",
            fontSize: "1.125rem",
            backgroundColor: "#2563eb",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            display: "inline-block"
          }}>
            Comenzar Ahora
          </Link>
          <Link href="#como-funciona" style={{
            padding: "0.75rem 2rem",
            fontSize: "1.125rem",
            border: "2px solid #2563eb",
            color: "#2563eb",
            textDecoration: "none",
            borderRadius: "8px",
            display: "inline-block"
          }}>
            Ver Cómo Funciona
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem", color: "#1f2937" }}>
          ¿Por qué elegir MSLF?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏆</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Ganá Puntos</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Completá tareas de limpieza, mantenimiento y comunidad
              para acumular puntos que reducen tu alquiler mensual.
            </p>
          </div>

          <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📈</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Ahorrá Hasta 30%</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Reducí tu renta mensual hasta un 30% completando tareas.
              Vos controlás cuánto querés ahorrar cada mes.
            </p>
          </div>

          <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👥</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Comunidad Activa</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Formá parte de una comunidad donde todos colaboran
              para mantener los espacios en excelente estado.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" style={{ backgroundColor: "#f9fafb", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem", color: "#1f2937" }}>
            Cómo Funciona
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  flexShrink: 0
                }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Elegí Tareas Disponibles</h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    Accedé al panel de tareas y seleccioná las que querés completar.
                    Desde limpieza básica hasta mantenimiento especializado.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  flexShrink: 0
                }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Completá y Documentá</h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    Realizá la tarea y subí fotos como evidencia.
                    Nuestro sistema de verificación es rápido y transparente.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  flexShrink: 0
                }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Acumulá Puntos</h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    Los puntos se suman automáticamente a tu cuenta.
                    Cada 100 puntos equivalen a 10 pesos uruguayos de descuento.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  flexShrink: 0
                }}>
                  4
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>Pagá Menos Alquiler</h3>
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    Al final del mes, tus puntos se descuentan automáticamente
                    del monto del alquiler. Simple y transparente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Examples */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem", color: "#1f2937" }}>
          Ejemplos de Tareas y Puntos
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Limpieza Básica</h4>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb", marginBottom: "0.5rem" }}>50-100</div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.5rem" }}>puntos</p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Barrer, aspirar áreas comunes</p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Jardinería</h4>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a", marginBottom: "0.5rem" }}>100-150</div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.5rem" }}>puntos</p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Cortar césped, regar plantas</p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Mantenimiento</h4>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#7c3aed", marginBottom: "0.5rem" }}>150-300</div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.5rem" }}>puntos</p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Pintura, reparaciones menores</p>
          </div>

          <div style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", border: "1px solid #e5e7eb", textAlign: "center" }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>Emergencias</h4>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#dc2626", marginBottom: "0.5rem" }}>500+</div>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.5rem" }}>puntos</p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Atención urgente 24/7</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#2563eb", color: "white", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Comenzá a Ahorrar Hoy
          </h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>
            Unite a la comunidad MSLF y transformá tu forma de vivir
          </p>
          <Link href="/auth/register" style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            fontSize: "1.125rem",
            backgroundColor: "white",
            color: "#2563eb",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600"
          }}>
            Registrate Gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111827", color: "white", padding: "3rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: "24px", height: "24px", backgroundColor: "#2563eb", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>🏠</div>
                <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>MSLF</span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                Sistema inteligente de alquiler con reducción por puntos
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Enlaces</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "#9ca3af" }}>
                <li style={{ marginBottom: "0.5rem" }}><Link href="/about" style={{ color: "#9ca3af", textDecoration: "none" }}>Sobre Nosotros</Link></li>
                <li style={{ marginBottom: "0.5rem" }}><Link href="/properties" style={{ color: "#9ca3af", textDecoration: "none" }}>Propiedades</Link></li>
                <li style={{ marginBottom: "0.5rem" }}><Link href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Legal</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "#9ca3af" }}>
                <li style={{ marginBottom: "0.5rem" }}><Link href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacidad</Link></li>
                <li style={{ marginBottom: "0.5rem" }}><Link href="/terms" style={{ color: "#9ca3af", textDecoration: "none" }}>Términos</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Contacto</h4>
              <div style={{ fontSize: "0.875rem", color: "#9ca3af", lineHeight: "1.6" }}>
                Montevideo, Uruguay<br />
                info@mslf.uy<br />
                +598 99 123 456
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #374151", marginTop: "2rem", paddingTop: "2rem", textAlign: "center", fontSize: "0.875rem", color: "#9ca3af" }}>
            © 2024 MSLF. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}