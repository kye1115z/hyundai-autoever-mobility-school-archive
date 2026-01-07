const testInput = document.getElementById("testInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  if (testInput.value) {
    result.textContent = "Truthy 값입니다.";
  } else {
    result.textContent = "Falsy 값입니다.";
  }
});
