const btn = document.getElementById("greetBtn");
const input = document.getElementById("nameInput");
const p = document.getElementById("greeting");

btn.addEventListener("click", () => {
  p.textContent = `안녕하세요, ${input.value}님!`;
});
