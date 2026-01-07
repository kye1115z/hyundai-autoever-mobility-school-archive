const technologies = [
  { name: "React", category: "frontend" },
  { name: "Vue", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Angular", category: "frontend" },
];

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const techList = document.getElementById("techList");

function pageRender() {
  technologies.forEach((t) => {
    const newLi = document.createElement("p");
    newLi.textContent = `${t.name}(${t.category})`;
    techList.append(newLi);
  });
}

searchInput.addEventListener("input", () => {
  techList.innerHTML = ``;
  const searchValue = searchInput.value.toLowerCase();

  const filtered = technologies.filter((t) => {
    const matchesSearch = t.name.toLocaleLowerCase().includes(searchValue);
    return matchesSearch;
  });

  if (filtered.length === 0) {
    techList.innerHTML = `<li>검색 결과가 없습니다.</li>`;
    return;
  }

  filtered.forEach((t) => {
    const newLi = document.createElement("li");
    newLi.textContent = `${t.name} (${t.category})`;
    techList.appendChild(newLi);
  });
});

filterSelect.addEventListener("click", () => {
  techList.innerHTML = ``;
  const category = filterSelect.value;

  const filtered = technologies.filter((t) => {
    const matchesCategory = category === "all" || t.category === category;
    return matchesCategory;
  });

  if (filtered.length === 0) {
    techList.innerHTML = `<li>검색 결과가 없습니다.</li>`;
    return;
  }

  filtered.forEach((t) => {
    const newLi = document.createElement("li");
    newLi.textContent = `${t.name} (${t.category})`;
    techList.appendChild(newLi);
  });
});

pageRender();
