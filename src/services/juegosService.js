/**
 * [RUTA]    src/services/juegosService.js
 * [CAPA]    services · anillo 1 (conoce a config)
 * [HACE]    Pide la lista de juegos a la MoogleAPI y devuelve
 *           el array crudo de juegos (campo items)
 * [LO USAN] loaders/cargarCatalogo.js
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] La dirección base de la API (config · anillo 0)
import { URL_BASE } from '../config/api.js'

// [EXPORTA] Función async que trae la lista de juegos
export async function obtenerJuegos() {
  // [HACE] Llama al endpoint /games de la MoogleAPI
  const respuesta = await fetch(`${URL_BASE}/games`)

  // [HACE] Si la API responde con error (404, 500, etc.), lo lanza hacia arriba
  if (!respuesta.ok) {
    throw new Error(`No se pudo obtener la lista de juegos (HTTP ${respuesta.status})`)
  }

  // [HACE] Convierte la respuesta a JSON
  const datos = await respuesta.json()

  // [DEVUELVE] El array de juegos que viene en el campo items
  return datos.items
}