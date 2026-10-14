/**
 * [RUTA]    src/sections/SeccionPersonajes.jsx
 * [CAPA]    sections · anillo 4 (conoce a components)
 * [HACE]    Arma la sección de personajes: un Panel titulado
 *           "Personajes" con dos TarjetaPersonaje dentro
 *           (posiciones 0 y 1), escritas a mano sin .map()
 * [LO USAN] App.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] El Panel (contenedor visual) del layout
import Panel from '../components/layout/Panel.jsx'

// [IMPORTA] La tarjeta que muestra cada personaje
import TarjetaPersonaje from '../components/personajes/TarjetaPersonaje.jsx'

// [RECIBE] La lista personajes (ya mapeada) como prop
export default function SeccionPersonajes({ personajes }) {
  // [DIBUJA] Panel con las dos tarjetas de personajes
  return (
    <Panel titulo="Personajes">
      {/* [DIBUJA] Primer personaje: posición 0 */}
      <TarjetaPersonaje
        nombre={personajes[0].nombre}
        rol={personajes[0].rol}
        imagen={personajes[0].imagen}
        descripcion={personajes[0].descripcion}
      />
      {/* [DIBUJA] Segundo personaje: posición 1 */}
      <TarjetaPersonaje
        nombre={personajes[1].nombre}
        rol={personajes[1].rol}
        imagen={personajes[1].imagen}
        descripcion={personajes[1].descripcion}
      />
    </Panel>
  )
}