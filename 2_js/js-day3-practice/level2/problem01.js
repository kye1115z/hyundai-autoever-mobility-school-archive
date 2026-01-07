const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "yellow";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "gray";
});
