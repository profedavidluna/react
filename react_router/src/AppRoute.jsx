import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Componentes de ejemplo
const Home = () => <h1>Página de Inicio</h1>;
const About = () => <h1>Acerca de Nosotros</h1>;
const Contact = () => <h1>Contacto</h1>;
const NotFound = () => <h1>404 - Página no encontrada</h1>;

function AppRoute() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/about">Acerca de</Link> |{' '}
        <Link to="/contact">Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para 404 */}
      </Routes>
    </div>
  );
}

export default AppRoute
