import React, { useState } from 'react';

function ToggleTexto() {
  // Estado para controlar si el texto debe ser visible o no
  const [isVisible, setIsVisible] = useState(true);

  // Función para alternar el estado
  const handleToggle = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
      <h3>Alternar Visibilidad de Texto</h3>
      <button onClick={handleToggle} style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {/* Renderizado condicional: solo muestra el p si isVisible es true */}
      {isVisible && (
        <p style={{ marginTop: '15px', fontSize: '1.1em', color: '#333' }}>
          Este es un párrafo de texto que puede ser ocultado o mostrado.
        </p>
      )}
    </div>
  );
}

export default ToggleTexto;