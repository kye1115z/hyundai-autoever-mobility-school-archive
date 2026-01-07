const usernameInput = document.getElementById("usernameInput");
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
  let name = usernameInput.value || "Guest";
  greeting.textContent = `안녕하세요, ${name}님!`;
});
