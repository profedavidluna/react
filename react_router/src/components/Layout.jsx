import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DataContext from '../context/DataContext';
function Layout () {

  const ctx = useContext(DataContext);
  ctx.valor1="Menu Cambiado";
  ctx.valor3={
      "data1":"Prueba Context"
  }
  return (
    // ¡ESTE DIV ES CLAVE!
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh', /* Asegura que el layout ocupe toda la altura */
      display: 'flex', /* Para que el footer se quede abajo si hay poco contenido */
      flexDirection: 'column', /* Para que el footer se quede abajo */
      // Opcional: background-color para el layout si no lo quieres en body
      // backgroundColor: '#f0f2f5',
    }}>
      <header style={{ backgroundColor: '#333', padding: '15px', color: 'white' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold' }}>
            Mi SPA React
          </Link>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
            <li>
              <NavLink
                to="/"
                // Aquí usamos las clases de CSS que definimos en index.css
                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
              >
                Acerca De
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
              >
                Productos
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
              >
                Blog
              </NavLink>
            </li>
            <li>{ctx.valor3.data1}</li>
          </ul>
        </nav>
      </header>

      {/* ¡ESTE MAIN ES CLAVE PARA EL CONTENIDO PRINCIPAL! */}
      <main style={{
        padding: '20px',
        flexGrow: 1, /* Permite que el contenido principal ocupe el espacio restante */
        maxWidth: '1200px', /* Limita el ancho máximo */
        margin: '0 auto', /* Centra el contenido */
        boxSizing: 'border-box', /* Asegura el padding */
        width: '100%', /* Ocupa el 100% del ancho disponible */
      }}>
        <Outlet />
        Aqui van el componente hijo
      </main>

      <footer style={{ backgroundColor: '#f0f0f0', padding: '15px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <p>&copy; 2025 Mi SPA React. Todos los derechos reservados.</p>
      </footer>

      {/* Elimina el <style jsx> de aquí, ya que los estilos están en index.css */}
    </div>
  );
}

export default Layout;