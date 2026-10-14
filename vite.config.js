/**
 * [RUTA]    vite.config.js
 * [CAPA]    raíz del proyecto (config de Vite, no es src)
 * [HACE]    Configura Vite y su plugin de React, y agrega un
 *           proxy de desarrollo para evitar CORS: las peticiones
 *           a /api se reenvían a https://moogleapi.com/api
 * [LO USAN] Vite (al arrancar y al recargar en caliente)
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] defineConfig para tener autocompletado y validación
import { defineConfig } from 'vite'

// [IMPORTA] El plugin oficial de React para Vite
import react from '@vitejs/plugin-react'

// [EXPORTA] Configuración de Vite
export default defineConfig({
  // [HACE] Activa el plugin de React (JSX, Fast Refresh)
  plugins: [react()],

  // [HACE] Configura el servidor de desarrollo
  server: {
    // [HACE] Proxy: cualquier petición a /api se reenvía a MoogleAPI
    proxy: {
      '/api': {
        // [HACE] Servidor real al que apunta el proxy
        target: 'https://moogleapi.com',
        // [HACE] Reescribe el origen de la cabecera Host
        changeOrigin: true,
      },
    },
  },
})