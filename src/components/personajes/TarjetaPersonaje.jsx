/**
 * [RUTA]    src/components/personajes/TarjetaPersonaje.jsx
 * [CAPA]    components · anillo 3 (solo conoce su propio CSS)
 * [HACE]    Muestra los datos de un personaje: imagen, nombre,
 *           rol y descripción
 * [LO USAN] sections/SeccionPersonajes.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] Su propio CSS (anillo 0 · styles)
import '../../styles/TarjetaPersonaje.css'

// [RECIBE] nombre, rol, imagen y descripcion como props
export default function TarjetaPersonaje({ nombre, rol, imagen, descripcion }) {
  // [DIBUJA] article con la imagen, el nombre, el rol y la descripción
  return (
    <article className="tarjeta-personaje">
      {/* [DIBUJA] Imagen con alt igual al nombre; loading lazy */}
      <img
        className="tarjeta-personaje__imagen"
        src={imagen}
        alt={nombre}
        loading="lazy"
      />
      {/* [DIBUJA] Nombre del personaje */}
      <h3 className="tarjeta-personaje__nombre">{nombre}</h3>
      {/* [DIBUJA] Rol del personaje (puede ser "Sin rol") */}
      <p className="tarjeta-personaje__rol">{rol}</p>
      {/* [DIBUJA] Descripción del personaje */}
      <p className="tarjeta-personaje__descripcion">{descripcion}</p>
    </article>
  )
}