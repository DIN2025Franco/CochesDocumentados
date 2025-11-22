import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import ContenidoPrincipal from './pages/ContenidoPrincipal.jsx';
import CatalogoCoches from './pages/CatalogoCoches.jsx';
import ContenedorGlobal from "./components/ContenedorGlobal.jsx";
import CocheDetalles from "./pages/CocheDetalles.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<ContenidoPrincipal />}>
          <Route path="/" element={<Home />} />
          <Route path="inicio" element={<Navigate to="/" />} />
          <Route path="catalogo" element={<CatalogoCoches />} />
          <Route path="admin" element={<Admin />} />
          <Route path="/coches/:index" element={<CocheDetalles />} />
        </Route>

        {/* Pagina 404 */}
        <Route
          path="*"
          element={
            <ContenedorGlobal titulo="Pagina no encontrada">
              <p>La ruta no existe</p>
            </ContenedorGlobal>
          }
        />

      </Routes>
    </>
  );
}

export default App
