import Bienvenida from './Bienvenida';
import './styles.css'; 

function App() {
  return (
    <div className="app-container">
      <h1>Bienvenidos a nuestra Nueva Imagen</h1>
      <div className="products-grid">
        <Bienvenida/>
      </div>
    </div>
  );
}

export default App;