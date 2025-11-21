import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="app-header" style={{ marginBottom: 20 }}>
      <h2 style={{ color: "#1e40af", margin: 0 }}>ASEGURADORA FORTE</h2>

      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Cotizar</Link>
        <Link to="/historial">Historial</Link>
      </nav>
    </div>
  );
}
