const btn = document.getElementById("addBtn");
const ul = document.getElementById("list");
let listNum = 2;
btn.addEventListener("click", () => {
  newLi = document.createElement("li");
  newLi.textContent = `항목 ${listNum}`;
  ul.appendChild(newLi);
  listNum++;
});
