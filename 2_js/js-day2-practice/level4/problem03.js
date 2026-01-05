function removeDuplicates(numbers) {
  let newNumberList = [];
  for (const num of numbers) {
    if (!newNumberList.includes(num)) newNumberList.push(num);
  }
  return newNumberList;
}
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
console.log(removeDuplicates(numbers));
