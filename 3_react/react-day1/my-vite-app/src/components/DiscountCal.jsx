function DiscountCal() {
  const originalPrice = 50000;
  const discountRate = 0.2;
  return (
    <div>
      <p>원가: {originalPrice}원</p>
      <p>할인율: {discountRate * 100}%</p>
      <p>할인가: {originalPrice * discountRate}원</p>
    </div>
  );
}

export default DiscountCal;
