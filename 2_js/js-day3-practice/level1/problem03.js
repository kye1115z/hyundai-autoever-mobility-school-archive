const btn = document.getElementById("toggleBtn");
const p = document.getElementById("para");
btn.addEventListener("click", () => {
  p.classList.toggle("highlight");
});
