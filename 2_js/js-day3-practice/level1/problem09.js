const btn = document.getElementById("removeBtn");
const item1 = document.getElementById("item1");

btn.addEventListener("click", () => {
  item1.remove();
});
