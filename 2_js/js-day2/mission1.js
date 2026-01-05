// // 1. 함수의 기본 구조
// function printMyName() {
//   console.log("김예은");
// }

// printMyName();
// printMyName();
// printMyName();

// // 2. 매개변수
// function printSum(num1, num2) {
//   console.log(num1 + num2);
// }

// printSum(5, 3); // 8
// printSum(10, 20); // 30

// function nameNage(name, age = 20) {
//   return `안녕하세요. 저는 ${name}이고 나이는 ${age}살입니다.`;
// }

// console.log(nameNage("김예은"));
// console.log(nameNage("김예은", 25));

// // 3. 반환
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// let value = multiply(5, 3);
// console.log(value);

// function jjakhol(num) {
//   if (num % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// console.log(jjakhol(1));

// // 4. 선언문, 표현식, 화살표 함수
// function getMax1(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// const getMax2 = function (num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };

// const getMax3 = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };

// console.log(getMax1(10, 5));
// console.log(getMax2(10, 5));
// console.log(getMax3(10, 5));

// // 5. 스코프
// const x = 10;
// function test() {
//   const x = 20;
//   console.log(x);
// }

// test();
// console.log(x);

// // 6. 클로저
// function printName(name = "김예은") {
//   let yourName = name;
//   function setName() {
//     console.log(`안녕하세요, ${yourName}님!`);
//   }
//   return setName();
// }

// printName();

// // 7. 콜백 함수
// function operate(a, b, callback) {
//   console.log(callback(a, b));
// }
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// operate(10, 5, add);
// operate(10, 5, subtract);

// // 8. 배열
// let favFood = ["치킨", "피자", "햄버거"];
// let lastIndex = favFood.length - 1;
// console.log(favFood[0]);
// console.log(favFood[lastIndex]);
// console.log(favFood.length);

// const numbers = [5, 10, 15, 20, 25];
// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }
// console.log(sum);

// sum = 0;
// numbers.forEach((num) => (sum += num));
// console.log(sum);

// let list = [];
// list.push("JavaScript"); // ["JavaScript"]
// list.push("Python"); // ["JavaScript", "Python"]
// list.unshift("Java"); // ["Java", "JavaScript", "Python"]
// list.pop(); // ["Java", "JavaScript"]
// console.log(list);

// let week = ["월", "화", "수", "목", "금"];
// console.log(week.indexOf("수"));
// week.push("토", "일");
// console.log(week);
// console.log(week.includes("금"));

// const numList = [3, 1, 4, 1, 5, 9, 2, 6];
// numList.sort((a, b) => a - b);
// console.log(numList);
// numList.sort((a, b) => b - a);
// console.log(numList);

// // 9. 객체
// const myInfo = {
//   name: "김예은",
//   age: 25,
//   favFood: "김치볶음밥",
// };

// console.log(myInfo);
// console.log(myInfo.name);
// console.log(myInfo.age);
// console.log(myInfo.favFood);

// let productInfo = {};
// productInfo.name = "아이폰 15 pro";
// productInfo.price = 2000000;
// productInfo.stock = 1;
// console.log(productInfo);
// productInfo.price = 10000;
// console.log(productInfo);

// const caculate = {
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
// };
// console.log(caculate.add(10, 5));
// console.log(caculate.subtract(10, 5));

// const scores = {
//   math: 85,
//   english: 92,
//   science: 78,
// };
// let sum = 0;
// for (const value in scores) {
//   sum += scores[value];
// }
// console.log(sum);

// sum = 0;
// let values = Object.values(scores);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// const book = {
//   title: "JavaScript Guide",
//   author: "Yeeun Kim",
//   year: 2026,
// };

// const { title, author } = book;
// console.log(title, author);

// const student = {
//   name: "김예은",
//   grade: 4,
//   score: 100,
// };

// const json = JSON.stringify(student);
// console.log(json);

// const obj = JSON.parse(json);
// console.log(obj);
