const agreeCheck = document.getElementById("agreeCheck");
const label = document.querySelector("label");
const submitButton = document.getElementById("submitButton");
const checkResult = document.getElementById("checkResult");

submitButton.addEventListener("click", () => {
  if (agreeCheck.checked) {
    checkResult.textContent = "동의 완료";
  } else {
    checkResult.textContent = "동의가 필요합니다.";
  }
});
