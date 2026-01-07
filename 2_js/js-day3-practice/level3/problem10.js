const nameInput = document.getElementById("nameInput");
const cityInput = document.getElementById("cityInput");
const ageInput = document.getElementById("ageInput");
const createProfileBtn = document.getElementById("createProfileBtn");
const profileBox = document.getElementById("profile");

createProfileBtn.addEventListener("click", () => {
  let name = (nameInput.value && nameInput.value) || "익명";
  let city = (cityInput.value && cityInput.value) || "정보 없음";
  let age = (ageInput.value ?? Number(cityInput.value)) || "비공개";

  profileBox.innerHTML = `
  <p>이름: ${name}</p>
  <p>사는 곳: ${city}</p>
  <p>나이: ${age}</p>
  `;

  nameInput.value = "";
  cityInput.value = "";
  ageInput.value = "";
});
