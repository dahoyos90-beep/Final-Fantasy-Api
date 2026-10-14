/**
 * [RUTA]    src/loaders/cargarCatalogo.js
 * [CAPA]    loaders · anillo 2 (conoce a services y mappers)
 * [HACE]    Orquesta la carga: pide los tres recursos a la API,
 *           los pasa por sus mappers con posiciones fijas y
 *           devuelve el catalogo { juego, personajes, monstruos }
 * [LO USAN] main.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] Los tres servicios (anillo 1)
import { obtenerJuegos } from '../services/juegosService.js'
import { obtenerPersonajes } from '../services/personajesService.js'
import { obtenerMonstruos } from '../services/monstruosService.js'

// [IMPORTA] Los tres mappers (anillo 0)
import { mapearJuego } from '../mappers/juegoMapper.js'
import { mapearPersonaje } from '../mappers/personajeMapper.js'
import { mapearMonstruo } from '../mappers/monstruoMapper.js'

// [EXPORTA] Función async que arma el catalogo completo
export async function cargarCatalogo() {
  try {
    // [HACE] Pide los tres recursos, uno tras otro (await encadenado)
    const juegos = await obtenerJuegos()
    const personajes = await obtenerPersonajes()
    const monstruos = await obtenerMonstruos()

    // [HACE] Traduce cada recurso con posiciones fijas:
    //        juego -> FF7 esta en la posicion 6
    const juego = mapearJuego(juegos[6])

    // [HACE] personajes -> Aerith (0) y Elmyra (1)
    const personajesMapeados = [
      mapearPersonaje(personajes[0]),
      mapearPersonaje(personajes[1]),
    ]

    // [HACE] monstruos -> posiciones 0, 6 y 9 de la primera pagina
    const monstruosMapeados = [
      mapearMonstruo(monstruos[0]),
      mapearMonstruo(monstruos[6]),
      mapearMonstruo(monstruos[9]),
    ]

    // [DEVUELVE] Objeto final que usara App
    return {
      juego: juego,
      personajes: personajesMapeados,
      monstruos: monstruosMapeados,
    }
  } catch (error) {
    // [HACE] Si algo falla (red, CORS, posicion inexistente),
    //        avisa en consola y devuelve el catalogo vacio para
    //        que la pantalla muestre AvisoSinDatos en vez de romperse
    console.error('No se pudo cargar el catalogo de la MoogleAPI:', error)

    // [DEVUELVE] Catalogo vacio controlado
    return {
      juego: null,
      personajes: [],
      monstruos: [],
    }
  }
}