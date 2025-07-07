import React, { useState } from 'react';

export default function RegistroForm() {
  // 1. Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    edad: '',
    email: '',
    telefono: '',
    pais: '',
    sexo: '',
    hobbies: [], // Los hobbies se almacenarán como un array
    activo: false, // Indicador activo/inactivo
  });

  // 2. Estado para almacenar los mensajes de error
  const [errors, setErrors] = useState({});
  // 3. Estado para controlar si el formulario se envió con éxito
  const [submittedData, setSubmittedData] = useState(null);

  // Manejador genérico para la mayoría de los inputs (text, number, email, select)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Actualiza el estado según el tipo de input
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Limpia el error para el campo modificado
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Manejador específico para los radio buttons de 'sexo'
  const handleGenderChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      sexo: e.target.value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, sexo: '' }));
  };

  // Manejador específico para los checkboxes de 'hobbies'
  const handleHobbiesChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const currentHobbies = prevData.hobbies;
      if (checked) {
        // Añade el hobby si está marcado
        return { ...prevData, hobbies: [...currentHobbies, value] };
      } else {
        // Elimina el hobby si está desmarcado
        return { ...prevData, hobbies: currentHobbies.filter((hobby) => hobby !== value) };
      }
    });
    setErrors((prevErrors) => ({ ...prevErrors, hobbies: '' }));
  };

  // Función de validación del formulario
  const validateForm = () => {
    let newErrors = {};
    const { id, nombre, edad, email, telefono, pais, sexo, hobbies } = formData;

    // Validación de ID (ejemplo: requerido y numérico)
    if (!id.trim()) {
      newErrors.id = 'El ID es requerido.';
    } else if (isNaN(id)) {
      newErrors.id = 'El ID debe ser numérico.';
    }

    // Validación de Nombre (ejemplo: requerido)
    if (!nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido.';
    }

    // Validación de Edad (ejemplo: requerido y mayor de 0)
    if (!edad) {
      newErrors.edad = 'La edad es requerida.';
    } else if (isNaN(edad) || parseInt(edad) <= 0) {
      newErrors.edad = 'La edad debe ser un número válido mayor que 0.';
    }

    // Validación de Email (ejemplo: requerido y formato válido)
    if (!email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Regex simple para email [16]
      newErrors.email = 'El email no tiene un formato válido.';
    }

    // Validación de Teléfono (ejemplo: requerido)
    if (!telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido.';
    }

    // Validación de País (ejemplo: seleccionado)
    if (!pais) {
      newErrors.pais = 'Debe seleccionar un país.';
    }

    // Validación de Sexo (ejemplo: seleccionado)
    if (!sexo) {
      newErrors.sexo = 'Debe seleccionar un sexo.';
    }

    // Validación de Hobbies (ejemplo: al menos uno seleccionado)
    if (hobbies.length === 0) {
      newErrors.hobbies = 'Debe seleccionar al menos un hobby.';
    }

    setErrors(newErrors);
    // Devuelve true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto de recargar la página [17-19]

    if (validateForm()) {
      // Si el formulario es válido, procesa y "envía" los datos
      console.log('Formulario enviado:', formData); // Imprime los valores seleccionados [20, 21]
      setSubmittedData(formData); // Guarda los datos para mostrarlos en la UI

      // Aquí es donde normalmente enviarías los datos a un backend (e.g., con fetch o axios)
      // fetch('/api/register', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(response => response.json())
      //   .then(data => console.log('Éxito:', data))
      //   .catch(error => console.error('Error:', error));

      // Opcional: limpiar el formulario después del envío exitoso
      // setFormData({
      //   id: '', nombre: '', edad: '', email: '', telefono: '', pais: '',
      //   sexo: '', hobbies: [], activo: false,
      // });
      // setErrors({});
    } else {
      console.log('Errores en el formulario:', errors);
      // Puedes añadir un mensaje general de error si la validación falla
      alert('Por favor, corrige los errores del formulario.');
    }
  };

  return (
    <div>
      <h2>Formulario de Registro de Usuario</h2>
      {submittedData ? (
        <div style={{ border: '1px solid green', padding: '15px', margin: '20px 0' }}>
          <h3>¡Registro Exitoso! Datos Enviados:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          <button onClick={() => setSubmittedData(null)}>Registrar otro usuario</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
          {/* Campo ID */}
          <div>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              aria-invalid={!!errors.id}
              required // Atributo HTML5 de validación [22-24]
            />
            {errors.id && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.id}</p>} {/* Mensaje de error [25] */}
          </div>

          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              aria-invalid={!!errors.nombre}
              required
            />
            {errors.nombre && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.nombre}</p>}
          </div>

          {/* Campo Edad */}
          <div>
            <label htmlFor="edad">Edad:</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              aria-invalid={!!errors.edad}
              min="1" // Atributo HTML5 para valor mínimo [26]
              required
            />
            {errors.edad && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.edad}</p>}
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email" // Atributo HTML5 para validación de email [22, 27]
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              required
            />
            {errors.email && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.email}</p>}
          </div>

          {/* Campo Teléfono */}
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel" // Tipo para número de teléfono [28]
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              aria-invalid={!!errors.telefono}
              required
            />
            {errors.telefono && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.telefono}</p>}
          </div>

          {/* Campo País (Select) */}
          <div>
            <label htmlFor="pais">País:</label>
            <select
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              aria-invalid={!!errors.pais}
              required
            >
              <option value="">Selecciona un país</option>
              <option value="USA">Estados Unidos</option>
              <option value="Canada">Canadá</option>
              <option value="Mexico">México</option>
              <option value="Spain">España</option>
            </select>
            {errors.pais && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.pais}</p>}
          </div>

          {/* Campo Sexo (Radio Buttons) */}
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <label>Sexo:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  value="Male"
                  checked={formData.sexo === 'Male'}
                  onChange={handleGenderChange}
                />{' '}
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  value="Female"
                  checked={formData.sexo === 'Female'}
                  onChange={handleGenderChange}
                />{' '}
                Femenino
              </label>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  value="Non-binary"
                  checked={formData.sexo === 'Non-binary'}
                  onChange={handleGenderChange}
                />{' '}
                No binario
              </label>
            </div>
            {errors.sexo && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.sexo}</p>}
          </div>

          {/* Campo Hobbies (Checkboxes) */}
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <label>Hobbies:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="hobbies" // Mismo 'name' para checkboxes de un grupo [29]
                  value="Reading"
                  checked={formData.hobbies.includes('Reading')}
                  onChange={handleHobbiesChange}
                />{' '}
                Lectura
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Gaming"
                  checked={formData.hobbies.includes('Gaming')}
                  onChange={handleHobbiesChange}
                />{' '}
                Juegos
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Sports"
                  checked={formData.hobbies.includes('Sports')}
                  onChange={handleHobbiesChange}
                />{' '}
                Deportes
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Cooking"
                  checked={formData.hobbies.includes('Cooking')}
                  onChange={handleHobbiesChange}
                />{' '}
                Cocina
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Traveling"
                  checked={formData.hobbies.includes('Traveling')}
                  onChange={handleHobbiesChange}
                />{' '}
                Viajar
              </label>
            </div>
            {errors.hobbies && <p style={{ color: 'red', fontSize: '0.8em' }} aria-live="polite">{errors.hobbies}</p>}
          </div>

          {/* Indicador Activo/Inactivo */}
          <div>
            <label>
              <input
                type="checkbox"
                name="activo"
                checked={formData.activo}
                onChange={handleChange}
              />{' '}
              Usuario Activo
            </label>
          </div>

          <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Registrar Usuario
          </button>
        </form>
      )}
    </div>
  );
}