import Account from './Account';
import './styles.css'; 

function App() {
  return (
    <div className="app-container">
      <h1>Manejo del Perfil del Usuario</h1>
      <div className="products-grid">
        <Account/>
      </div>
    </div>
  );
}

export default App;
