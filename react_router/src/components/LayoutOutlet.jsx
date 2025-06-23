// src/components/Layout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout-container">
      {/* Encabezado (Header) */}
      <header className="layout-header">
        <h1>Mi App con Dashboard</h1>
        <nav>
          <ul className="layout-nav-list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}>Inicio</NavLink></li>
            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}>Dashboard</NavLink></li>
            <li><NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}>Configuración</NavLink></li>
          </ul>
        </nav>
      </header>

      {/* Área Principal de Contenido - ¡Aquí se renderiza el Outlet! */}
      <main className="layout-main">
        <Outlet /> {/* El contenido de la ruta hija se renderiza aquí */}
      </main>

      {/* Pie de Página (Footer) */}
      <footer className="layout-footer">
        <p>&copy; {new Date().getFullYear()} Mi App. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Layout;