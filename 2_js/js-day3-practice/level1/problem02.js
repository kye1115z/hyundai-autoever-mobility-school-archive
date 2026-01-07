const btn = document.getElementById("styleBtn");
const p = document.getElementById("text");
btn.addEventListener("click", () => {
  p.style.color = "red";
  p.style.fontSize = "24px";
  p.style.fontWeight = "bold";
});
