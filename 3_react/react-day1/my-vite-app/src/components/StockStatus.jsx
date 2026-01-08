function StockStatus() {
  const stock = 5;
  return (
    <div>
      <p>{stock > 0 ? `재고 있음 ${stock}개` : "품절"}</p>
    </div>
  );
}

export default StockStatus;
