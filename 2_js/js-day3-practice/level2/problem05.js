const countBtn = document.getElementById("countBtn");
const countText = document.getElementById("count");
let count = 0;
countBtn.addEventListener("click", () => {
  count++;
  countText.textContent = `클릭 횟수: ${count}`;
});
