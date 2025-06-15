import React, { useState } from 'react';
function Bienvenida({titulo,descripcion,url}) {

  const [prueba, setPrueba] = useState("Hola");
  return (
    <div className="app-container">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <img 
        src={url}
        alt="Logo Scotia Bank" 
        width="200"
      />
      <button onClick={setPrueba("Funciona")}>Estado</button>
      {prueba}
    </div>
  );
}


export default Bienvenida; 
{/*
Crear un nuevo componente llamado Interno y se le pase el titulo y la descripcion"
*/}
