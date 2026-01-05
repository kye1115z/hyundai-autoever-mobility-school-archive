const ASC = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers;
};
const numbers = [5, 2, 8, 1, 9];
console.log(ASC(numbers));
