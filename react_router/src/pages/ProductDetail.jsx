import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProductsData = {
  '1': { name: 'Laptop Pro', details: 'Core i7, 16GB RAM, 512GB SSD', price: '$1200' },
  '2': { name: 'Monitor UltraWide', details: '34 pulgadas, 144Hz, curvo', price: '$300' },
  '3': { name: 'Teclado Mecánico RGB', details: 'Switches Cherry MX Red, iluminación personalizable', price: '$150' },
};

function ProductDetail() {
  // useParams() hook extrae los parámetros de la URL
  const { productId } = useParams();
  const product = mockProductsData[productId];

  if (!product) {
    return (
      <div style={{ color: 'red', fontWeight: 'bold' }}>
        <h2>Producto No Encontrado</h2>
        <p>El producto con ID "{productId}" no existe.</p>
        <Link to="/products" style={{ color: '#007bff', textDecoration: 'underline' }}>Volver a Productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalles del Producto: {product.name}</h2>
      <p><strong>Precio:</strong> {product.price}</p>
      <p><strong>Especificaciones:</strong> {product.details}</p>
      <Link to="/products" style={{ display: 'inline-block', marginTop: '20px', padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Volver a la lista de productos
      </Link>
    </div>
  );
}

export default ProductDetail;