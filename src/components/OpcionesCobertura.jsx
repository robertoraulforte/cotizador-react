import { useCotizador } from "../hooks/useCotizador";

export default function OpcionesCobertura() {
  const { datos, handleChange } = useCotizador();

  return (
    <div className="cobertura-card">
      <h3 className="cobertura-title">Opciones de Cobertura</h3>

      <table className="cobertura-table">
        <thead>
          <tr>
            <th>Cobertura</th>
            <th>Incluye</th>
            <th>Aumento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Básica</td>
            <td>Daños simples</td>
            <td>+0%</td>
          </tr>
          <tr>
            <td>Intermedia</td>
            <td>Daños + robo parcial</td>
            <td>+30%</td>
          </tr>
          <tr>
            <td>Completa</td>
            <td>Daños + robo total + incendio</td>
            <td>+60%</td>
          </tr>
        </tbody>
      </table>

      <select
        name="cobertura"
        value={datos.cobertura}
        onChange={handleChange}
        style={{ marginTop: "14px" }}
      >
        <option value="">Seleccione tipo de cobertura</option>
        <option value="basica">Básica</option>
        <option value="intermedia">Intermedia</option>
        <option value="completa">Completa</option>
      </select>
    </div>
  );
}
