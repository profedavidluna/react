function ProductCard({ title, description, interestRate, minimum }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="product-details">
        <span>Tasa de interés: {interestRate}%</span>
        <span>Mínimo: ₡{minimum.toLocaleString()}</span>
      </div>
      <button className="product-button">Más información</button>
    </div>
  );
}

export default ProductCard;
{/*
Crear un nuevo componente ServiceCard para servicios bancarios
Agregar una segunda tarjeta de producto (préstamo personal)
Modificar el componente ProductCard para aceptar una prop isFeatured
Mostrar un badge "Destacado" si isFeatured es true
*/}