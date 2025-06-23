import React from 'react';
import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <div className="page-content not-found-page">
      <h2>🚫 ¡Oops! Página No Encontrada (404)</h2>
      <p>La habitación que buscas no existe en esta casa.</p>
      <Link to="/" className="link-button">Volver al Inicio</Link>
    </div>
  );
}
export default NotFoundPage;