const calculate = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return b !== 0 ? a / b : `분모의 값은 0이 아니어야 합니다.`;
  },
};

console.log(calculate.add(10, 5));
console.log(calculate.subtract(10, 5));
console.log(calculate.multiply(10, 5));
console.log(calculate.divide(10, 5));
