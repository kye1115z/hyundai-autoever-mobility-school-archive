const countInput = document.getElementById("countInput");
const testOrBtn = document.getElementById("testOrBtn");
const testNullishBtn = document.getElementById("testNullishBtn");
const orResult = document.getElementById("orResult");
const nullishResult = document.getElementById("nullishResult");

testOrBtn.addEventListener("click", () => {
  const value = Number(countInput.value);
  orResult.textContent = `|| 결과: ${value || 10}`;
});

testNullishBtn.addEventListener("click", () => {
  const value = Number(countInput.value);
  nullishResult.textContent = `?? 결과: ${value ?? 10}`;
});
