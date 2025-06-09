import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json'; // Tu JSON de productos

function AppTailwind() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Productos Financieros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default AppTailwind;