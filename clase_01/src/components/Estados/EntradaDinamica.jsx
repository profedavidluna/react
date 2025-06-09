import React, { useState } from 'react';

function EntradaDinamica() {
  // Estado para almacenar el valor del input
  const [textoInput, setTextoInput] = useState('');

  // Función que se llama cada vez que el valor del input cambia
  const handleChange = (event) => {
    setTextoInput(event.target.value); // event.target.value contiene el nuevo valor del input
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
      <h3>Entrada de Texto Dinámica</h3>
      <input
        type="text"
        value={textoInput} // El valor del input está controlado por el estado
        onChange={handleChange} // Cuando el input cambia, actualizamos el estado
        placeholder="Escribe algo aquí..."
        style={{ padding: '8px', fontSize: '1em', width: '80%', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
      />
      <p style={{ fontSize: '1.1em', color: '#555' }}>
        Estás escribiendo: <span style={{ fontWeight: 'bold', color: '#333' }}>{textoInput || 'Nada aún'}</span>
      </p>
    </div>
  );
}

export default EntradaDinamica;