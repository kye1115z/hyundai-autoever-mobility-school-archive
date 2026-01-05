function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}
console.log(factorial(5));
