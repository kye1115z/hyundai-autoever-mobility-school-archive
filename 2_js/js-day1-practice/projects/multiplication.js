// 1. 특정 구구단
const dan = 8;
console.log(`====${dan}단 구구단====`);
for (let i = 1; i <= 9; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}

// 2. 범위 구구단
console.log(`====2~9단 구구단====`);
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 3. 특정 배수만
console.log(`====${dan}단 짝수 구구단====`);
for (let i = 2; i <= 9; i += 2) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}

// 4. 거꾸로 출력
console.log(`====${dan}단 거꾸로 구구단====`);
for (let i = 9; i >= 1; i--) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}
