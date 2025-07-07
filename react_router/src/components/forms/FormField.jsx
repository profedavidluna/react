import React from 'react';

// Componente FormField (Molécula)
const FormField = ({ label, name, type = 'text', register, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        {...register} // Esto vincula el input con React Hook Form
        className={`form-input ${error ? 'invalid' : ''}`}
        aria-invalid={error ? 'true' : 'false'} // Atributo para accesibilidad [conversación anterior]
      />
      {error && <p className="error-message" role="alert">{error.message}</p>} {/* Mensaje de error visible [conversación anterior] */}
    </div>
  );
};

export default FormField;