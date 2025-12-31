const answer = 42;
const guesses = [30, 50, 40, 45, 42];
let count = 1;

for (let i = 0; i <= guesses.length; i++) {
  if (guesses[i] === answer) {
    console.log(`정답입니다! ${count}번 만에 맞히셨습니다!`);
    break;
  } else if (guesses[i] > answer) {
    console.log("너무 높습니다!");
  } else {
    console.log("너무 낮습니다!");
  }
  count++;
}
