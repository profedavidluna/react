import React from 'react';
import { Link } from 'react-router-dom';

const products2 = [
  { id: '1', name: 'Laptop Pro', description: 'Una potente laptop para profesionales.' },
  { id: '2', name: 'Monitor UltraWide', description: 'Experimenta una inmersión visual total.' },
  { id: '3', name: 'Teclado Mecánico RGB', description: 'Teclado de alto rendimiento para gaming.' },
];

function Products() {
  return (
    <div>
      <h2>Nuestros Productos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products2.map(product => (
          <li key={product.id} style={{ marginBottom: '15px', border: '1px solid #eee', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {/* Usamos Link para ir a los detalles del producto */}
            <Link to={`/products/${product.id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 15px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              Ver Detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;