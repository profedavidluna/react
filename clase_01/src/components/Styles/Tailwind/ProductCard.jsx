import React from 'react';

function ProductCard({ title, description, interestRate, minimum }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex justify-between items-center text-gray-700 text-sm mb-6">
        <span className="font-medium">Tasa de interés: <span className="text-blue-600">{interestRate}%</span></span>
        <span className="font-medium">Mínimo: <span className="text-green-600">₡{minimum.toLocaleString()}</span></span>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
        Más información
      </button>
    </div>
  );
}

export default ProductCard;