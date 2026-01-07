const container = document.getElementById("container");
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decrease5Btn = document.getElementById("decrease5Btn");
const increase5Btn = document.getElementById("increase5Btn");

let count = counter.textContent;
increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

increase5Btn.addEventListener("click", () => {
  count += 5;
  updateCount();
});

decrease5Btn.addEventListener("click", () => {
  count -= 5;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});

function updateCount() {
  if (count > 10 || count < -10) {
    alert("-10~10 사이의 값으로 조정해주세요.");
    count = 0;
    counter.textContent = 0;
    return;
  }
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
