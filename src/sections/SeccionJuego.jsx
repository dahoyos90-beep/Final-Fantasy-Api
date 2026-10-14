/**
 * [RUTA]    src/sections/SeccionJuego.jsx
 * [CAPA]    sections · anillo 4 (conoce a components)
 * [HACE]    Arma la sección del juego: un Panel titulado
 *           "El juego" con una sola TarjetaJuego dentro
 * [LO USAN] App.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] El Panel (contenedor visual) del layout
import Panel from '../components/layout/Panel.jsx'

// [IMPORTA] La tarjeta que muestra los datos del juego
import TarjetaJuego from '../components/juegos/TarjetaJuego.jsx'

// [RECIBE] El objeto juego (ya mapeado) como prop
export default function SeccionJuego({ juego }) {
  // [DIBUJA] Panel con la tarjeta del juego dentro
  return (
    <Panel titulo="El juego">
      {/* [DIBUJA] Pasa cada campo del juego como prop, uno por uno */}
      <TarjetaJuego
        nombre={juego.nombre}
        anio={juego.anio}
        plataforma={juego.plataforma}
        imagen={juego.imagen}
      />
    </Panel>
  )
}