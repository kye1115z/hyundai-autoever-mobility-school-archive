const readline = require("readline/promises");

async function calculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const num1Str = await rl.question("숫자1 입력: ");
    const op = await rl.question("연산자 입력(+, -, *, /): ");
    const num2Str = await rl.question("숫자2 입력: ");

    const num1 = Number(num1Str);
    const num2 = Number(num2Str);

    switch (op) {
      case "+":
        console.log(num1 + num2);
        break;
      case "-":
        console.log(num1 - num2);
        break;
      case "*":
        console.log(num1 * num2);
        break;
      case "/":
        if (num2 === 0) {
          console.log("0으로 나눌 수 없습니다.");
        } else {
          console.log(num1 / num2);
        }
        break;
      default:
        console.log("잘못된 연산자입니다.");
        break;
    }
  } finally {
    rl.close();
  }
}

calculator();
