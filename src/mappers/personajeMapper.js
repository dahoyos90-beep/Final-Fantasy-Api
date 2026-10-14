/**
 * [RUTA]    src/mappers/personajeMapper.js
 * [CAPA]    mappers · anillo 0 (no conoce a nadie)
 * [HACE]    Traduce un personaje crudo de la API a los nombres
 *           que usa nuestra app (en español) y resuelve el caso
 *           en que role venga null o vacío
 * [LO USAN] loaders/cargarCatalogo.js
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [EXPORTA] Recibe UN personaje crudo y devuelve un objeto con
// los nombres de la app
export function mapearPersonaje(personaje) {
  // [ATENCIÓN] role puede venir null (ej. Elmyra Gainsborough);
  // un valor por defecto NO cubre null, por eso usamos ternario
  const rol = personaje.role ? personaje.role : 'Sin rol'

  // [DEVUELVE] Objeto nuevo con los campos ya traducidos
  return {
    nombre: personaje.name,
    rol: rol,
    imagen: personaje.imageUrl,
    descripcion: personaje.description,
  }
}