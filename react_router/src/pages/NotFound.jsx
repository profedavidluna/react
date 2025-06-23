import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline', fontSize: '1.2em' }}>
        Volver a la página de inicio
      </Link>
    </div>
  );
}

export default NotFound;