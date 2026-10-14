/**
 * [RUTA]    src/mappers/juegoMapper.js
 * [CAPA]    mappers · anillo 0 (no conoce a nadie)
 * [HACE]    Traduce un juego crudo de la API a los nombres
 *           que usa nuestra app (en español)
 * [LO USAN] loaders/cargarCatalogo.js
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [EXPORTA] Recibe UN juego crudo y devuelve un objeto con los
// nombres de la app
export function mapearJuego(juego) {
  // [DEVUELVE] Objeto nuevo con los campos ya traducidos
  return {
    nombre: juego.name,
    anio: juego.releaseYear,
    plataforma: juego.platform,
    imagen: juego.imageUrl,
  }
}