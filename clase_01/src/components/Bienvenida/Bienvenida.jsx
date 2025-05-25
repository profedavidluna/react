function App({titulo,descripcion,url}) {
  return (
    <div className="app-container">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <img 
        src={`"${url}"`}
        alt="Logo Scotia Bank" 
        width="200"
      />
    </div>
  );
}

export default App; 
{/*
Crear un nuevo componente llamado Interno y se le pase el titulo y la descripcion"
*/}
