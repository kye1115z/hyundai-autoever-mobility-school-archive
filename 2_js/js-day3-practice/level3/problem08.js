const users = [
  {
    name: "철수",
    address: {
      city: "서울",
    },
  },
  {
    name: "영희",
  },
];

const showCityBtn = document.getElementById("showCityBtn");
const cityDisplay = document.getElementById("cityDisplay");
let userIndex = 0;

showCityBtn.addEventListener("click", () => {
  const user = users[userIndex];
  const city = user?.address?.city ?? "정보 없음";
  cityDisplay.textContent = `${user.name}님의 도시: ${city}`;
  userIndex = (userIndex + 1) % users.length;
});
