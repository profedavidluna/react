import React, { useState } from 'react';

function ContadorSimple() {
  // 1. Declarar una variable de estado 'contador' inicializada en 0.
  //    'setContador' es la función para actualizarla.
  const [contador, setContador] = useState(0);

  // Función para manejar el incremento
  const handleIncrement = () => {
    // 2. Actualizar el estado usando la función setContador.
    //    Usamos la forma de callback (prevState) para asegurarnos de que siempre
    //    estamos trabajando con el valor más reciente del estado.
    setContador(prevContador => prevContador + 1);
  };

  // Función para manejar el decremento
  const handleDecrement = () => {
    setContador(prevContador => prevContador - 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
      <h3>Contador Básico</h3>
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{contador}</p>
      <button onClick={handleIncrement} style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Incrementar
      </button>
      <button onClick={handleDecrement} style={{ padding: '10px 15px', margin: '5px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Decrementar
      </button>
    </div>
  );
}

export default ContadorSimple;