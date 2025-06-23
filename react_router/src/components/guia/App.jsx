import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}>Inicio</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : 'normal-link'}>Acerca de</NavLink>
        </nav>
      </header>

      <main className="app-main-content">
        <Outlet /> {/* ¡Aquí es donde se renderizarán HomePage o AboutPage! */}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Guía Interactiva React Router</p>
      </footer>
    </div>
  );
}

export default App;