import React, { useActionState, } from 'react';
import { useForm } from 'react-hook-form';
// En React 19, useActionState es el nuevo nombre para useFormState [13]
// useFormStatus se importa de 'react-dom' si es un componente cliente y no un server component [11]
import {  useFormStatus } from 'react-dom';

// Componente hijo para el botón de envío que usa useFormStatus
// Este componente debe ser un descendiente directo de la etiqueta <form> que tenga el atributo 'action'
function SubmitButton() {
  const { pending } = useFormStatus(); // Obtiene el estado 'pending' de la acción del formulario padre [7]
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
    </button>
  );
}

function LoginForm() {
  // Configuración de React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  // --- Lógica del lado del servidor (simulada como una Action de React 19) ---
  // Esta función recibirá un objeto FormData directamente de la acción del formulario [5]
  const serverLoginAction = async (prevState, formData) => {
    // Si fuera un Server Component, llevaría 'use server';
    // 'use server';

    const email = formData.get('email');
    const password = formData.get('password');

    console.log('Intentando login para:', email);
    // Simula una llamada a API con un retraso
    await new Promise(resolve => setTimeout(resolve, 1500)); [9]

    if (email === 'test@example.com' && password === 'password123') {
      return { success: true, message: '¡Login exitoso! Redirigiendo...' };
    } else {
      return { success: false, message: 'Credenciales inválidas. Inténtalo de nuevo.' };
    }
  };

  // useActionState para manejar el estado de la sumisión asíncrona [14, 15]
  const [submissionState, formAction] = useActionState(serverLoginAction, { success: null, message: '' }); 
  // submissionState contendrá el último valor retornado por serverLoginAction [16]

  // Esta es la función que handleSubmit de RHF llamará después de la validación del lado del cliente
  const onSubmitClientValidation = (data) => {
    console.log('Datos validados por RHF:', data);

    // Convertir los datos validados de RHF a FormData para la React 19 Action
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    // Desencadenar la acción de React 19 manualmente con los datos validados
    // Esto es crucial para que React Hook Form y React 19 Actions coexistan,
    // permitiendo que RHF maneje la validación del lado del cliente primero.
    formAction(formData);
  };

  return (
    <form
      // Aunque onSubmit esté aquí, usaremos la validación de RHF y luego llamaremos a formAction.
      // El atributo 'action' aquí es necesario para que useFormStatus() funcione [11].
      // Sin embargo, si handleSubmit previene el default, 'action' solo actúa como marcador para useFormStatus.
      // Para un uso más puro de React 19 Actions, no usarías handleSubmit y confiarías en la validación nativa o en la Action.
      onSubmit={handleSubmit(onSubmitClientValidation)}
      action={formAction} // Permite que useFormStatus funcione en SubmitButton [7, 11]
      className="login-form" // Clase de ejemplo para estilos
    >
      <h2>Iniciar Sesión</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          // Registro de campo con reglas de validación de RHF
          {...register('email', {
            required: 'El email es requerido',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Formato de email inválido',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          // Registro de campo con reglas de validación de RHF
          {...register('password', {
            required: 'La contraseña es requerida',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      {/* El botón de envío usa el componente SubmitButton para el feedback visual */}
      <SubmitButton /> 

      {/* Mostrar mensajes de feedback del servidor (desde useActionState) */}
      {submissionState.message && (
        <p style={{ color: submissionState.success ? 'green' : 'red' }}>
          {submissionState.message}
        </p>
      )}
    </form>
  );
}

export default LoginForm;