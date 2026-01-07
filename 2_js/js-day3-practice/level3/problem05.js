const addItemBtn = document.getElementById("addItemBtn");
const checkButton = document.getElementById("checkButton");
const itemList = document.getElementById("itemList");
const statusP = document.getElementById("status");
let count = 1;

addItemBtn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = `항목 ${count}`;
  itemList.appendChild(newLi);
  count++;
});

checkButton.addEventListener("click", () => {
  let listNum = document.querySelectorAll("li");
  statusP.textContent =
    (listNum.length && `항목이 ${listNum.length}개 있습니다.`) ||
    "항목이 없습니다.";
});
