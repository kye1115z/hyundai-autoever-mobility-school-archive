const num1 = 3;
const num2 = 5;
for (let i = 1; i <= 30; i++) {
  if (i % num1 === 0) {
    console.log("Fizz");
  } else if (i % num2 === 0) {
    console.log("Buzz");
  } else if (i % num1 === 0 && i % num2 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
