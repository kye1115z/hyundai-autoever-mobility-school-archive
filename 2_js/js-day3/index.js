// // 1. 요소 선택
// const container = document.getElementById("container");
// const title = document.querySelector(".title");
// const descs = document.querySelectorAll(".desc");
// console.log(container);
// console.log(title);
// console.log(descs.length);

// // 2. 선택자의 활용
// const menu = document.querySelector("#menu");
// const activeItem = document.querySelector(".item.active");
// const items = document.querySelectorAll("#menu li");
// console.log(menu);
// console.log(activeItem);
// console.log(items.length);

// // 3. 요소 조작
// document.getElementById("greeting").textContent = "안녕하세요.";
// const box = document.getElementById("box");
// box.innerHTML = "<p>환영합니다!</p>";

// box.style.width = "200px";
// box.style.height = "200px";
// box.style.backgroundColor = "blue";
// box.style.color = "white";
// box.style.textAlign = "center";

// // 4. 클래스 조작
// const btn = document.getElementById("btn");
// console.log(btn.className);
// btn.classList.add("active");
// console.log(btn.classList.contains("active"));
// btn.classList.toggle("active");
// console.log(btn.className);
// btn.classList.add("hidden");
// console.log(btn.className);

// // 5. 속성 조작 (얘 다시 해야 됨.)
// const input = document.getElementById("username");
// input.setAttribute("placeholder", "사용자 이름");
// const img = document.getElementById("profile");
// img.src = "profile.jpg";
// img.dataset.id = "100";
// console.log(input);
// console.log(img);

// // 6. 요소 생성 제거
// const newLi = document.createElement("li");
// newLi.textContent = "항목2";
// const ul = document.getElementById("list");
// ul.appendChild(newLi);

// document.getElementById("para1").remove();
// const newP = document.createElement("p");
// newP.textContent = "문단3";
// document.getElementById("container").appendChild(newP);

// // 7. 이벤트 조작
// const btn = document.getElementById("myBtn");
// btn.addEventListener("click", function () {
//   alert("안녕하세요!");
// });

// const btn = document.getElementById("colorBtn");
// btn.addEventListener("click", () => {
//   document.getElementById("box").style.backgroundColor = "red";
// });

// const input = document.getElementById("nameInput");
// input.addEventListener("keyup", () => {
//   document.getElementById(
//     "greeting"
//   ).textContent = `안녕하세요, ${input.value}님!`;
// });

// const btns = document.querySelectorAll(".btn");
// for (const btn of btns) {
//   btn.addEventListener("click", (e) => {
//     document.getElementById("result").textContent = e.target.textContent;
//   });
// }

// // Truthy/Falsy
