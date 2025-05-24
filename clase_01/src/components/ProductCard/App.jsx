import ProductCard from './ProductCard';
import './styles.css'; 
function App() {
  return (
    <div className="app-container">
      <h1>Nuestros Productos</h1>
      <div className="products-grid">
        <ProductCard 
          title="Cuenta de Ahorros" 
          description="Ahorra con nosotros y haz crecer tu dinero"
          interestRate={5.2}
          minimum={50000}
        />
      </div>
    </div>
  );
}

export default App;
