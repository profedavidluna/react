import React from 'react';
import ProductCard from './ProductCard'; 

// Importa el archivo JSON directamente
import productsData from './data/products.json'; 

function ProductListJson() {
  return (
    <div className="product-list-container">
      <h2>Nuestros Productos</h2>
      <div className="product-cards-wrapper">
        {productsData.map((product, index) => (
          <ProductCard
            key={index} 
            title={product.title}
            description={product.description}
            interestRate={product.interestRate}
            minimum={product.minimum}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListJson;