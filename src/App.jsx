import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CotizadorProvider } from "./context/CotizadorContext";
import Header from "./components/Header";
import Cotizador from "./pages/Cotizador";
import Historial from "./pages/Historial";

function App() {
  return (
    <CotizadorProvider>
      <div className="app-wrapper">
        <BrowserRouter>
          <Header />

          <div className="container">
            <Routes>
              <Route path="/" element={<Cotizador />} />
              <Route path="/historial" element={<Historial />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
    </CotizadorProvider>
  );
}

export default App;

