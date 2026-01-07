const colorBtns = document.querySelectorAll(".colorBtn");
const selectedColor = document.getElementById("selectedColor");

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedColor.textContent = btn.textContent;
  });
});
