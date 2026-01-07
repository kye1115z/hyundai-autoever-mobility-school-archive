const msgInput = document.getElementById("messageInput");
const msg = document.getElementById("message");

msgInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    msg.textContent = msgInput.value;
    msgInput.value = "";
  }
});
