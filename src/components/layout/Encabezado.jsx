/**
 * [RUTA]    src/components/layout/Encabezado.jsx
 * [CAPA]    components · anillo 3 (solo conoce su propio CSS)
 * [HACE]    Dibuja el encabezado de la página: título y subtítulo
 * [LO USAN] App.jsx
 * [VERSIÓN] 1.0.1 · 2026-10-14 · corrige ruta del import de CSS
 */

// [IMPORTA] Su propio CSS (anillo 0 · styles), dos niveles arriba
import '../../styles/Encabezado.css'

// [RECIBE] titulo y subtitulo como props (texto)
export default function Encabezado({ titulo, subtitulo }) {
  // [DIBUJA] header con el título y el subtítulo
  return (
    <header className="encabezado">
      {/* [DIBUJA] Título principal en tipografía pixel (CSS lo aplica) */}
      <h1 className="encabezado__titulo">{titulo}</h1>
      {/* [DIBUJA] Subtítulo debajo del título */}
      <p className="encabezado__subtitulo">{subtitulo}</p>
    </header>
  )
}