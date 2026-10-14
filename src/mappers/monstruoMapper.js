/**
 * [RUTA]    src/mappers/monstruoMapper.js
 * [CAPA]    mappers · anillo 0 (no conoce a nadie)
 * [HACE]    Traduce un monstruo crudo de la API a los nombres
 *           que usa nuestra app (en español), calcula esJefe y
 *           resuelve el caso en que weaknesses venga null o vacío
 * [LO USAN] loaders/cargarCatalogo.js
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [EXPORTA] Recibe UN monstruo crudo y devuelve un objeto con
// los nombres de la app
export function mapearMonstruo(monstruo) {
  // [HACE] esJefe es true solo si la API dice category === 'Boss'
  const esJefe = monstruo.category === 'Boss'

  // [ATENCIÓN] weaknesses puede venir null; si no hay, ponemos 'Ninguna'
  const debilidad = monstruo.weaknesses ? monstruo.weaknesses : 'Ninguna'

  // [DEVUELVE] Objeto nuevo con los campos ya traducidos
  return {
    nombre: monstruo.name,
    esJefe: esJefe,
    ubicacion: monstruo.location,
    nivel: monstruo.level,
    hp: monstruo.hitPoints,
    debilidad: debilidad,
    imagen: monstruo.imageUrl,
  }
}