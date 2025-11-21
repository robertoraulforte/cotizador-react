import { useCotizador } from "../hooks/useCotizador";

export default function Historial() {
  const { historial } = useCotizador();

  return (
    <>
      <h2 className="page-title">Historial de Cotizaciones</h2>

      {historial.length === 0 ? (
        <p>No hay cotizaciones aún.</p>
      ) : (
        historial.map((c) => (
          <div key={c.id} className="hist-item">
            <p><strong>{c.nombre}</strong> — ${c.precio}</p>
            <p>{c.propiedad}, {c.superficie}m² — {c.ubicacion}</p>
            <p>Cobertura: {c.cobertura}</p>
            <p>{c.fecha}</p>
          </div>
        ))
      )}
    </>
  );
}
