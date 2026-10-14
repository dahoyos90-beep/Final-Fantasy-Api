/**
 * [RUTA]    src/config/api.js
 * [CAPA]    config · anillo 0 (no conoce a nadie)
 * [HACE]    Guarda la dirección base de la MoogleAPI. En
 *           desarrollo apunta a "/api", que Vite redirige al
 *           servidor real por medio del proxy (evita CORS)
 * [LO USAN] los tres archivos de services/
 * [VERSIÓN] 1.0.1 · 2026-10-14 · usa proxy de Vite para evitar CORS
 */

// [ATENCIÓN] "/api" solo funciona en desarrollo con el proxy
// configurado en vite.config.js. En producción se cambiaría por
// la URL completa del servidor real
// [EXPORTA] Si la API cambia de dirección, solo se edita esta línea
export const URL_BASE = '/api'