// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa el hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación (simulada)
    if (username === 'user' && password === 'pass') {
      alert('Inicio de sesión exitoso!');
      navigate('/products'); // Navega a la página de productos
      // O navigate('/', { replace: true }); para reemplazar la entrada en el historial
    } else {
      alert('Credenciales incorrectas.');
    }
  };

  return (
    <div className="example-box">
      <h3>Iniciar Sesión (useNavigate)</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginForm;