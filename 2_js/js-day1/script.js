// // 1. 출력 (code runner)
// console.log("Hello world");

// // 2. 변수 선언&초기화&사용
// const birthYear = 2002;
// let age = 24;
// console.log(`birthYear: ${birthYear}, 나이: ${age}`);

// const favFood = "김치볶음밥";
// let moodScore = 9;
// const today = "2025-12-31";
// console.log(`제가 좋아하는 음식은 ${favFood}입니다.`);
// console.log(`지금 제 기분 점수는 ${moodScore}점 입니다.`);
// console.log(`오늘 날짜: ${today}.`);

// // 3. 데이터 타입
// const myName = "김예은";
// const age = 24;
// console.log(`안녕하세요. 저는 ${myName}이고, ${age}살입니다.`);

// console.log(typeof 100); // number
// console.log(typeof "100"); // string
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined

// console.log(Number("a12")); // NaN
// console.log("50" + 30);
// console.log(Number("50") + 30);

// // 4. 연산자
// let count = 1;
// let count2 = 1;
// console.log(count++);
// console.log(++count2);

// let num = 100;
// num += 50;
// num /= 2;
// console.log(num);

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(true == 1); // true
// console.log(true === 1); // false

// const age = 17;
// const isStudent = false;
// let isDiscount = "";
// if (age >= 18 || isStudent) {
//   isDiscount = "면 할인이 가능합니다.";
// } else {
//   isDiscount = " 아니어서 할인이 불가능합니다.";
// }
// console.log(`18세 이상이거나 학생이${isDiscount}`);

// // 5. 조건문
// const age = 17;
// if (age >= 18) {
//   console.log("성인");
// } else {
//   console.log("미성년자");
// }

// let temp = 9;
// if (temp >= 30) {
//   console.log("매우 더워요");
// } else if (temp >= 20) {
//   console.log("따뜻해요");
// } else if (temp >= 10) {
//   console.log("선선해요");
// } else {
//   console.log("추워요");
// }

// let day = "토요일";
// switch (day) {
//   case "월요일":
//     console.log("열심히 공부");
//     break;
//   case "화요일":
//     console.log("열심히 공부");
//     break;
//   case "수요일":
//     console.log("열심히 공부");
//     break;
//   case "목요일":
//     console.log("열심히 공부");
//     break;
//   case "금요일":
//     console.log("주말이 다가온다");
//     break;
//   case "토요일":
//     console.log("휴식");
//     break;
//   case "일요일":
//     console.log("휴식");
//     break;
// }

let point = 200;
let numPurchase = 3;
if (point >= 1000 && numPurchase >= 10) {
  console.log("VIP");
} else if (point >= 500 || numPurchase >= 5) {
  console.log("Gold");
} else {
  console.log("Bronze");
}
