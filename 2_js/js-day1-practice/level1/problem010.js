const productName = "노트북";
const price = 1500000;
const isStock = true;
stockMsg = isStock ? "있음" : "없음";

console.log(
  `${productName}의 가격은 ${price}원이고, 재고는 ${stockMsg}입니다.`
);
