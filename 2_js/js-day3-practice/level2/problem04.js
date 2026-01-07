const myForm = document.getElementById("myForm");
const result = document.getElementById("result");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = `제출된 이름: ${
    document.getElementById("username").value
  }`;
});
