/**
 * [RUTA]    src/main.jsx
 * [CAPA]    raíz de src (anillo 6, se reescribe en el Paso 10)
 * [HACE]    Arranca React y monta <App /> dentro del div#root
 * [LO USAN] el navegador (punto de entrada que carga index.html)
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial (plantilla Vite,
 *           sin imports [PRUEBA])
 */

// [IMPORTA] StrictMode (modo estricto de React en desarrollo)
import { StrictMode } from 'react'

// [IMPORTA] createRoot (API de React 19 para montar la app)
import { createRoot } from 'react-dom/client'

// [IMPORTA] Estilos de la plantilla (se eliminan en el Paso 11)
import './index.css'

// [IMPORTA] El componente App (raíz de la interfaz)
import App from './App.jsx'

// [HACE] Monta <App /> dentro del div#root del index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)