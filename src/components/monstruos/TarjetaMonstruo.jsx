/**
 * [RUTA]    src/components/monstruos/TarjetaMonstruo.jsx
 * [CAPA]    components · anillo 3 (solo conoce su propio CSS)
 * [HACE]    Muestra los datos de un monstruo: imagen, nombre,
 *           etiqueta Jefe/Enemigo, ubicación, nivel, HP y debilidad
 * [LO USAN] sections/SeccionMonstruos.jsx
 * [VERSIÓN] 1.0.0 · 2026-10-14 · versión inicial
 */

// [IMPORTA] Su propio CSS (anillo 0 · styles)
import '../../styles/TarjetaMonstruo.css'

// [RECIBE] nombre, esJefe (por defecto false), ubicacion, nivel,
//          hp, debilidad e imagen como props
export default function TarjetaMonstruo({
  nombre,
  esJefe = false,
  ubicacion,
  nivel,
  hp,
  debilidad,
  imagen,
}) {
  // [HACE] Texto y clase de la etiqueta, resueltos con un ternario
  //        según esJefe (true -> Jefe / false -> Enemigo)
  const textoEtiqueta = esJefe ? 'Jefe' : 'Enemigo'
  const claseEtiqueta = esJefe ? 'etiqueta--jefe' : 'etiqueta--enemigo'

  // [DIBUJA] article con la imagen, el nombre, la etiqueta y los datos
  return (
    <article className="tarjeta-monstruo">
      {/* [DIBUJA] Imagen con alt igual al nombre; loading lazy */}
      <img
        className="tarjeta-monstruo__imagen"
        src={imagen}
        alt={nombre}
        loading="lazy"
      />
      {/* [DIBUJA] Nombre del monstruo */}
      <h3 className="tarjeta-monstruo__nombre">{nombre}</h3>
      {/* [DIBUJA] Etiqueta con TEXTO (Jefe/Enemigo) y clase que cambia el color */}
      <span className={'tarjeta-monstruo__etiqueta ' + claseEtiqueta}>
        {textoEtiqueta}
      </span>
      {/* [DIBUJA] Ubicación */}
      <p className="tarjeta-monstruo__ubicacion">{ubicacion}</p>
      {/* [DIBUJA] Nivel y HP, como en la pantalla de estado del juego */}
      <p className="tarjeta-monstruo__stats">
        Nivel {nivel} · HP {hp}
      </p>
      {/* [DIBUJA] Debilidad */}
      <p className="tarjeta-monstruo__debilidad">Debilidad: {debilidad}</p>
    </article>
  )
}