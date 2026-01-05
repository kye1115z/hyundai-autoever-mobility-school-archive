function getMax(numbers) {
  let max = 0;
  for (const num of numbers) {
    if (num > max) max = num;
  }
  return max;
}
const numbers = [45, 23, 67, 12, 89, 34];
console.log(getMax(numbers));
