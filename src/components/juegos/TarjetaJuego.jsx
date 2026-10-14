/**
 * [RUTA]    src/components/juegos/TarjetaJuego.jsx
 * [CAPA]    components · anillo 3 (solo conoce su propio CSS)
 * [HACE]    Muestra los datos del juego: imagen, nombre, año y
 *           plataforma
 * [LO USAN] sections/SeccionJuego.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] Su propio CSS (anillo 0 · styles)
import '../../styles/TarjetaJuego.css'

// [RECIBE] nombre, anio, plataforma e imagen como props
export default function TarjetaJuego({ nombre, anio, plataforma, imagen }) {
  // [DIBUJA] article con la imagen, el nombre y los datos
  return (
    <article className="tarjeta-juego">
      {/* [DIBUJA] Imagen con alt descriptivo; loading lazy para que no bloquee la carga */}
      <img
        className="tarjeta-juego__imagen"
        src={imagen}
        alt={'Logo de ' + nombre}
        loading="lazy"
      />
      {/* [DIBUJA] Nombre del juego */}
      <h3 className="tarjeta-juego__nombre">{nombre}</h3>
      {/* [DIBUJA] Año y plataforma en una sola línea */}
      <p className="tarjeta-juego__datos">
        {anio} · {plataforma}
      </p>
    </article>
  )
}