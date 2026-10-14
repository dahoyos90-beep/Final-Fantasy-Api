/**
 * [RUTA]    src/services/monstruosService.js
 * [CAPA]    services · anillo 1 (conoce a config)
 * [HACE]    Pide la lista de monstruos de FF7 a la MoogleAPI y
 *           devuelve el array crudo (campo items)
 * [LO USAN] loaders/cargarCatalogo.js
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] La dirección base de la API (config · anillo 0)
import { URL_BASE } from '../config/api.js'

// [IMPORTA] El id del juego (FF7 = 7) (config · anillo 0)
import { ID_JUEGO } from '../config/juego.js'

// [EXPORTA] Función async que trae la lista de monstruos del juego
export async function obtenerMonstruos() {
  // [HACE] Llama al endpoint /monsters filtrando por el id del juego
  const respuesta = await fetch(`${URL_BASE}/monsters?gameId=${ID_JUEGO}`)

  // [HACE] Si la API responde con error, lo lanza hacia arriba
  if (!respuesta.ok) {
    throw new Error(`No se pudo obtener la lista de monstruos (HTTP ${respuesta.status})`)
  }

  // [HACE] Convierte la respuesta a JSON
  const datos = await respuesta.json()

  // [DEVUELVE] El array de monstruos que viene en el campo items
  return datos.items
}