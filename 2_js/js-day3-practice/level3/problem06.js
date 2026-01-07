const priceInput = document.getElementById("priceInput");
const setPriceBtn = document.getElementById("setPriceBtn");
const priceDisplay = document.getElementById("priceDisplay");

setPriceBtn.addEventListener("click", () => {
  const value = priceInput.value;
  priceDisplay.textContent = (value !== "" ? Number(value) : undefined) ?? 1000;
});
