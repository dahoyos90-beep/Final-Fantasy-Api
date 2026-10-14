/**
 * [RUTA]    src/config/juego.js
 * [CAPA]    config · anillo 0 (no conoce a nadie)
 * [HACE]    Guarda los dos datos fijos del taller: qué juego
 *           pedimos (FF7) y qué personaje buscamos (Aerith)
 * [LO USAN] personajesService y monstruosService
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [EXPORTA] FF7 es el juego con id 7 en la MoogleAPI
export const ID_JUEGO = 7

// [EXPORTA] La búsqueda de personajes que pide el taller
export const BUSQUEDA_PERSONAJE = 'Aerith'