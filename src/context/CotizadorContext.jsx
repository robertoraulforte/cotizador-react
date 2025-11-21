import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

/* eslint-disable react-refresh/only-export-components */

export const CotizadorContext = createContext();

export function CotizadorProvider({ children }) {
  const estadoInicial = {
    nombre: "",
    edad: "",
    propiedad: "",
    superficie: "",
    ubicacion: "",
    cobertura: "",
  };

  const [datos, setDatos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [resultado, setResultado] = useState(null);
  const [historial, setHistorial] = useState([]);

  const handleChange = (e) =>
    setDatos({ ...datos, [e.target.name]: e.target.value });

  // VALIDACIÓN CORREGIDA
  const validar = () => {
    const err = {};

    if (!datos.nombre.trim()) err.nombre = "El nombre es obligatorio";

    if (!datos.edad) {
      err.edad = "La edad es obligatoria";
    } else if (Number(datos.edad) < 18) {
      err.edad = "Debes ser mayor de 18 años";
    }

    if (!datos.propiedad) err.propiedad = "Debe seleccionar un tipo de propiedad";

    if (!datos.superficie)
      err.superficie = "Ingrese metros cuadrados";
    else if (datos.superficie < 20)
      err.superficie = "Debe ser mayor a 20 m²";

    if (!datos.ubicacion.trim())
      err.ubicacion = "Ingrese la ubicación";

    if (!datos.cobertura)
      err.cobertura = "Debe seleccionar una cobertura";

    setErrores(err);
    return Object.keys(err).length === 0;
  };

  const cotizar = () => {
    if (!validar()) return;

    let base = 10000;

    if (datos.propiedad === "casa") base += 8000;
    if (datos.propiedad === "departamento") base += 4000;

    base += datos.superficie * 25;

    const ajustes = {
      basica: 1,
      intermedia: 1.3,
      completa: 1.6,
    };

    base *= ajustes[datos.cobertura];

    const cot = {
      id: uuid(),
      ...datos,
      precio: Math.round(base),
      fecha: new Date().toLocaleString(),
    };

    setResultado(cot);
    setHistorial((prev) => [...prev, cot]);

    // 🔥 RESETEAR FORMULARIO DESPUÉS DE COTIZAR
    setDatos(estadoInicial);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        errores,
        resultado,
        historial,
        handleChange,
        cotizar,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
}
