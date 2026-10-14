/**
 * [RUTA]    src/main.jsx
 * [CAPA]    anillo 6 (conoce a App, loaders y estilos globales)
 * [HACE]    Arranca la app: importa estilos globales, carga el
 *           catalogo con cargarCatalogo() y monta <App /> dentro
 *           de StrictMode en el div#root. Sin hooks: usa await
 *           suelto (top-level await) permitido solo en este archivo
 * [LO USAN] el navegador (punto de entrada que carga index.html)
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] StrictMode (modo estricto de React en desarrollo)
import { StrictMode } from 'react'

// [IMPORTA] createRoot (API de React 19 para montar la app)
import { createRoot } from 'react-dom/client'

// [IMPORTA] Estilos globales (tokens y base)
import './styles/variables.css'
import './styles/base.css'

// [IMPORTA] El componente App (raiz de la interfaz)
import App from './App.jsx'

// [IMPORTA] El loader que arma el catalogo (anillo 2)
import { cargarCatalogo } from './loaders/cargarCatalogo.js'

// [HACE] Carga el catalogo una sola vez, antes de dibujar nada
const catalogo = await cargarCatalogo()

// [HACE] Monta <App /> dentro del div#root con los datos del catalogo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App
      juego={catalogo.juego}
      personajes={catalogo.personajes}
      monstruos={catalogo.monstruos}
    />
  </StrictMode>,
)