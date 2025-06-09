import React, { useState } from 'react';

function FormularioContacto() {
  // Un solo objeto de estado para manejar todos los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  // Manejador genérico para todos los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Actualiza solo la propiedad específica en el objeto formData
    setFormData(prevFormData => ({
      ...prevFormData, // Copia el resto del objeto
      [name]: value,   // Actualiza la propiedad por su nombre (ej. 'nombre', 'email')
    }));
  };

  // Manejador para el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto de recargar la página

    console.log('Datos del formulario enviados:', formData);
    alert(`Formulario enviado:\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`);

    // Opcional: limpiar el formulario después del envío
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>Formulario de Contacto</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre" // ¡Importante! El 'name' debe coincidir con la clave en el objeto de estado
            value={formData.nombre}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            required
          />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', resize: 'vertical' }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ padding: '12px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em', marginTop: '10px' }}
        >
          Enviar Mensaje
        </button>
      </form>
      <div style={{ marginTop: '20px', borderTop: '1px dashed #eee', paddingTop: '15px', fontSize: '0.9em', color: '#666' }}>
        <p>Previsualización (Solo para depuración):</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default FormularioContacto;