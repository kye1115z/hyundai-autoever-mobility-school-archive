const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmInput = document.getElementById("confirmInput");
const ageInput = document.getElementById("ageInput");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const ageError = document.getElementById("ageError");
const successMessage = document.getElementById("successMessage");

emailInput.addEventListener("blur", () => {
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "올바른 이메일 형식이 아닙니다.";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "비밀번호는 8자리 이상이어야 합니다.";
  } else {
    passwordError.textContent = "";
  }
});

ageInput.addEventListener("blur", () => {
  const ageValue = ageInput.value !== "" ? Number(ageInput.value) : null;
  const age = ageValue ?? -1;

  if (age !== -1 && age < 0) {
    ageError.textContent = "나이는 0보다 커야 합니다.";
  } else {
    ageError.textContent = "";
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const hasError =
    emailError.textContent ||
    passwordError.textContent ||
    confirmError.textContent ||
    ageError.textContent;

  if (!emailInput.value || !passwordInput.value || !confirmInput.value) {
    alert("필수 항목을 입력해주세요.");
    return;
  } else {
    successMessage.textContent = "가입 완료";
    signupForm.reset();
  }
});
