/**
 * [RUTA]    src/sections/SeccionMonstruos.jsx
 * [CAPA]    sections · anillo 4 (conoce a components)
 * [HACE]    Arma la sección de monstruos: un Panel titulado
 *           "Monstruos" con tres TarjetaMonstruo dentro
 *           (posiciones 0, 1 y 2), escritas a mano sin .map()
 * [LO USAN] App.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] El Panel (contenedor visual) del layout
import Panel from '../components/layout/Panel.jsx'

// [IMPORTA] La tarjeta que muestra cada monstruo
import TarjetaMonstruo from '../components/monstruos/TarjetaMonstruo.jsx'

// [RECIBE] La lista monstruos (ya mapeada) como prop
export default function SeccionMonstruos({ monstruos }) {
  // [DIBUJA] Panel con las tres tarjetas de monstruos
  return (
    <Panel titulo="Monstruos">
      {/* [DIBUJA] Primer monstruo: posición 0 */}
      <TarjetaMonstruo
        nombre={monstruos[0].nombre}
        esJefe={monstruos[0].esJefe}
        ubicacion={monstruos[0].ubicacion}
        nivel={monstruos[0].nivel}
        hp={monstruos[0].hp}
        debilidad={monstruos[0].debilidad}
        imagen={monstruos[0].imagen}
      />
      {/* [DIBUJA] Segundo monstruo: posición 1 */}
      <TarjetaMonstruo
        nombre={monstruos[1].nombre}
        esJefe={monstruos[1].esJefe}
        ubicacion={monstruos[1].ubicacion}
        nivel={monstruos[1].nivel}
        hp={monstruos[1].hp}
        debilidad={monstruos[1].debilidad}
        imagen={monstruos[1].imagen}
      />
      {/* [DIBUJA] Tercer monstruo: posición 2 */}
      <TarjetaMonstruo
        nombre={monstruos[2].nombre}
        esJefe={monstruos[2].esJefe}
        ubicacion={monstruos[2].ubicacion}
        nivel={monstruos[2].nivel}
        hp={monstruos[2].hp}
        debilidad={monstruos[2].debilidad}
        imagen={monstruos[2].imagen}
      />
    </Panel>
  )
}