const searchInput = document.getElementById("searchInput");
const searchText = document.getElementById("searchText");

searchInput.addEventListener("input", () => {
  searchText.textContent = `검색어: [${searchInput.value}]`;
});
