import FormCotizacion from "../components/FormCotizacion";
import Resultado from "../components/Resultado";

export default function Cotizador() {
  return (
    <>
      <h2 className="page-title">Cotizador de Propiedades</h2>
      <FormCotizacion />
      <Resultado />
    </>
  );
}
