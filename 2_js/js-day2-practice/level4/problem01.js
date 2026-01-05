function getAvg(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}
const numbers = [80, 90, 88, 82];
console.log(getAvg(numbers));
