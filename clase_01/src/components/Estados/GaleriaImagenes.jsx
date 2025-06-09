import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Imagen+1',
  'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Imagen+2',
  'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Imagen+3',
  'https://via.placeholder.com/600x400/FFFF33/333333?text=Imagen+4',
  'https://via.placeholder.com/600x400/5733FF/FFFFFF?text=Imagen+5',
];

function GaleriaImagenes() {
  // Estado para el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para ir a la imagen anterior
  const handlePrev = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a la imagen siguiente
  const handleNext = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', maxWidth: '650px', margin: 'auto', textAlign: 'center' }}>
      <h3>Galería de Imágenes Interactiva</h3>
      <div style={{ marginBottom: '15px' }}>
        <img
          src={images[currentImageIndex]}
          alt={`Galería de Imágenes ${currentImageIndex + 1}`}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
        />
      </div>
      <p style={{ fontSize: '1.1em', marginBottom: '15px' }}>
        Imagen {currentImageIndex + 1} de {images.length}
      </p>
      <div>
        <button
          onClick={handlePrev}
          style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default GaleriaImagenes;