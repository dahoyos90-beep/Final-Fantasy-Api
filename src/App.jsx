/**
 * [RUTA]    src/App.jsx
 * [CAPA]    anillo 5 (conoce a sections y components/layout)
 * [HACE]    Ordena la pantalla: dibuja el Encabezado, decide si
 *           hay datos suficientes y, segun eso, muestra las tres
 *           secciones o el aviso de sin datos. No hace fetch ni
 *           transforma datos: solo recibe props y las reparte
 * [LO USAN] main.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] El encabezado (anillo 3 · components/layout)
import Encabezado from './components/layout/Encabezado.jsx'

// [IMPORTA] El aviso de "sin datos" (anillo 3 · components/layout)
import AvisoSinDatos from './components/layout/AvisoSinDatos.jsx'

// [IMPORTA] Las tres secciones (anillo 4 · sections)
import SeccionJuego from './sections/SeccionJuego.jsx'
import SeccionPersonajes from './sections/SeccionPersonajes.jsx'
import SeccionMonstruos from './sections/SeccionMonstruos.jsx'

// [RECIBE] juego (objeto o null), personajes (lista) y monstruos (lista)
export default function App({ juego, personajes, monstruos }) {
  // [HACE] Hay datos suficientes si el juego existe, hay 2 personajes
  //        y hay 3 monstruos; si falta algo, mostramos el aviso
  const hayDatos =
    juego !== null && personajes.length === 2 && monstruos.length === 3

  // [DIBUJA] Encabezado arriba y luego, segun hayDatos, las
  //          secciones o el aviso
  return (
    <>
      {/* [DIBUJA] Encabezado comun a toda la pantalla */}
      <Encabezado
        titulo="Final Fantasy VII"
        subtitulo="Datos en vivo desde la MoogleAPI"
      />

      {/* [DIBUJA] Ternario: si hay datos, las tres secciones; si no, el aviso */}
      {hayDatos ? (
        <>
          <SeccionJuego juego={juego} />
          <SeccionPersonajes personajes={personajes} />
          <SeccionMonstruos monstruos={monstruos} />
        </>
      ) : (
        <AvisoSinDatos />
      )}
    </>
  )
}