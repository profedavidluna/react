import Bienvenida from './Bienvenida';
import './styles.css'; 
import kafkaImage from '../../assets/kafka.png'
function App() {
  return (
    <div className="app-container">
      <h1>Bienvenidos a nuestra Nueva Imagen</h1>
      <div className="products-grid">
        <Bienvenida titulo="Bienvenidos a Scotia Bank" 
                    descripcion="Estamos construyendo tu experiencia bancaria del futuro." 
                    url={kafkaImage}  />

        <Bienvenida titulo="Bienvenidos al Curso de React" 
                    descripcion="Estamos aprendiendo React para mejorar tu experiencia bancaria del futuro." 
                    url="https://logos-world.net/wp-content/uploads/2021/03/Scotiabank-Logo.png" />
      </div>
    </div>
  );
}

export default App;