function ProductInfo({ name, price, category }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{category}</p>
    </div>
  );
}

export default ProductInfo;
