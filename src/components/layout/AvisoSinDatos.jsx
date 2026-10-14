/**
 * [RUTA]    src/components/layout/AvisoSinDatos.jsx
 * [CAPA]    components · anillo 3 (solo conoce su propio CSS)
 * [HACE]    Muestra una ventana roja oscura cuando la API no
 *           responde: avisa que no llegaron los datos y sugiere
 *           revisar conexión y consola (F12)
 * [LO USAN] App.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] Su propio CSS (anillo 0 · styles)
import '../../styles/AvisoSinDatos.css'

// [DIBUJA] Sin props: mensaje fijo en español
export default function AvisoSinDatos() {
  return (
    <section className="aviso" role="alert">
      {/* [DIBUJA] Título del aviso, en tipografía pixel */}
      <h2 className="aviso__titulo">Sin datos</h2>
      {/* [DIBUJA] Explicación y qué hacer */}
      <p className="aviso__texto">
        No llegaron los datos de la API. Revisa tu conexión a internet y mira la
        consola del navegador (F12) para más detalles.
      </p>
    </section>
  )
}