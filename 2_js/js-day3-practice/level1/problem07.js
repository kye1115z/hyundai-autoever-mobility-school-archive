const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBtn");
const box = document.getElementById("box");

hideBtn.addEventListener("click", () => {
  box.style.display = "none";
});

showBtn.addEventListener("click", () => {
  box.style.display = "block";
});
