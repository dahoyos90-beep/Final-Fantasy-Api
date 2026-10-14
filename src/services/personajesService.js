/**
 * [RUTA]    src/services/personajesService.js
 * [CAPA]    services · anillo 1 (conoce a config)
 * [HACE]    Busca personajes por nombre en la MoogleAPI y
 *           devuelve el array crudo de resultados (campo results)
 * [LO USAN] loaders/cargarCatalogo.js
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] La dirección base de la API (config · anillo 0)
import { URL_BASE } from '../config/api.js'

// [IMPORTA] El nombre a buscar, fijo para este taller (config · anillo 0)
import { BUSQUEDA_PERSONAJE } from '../config/juego.js'

// [EXPORTA] Función async que trae los personajes de la búsqueda
export async function obtenerPersonajes() {
  // [HACE] Llama al endpoint de búsqueda de personajes con la query configurada
  const respuesta = await fetch(`${URL_BASE}/characters/search?query=${BUSQUEDA_PERSONAJE}`)

  // [HACE] Si la API responde con error, lo lanza hacia arriba
  if (!respuesta.ok) {
    throw new Error(`No se pudo obtener la lista de personajes (HTTP ${respuesta.status})`)
  }

  // [HACE] Convierte la respuesta a JSON
  const datos = await respuesta.json()

  // [DEVUELVE] El array de personajes que viene en el campo results
  return datos.results
}