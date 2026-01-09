// // 1. 배열 고급 메서드
// // map, filter, find
// const products = [
//   { id: 1, name: "노트북", price: 1500000 },
//   { id: 2, name: "마우스", price: 30000 },
//   { id: 3, name: "키보드", price: 80000 },
// ];
// const id2 = products.find((p) => p.id === 2);
// console.log(id2);

// // reduce
// const prices = [1000, 2000, 3000, 4000, 5000];
// const sum = prices.reduce((acc, p) => {
//   return acc + p;
// }, 0);
// const avg = sum / prices.length;
// console.log(avg);

// // some, every
// const users = [
//   { name: "철수", age: 25 },
//   { name: "영희", age: 17 },
//   { name: "민수", age: 30 },
// ];

// console.log(users.some((user) => user.age < 18));
// console.log(users.every((user) => user.age >= 18));

// // 2. 구조 분해
// // 객체
// const student = {
//   name: "지영",
//   scores: {
//     math: 90,
//     english: 85,
//   },
// };

// const {
//   name,
//   scores: { math },
// } = student;
// console.log(name, math);

// // 배열
// const fruits = ["사과", "바나나", "오렌지", "포도"];
// const [a, b] = fruits;
// console.log(a, b);

// // 3. spread
// 객체
// const product = {
//   id: 1,
//   name: "노트북",
//   price: 1500000,
// };

// const copied = {
//   ...product,
//   price: 1200000,
// };

// console.log(copied);

// // 4. spread
// // 모든 숫자를 받아서 평균을 반환하는 함수
// function Avg(...numbers) {
//   const sum = numbers.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
//   return sum / numbers.length;
// }

// console.log(Avg(1, 2, 3, 4, 5));

// // 5. Class
// // 상속
// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
// }

// class Circle extends Shape {
//   // constructor 작성 (color, radius)
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const circle = new Circle("red", 5);
// console.log(circle.color);
// console.log(circle.getArea());

// // 6. 비동기
// async function getAllUsers() {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const users = await res.json();
//     console.log(users);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getAllUsers();

async function getPostTitles() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    console.log(posts.slice(0, 5).map((p) => p.title));
  } catch (e) {
    console.log(e);
  }
}
getPostTitles();
