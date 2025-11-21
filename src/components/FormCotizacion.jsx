import { useCotizador } from "../hooks/useCotizador";
import OpcionesCobertura from "./OpcionesCobertura";

export default function FormCotizacion() {
  const { datos, errores, handleChange, cotizar } = useCotizador();

  const submit = (e) => {
    e.preventDefault();
    cotizar();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={datos.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={datos.edad}
          onChange={handleChange}
        />
        {errores.edad && <p className="error">{errores.edad}</p>}

        <select name="propiedad" value={datos.propiedad} onChange={handleChange}>
          <option value="">Seleccione tipo de propiedad</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
        </select>
        {errores.propiedad && <p className="error">{errores.propiedad}</p>}

        <input
          type="number"
          name="superficie"
          placeholder="Superficie (m²)"
          value={datos.superficie}
          onChange={handleChange}
        />
        {errores.superficie && <p className="error">{errores.superficie}</p>}

        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicación (ciudad / barrio)"
          value={datos.ubicacion}
          onChange={handleChange}
        />
        {errores.ubicacion && <p className="error">{errores.ubicacion}</p>}

        <OpcionesCobertura />

        <button className="btn" type="submit">
          Cotizar
        </button>
      </form>
    </>
  );
}
