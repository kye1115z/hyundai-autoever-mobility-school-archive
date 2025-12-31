const num = 17;
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(`${num}은(는) 소수입니다.`);
} else {
  console.log(`${num}은(는) 소수가 아닙니다.`);
}
