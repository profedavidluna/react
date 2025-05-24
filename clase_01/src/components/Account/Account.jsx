import './styles.css'; 
function Account() {
  const user = {
    name: "María Rodríguez",
    accountNumber: "123-456-789",
    balance: 1250000,
    lastLogin: "2023-05-15"
  };

  const formattedBalance = new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC'
  }).format(user.balance);

  const loginDate = new Date(user.lastLogin).toLocaleDateString('es-CR');

  return (
    <div className="user-profile">
      <h2>Bienvenida, {user.name.split(' ')[0]}!</h2>
      <div className="account-info">
        <p>Número de cuenta: <strong>{user.accountNumber}</strong></p>
        <p>Saldo actual: <strong>{formattedBalance}</strong></p>
        <p>Último acceso: <strong>{loginDate}</strong></p>
      </div>
      
     
    </div>
  );
}

export default Account;
 {/*
Crear una variable accountType y mostrarla
Calcular y mostrar el balance proyectado con 5% de interés
Agregar un mensaje condicional basado en el balance
Mostrar el año de apertura de cuenta (calculado desde lastLogin)*/
}