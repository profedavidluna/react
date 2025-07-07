import React from 'react';
import { useForm } from 'react-hook-form'; // Importamos useForm de React Hook Form [2]
import FormField from './FormField'; // Importamos nuestra molécula FormField

// Componente RegistrationForm (Organismo)
const RegistroForm2 = () => {
  // Inicializamos useForm para gestionar el formulario y la validación
  // 'register' se usa para registrar inputs, 'handleSubmit' para manejar el envío,
  // y 'formState.errors' contiene los mensajes de error [2]
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Función que se ejecuta cuando el formulario es válido y se envía
  const onSubmit = (data) => {
    console.log('Formulario enviado con éxito:', data);
    // Aquí puedes enviar los datos a un backend, etc.
    // Es crucial prevenir el comportamiento por defecto de HTML de recargar la página [conversación anterior]
  };

  // Puedes definir reglas de validación aquí o pasarlas directamente en el componente FormField
  // Aquí las definimos de forma declarativa con mensajes personalizados
  const validationRules = {
    username: {
      required: 'El nombre de usuario es obligatorio.',
      minLength: {
        value: 3,
        message: 'El nombre de usuario debe tener al menos 3 caracteres.',
      },
    },
    email: {
      required: 'El correo electrónico es obligatorio.',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Introduce un correo electrónico válido.',
      },
    },
    password: {
      required: 'La contraseña es obligatoria.',
      minLength: {
        value: 6,
        message: 'La contraseña debe tener al menos 6 caracteres.',
      },
    },
    confirmPassword: {
      required: 'Confirma tu contraseña.',
      validate: (value, formValues) =>
        value === formValues.password || 'Las contraseñas no coinciden.', // Validación cruzada
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <h2>Registro de Usuario</h2>
      
      <FormField
        label="Nombre de Usuario"
        name="username"
        register={register('username', validationRules.username)}
        error={errors.username}
      />

      <FormField
        label="Correo Electrónico"
        name="email"
        type="email"
        register={register('email', validationRules.email)}
        error={errors.email}
      />

      <FormField
        label="Contraseña"
        name="password"
        type="password"
        register={register('password', validationRules.password)}
        error={errors.password}
      />

      <FormField
        label="Confirmar Contraseña"
        name="confirmPassword"
        type="password"
        register={register('confirmPassword', validationRules.confirmPassword)}
        error={errors.confirmPassword}
      />

      <button type="submit" className="submit-button">Registrarse</button>
    </form>
  );
};

export default RegistroForm2;