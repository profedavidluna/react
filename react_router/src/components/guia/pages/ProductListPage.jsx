import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'p1', name: 'Laptop Ultra', price: 1200 },
  { id: 'p2', name: 'Teclado Mecánico', price: 90 },
  { id: 'p3', name: 'Monitor Curvo', price: 350 },
];

function ProductListPage() {
  return (
    <div className="page-content">
      <h2>🛍️ Nuestros Productos</h2>
      <p>Explora la lista y haz clic para ver detalles:</p>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            {/* Usamos Link para navegar a los detalles, pasando el ID como parámetro */}
            <Link to={`/products/${product.id}`} className="link-button small">Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductListPage;