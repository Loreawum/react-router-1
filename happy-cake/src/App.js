import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import componentes
import BarraNavegacion from "./componentes/BarraNavegacion";
//import vistas
import Contacto from "./vistas/Contacto";
import Home from "./vistas/Home";
import NotFound from "./vistas/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
