// src/components/Button.jsx
import React from 'react';
import './Button.css'; // Importa el archivo CSS

function Button({ children, variant }) {
  const className = `my-button ${variant === 'primary' ? 'primary' : ''}`;
  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;