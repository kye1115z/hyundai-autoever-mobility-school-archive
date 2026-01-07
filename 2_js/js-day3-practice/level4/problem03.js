const darkModeCheck = document.getElementById("darkModeCheck");
const fontSizeRange = document.getElementById("fontSizeRange");
const fontSizeValue = document.getElementById("fontSizeValue");
const themeSelect = document.getElementById("themeSelect");
const preview = document.getElementById("preview");

darkModeCheck.addEventListener("change", () => {
  if (darkModeCheck.checked) {
    preview.style.backgroundColor = "#333";
    preview.style.color = "white";
  } else {
    preview.style.backgroundColor = "white";
    preview.style.color = "black";
  }
});

fontSizeRange.addEventListener("input", () => {
  const size = fontSizeRange.value;
  fontSizeValue.textContent = `${size}px`;
  preview.style.fontSize = `${size}px`;
});

themeSelect.addEventListener("change", () => {
  const color = themeSelect.value || "black";

  if (!darkModeCheck.checked) {
    preview.style.color = color;
  }
});
