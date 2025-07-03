import React from 'react';
import { NavLink, Outlet, useResolvedPath } from 'react-router-dom';

// Este componente toma las props `title` y `menuItems`
// para ser reutilizable en diferentes secciones con submenús.
function SubMenuLayout({ title, menuItems }) {
  // useMatch para obtener la ruta actual del layout y construir enlaces relativos
  // Esto es útil para que si el path base cambia (ej. /admin/products), los subenlaces sigan funcionando.
   const resolvedPath = useResolvedPath('');; // match.pathname es la ruta actual del layout (ej. /about)

  return (
    <div className="submenu-layout-container">
      <aside className="submenu-sidebar">
        <h3>{title}</h3>
        <nav>
          <ul className="submenu-nav-list">
            {menuItems.map((item, index) =>  (
              <li key={index}>
                {/* Construimos la ruta completa usando `match.pathname` */}
                <NavLink
                  to={`${resolvedPath.pathname}${item.path}`}
                  className={({ isActive }) => isActive ? 'active-sublink' : ''}
                  end={item.end} /* 'end' para que la clase activa solo se aplique a la ruta exacta */
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="submenu-content-area">
        <Outlet /> {/* Aquí se renderizará el contenido de las subpáginas (Nosotros, Visión, etc.) */}
      </main>
    </div>
  );
}

export default SubMenuLayout;