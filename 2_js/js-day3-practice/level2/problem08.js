const colorBox = document.getElementById("colorBox");
const colorList = document.getElementById("colorList");

colorList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const color = e.target.dataset.color;
    colorBox.style.backgroundColor = color;
  }
});
