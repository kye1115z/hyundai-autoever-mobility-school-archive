const btn = document.getElementById("changeLinkBtn");
const link = document.getElementById("link");

btn.addEventListener("click", () => {
  link.href = "https://google.com";
});
