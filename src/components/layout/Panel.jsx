/**
 * [RUTA]    src/components/layout/Panel.jsx
 * [CAPA]    components · anillo 3 (solo conoce su propio CSS)
 * [HACE]    Dibuja una ventana de menú estilo FF7: un título
 *           arriba (con orbe de materia por CSS) y debajo su
 *           contenido (children)
 * [LO USAN] sections/SeccionJuego, SeccionPersonajes, SeccionMonstruos
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] Su propio CSS (anillo 0 · styles)
import '../styles/Panel.css'

// [RECIBE] titulo (texto) y children (el contenido que va adentro)
export default function Panel({ titulo, children }) {
  // [DIBUJA] section con el título en h2 y luego el contenido
  return (
    <section className="panel">
      {/* [DIBUJA] Título del panel; la orbe de materia la pone el CSS con ::before */}
      <h2 className="panel__titulo">{titulo}</h2>
      {/* [DIBUJA] Contenido que le pasa el padre (tarjetas, etc.) */}
      <div className="panel__contenido">{children}</div>
    </section>
  )
}