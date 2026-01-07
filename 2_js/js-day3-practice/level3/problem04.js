const user = {
  name: "Keon",
  contact: {
    email: "yeeun@example.com",
  },
};

const showEmailBtn = document.getElementById("showEmailBtn");
const emailDisplay = document.getElementById("emailDisplay");

showEmailBtn.addEventListener("click", () => {
  emailDisplay.textContent =
    (user && user.contact.email && user.contact.email) || "이메일 없음";
});
