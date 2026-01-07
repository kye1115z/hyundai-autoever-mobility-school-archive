const focusInput = document.getElementById("focusInput");
const focusMsg = document.getElementById("focusMessage");

focusInput.addEventListener("focus", () => {
  focusMsg.textContent = "입력 중...";
});

focusInput.addEventListener("blur", () => {
  focusMsg.textContent = "입력 완료";
});
