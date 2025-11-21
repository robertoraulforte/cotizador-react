import { useCotizador } from "../hooks/useCotizador";

export default function Resultado() {
  const { resultado } = useCotizador();

  if (!resultado) return null;

  return (
    <div className="resultado-box">
      <h3>Resultado:</h3>
      <p><strong>Precio final:</strong> ${resultado.precio}</p>
      <p><strong>Fecha:</strong> {resultado.fecha}</p>
    </div>
  );
}
