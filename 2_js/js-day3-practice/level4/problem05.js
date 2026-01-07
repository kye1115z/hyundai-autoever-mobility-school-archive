const users = [
  {
    id: 1,
    name: "김철수",
    email: "kim@example.com",
    address: { city: "서울" },
  },
  {
    id: 2,
    name: "이영희",
    email: "lee@example.com",
  },
  {
    id: 3,
    name: "박민수",
    email: "park@example.com",
    address: { city: "부산" },
  },
];

const loadDataBtn = document.getElementById("loadDataBtn");
const tableBody = document.getElementById("tableBody");
const loading = document.getElementById("loading");

loadDataBtn.addEventListener("click", () => {
  loading.style.display = "block";
  loadDataBtn.disabled = true;

  setTimeout(() => {
    tableBody.innerHTML = "";

    users.forEach((user) => {
      const tr = document.createElement("tr");

      const city = user?.address?.city ?? "정보 없음";

      tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${city}</td>
            <td><button class="view-btn" data-id="${user.id}">상세보기</button></td>
        `;

      tableBody.appendChild(tr);
    });

    loading.style.display = "none";
    loadDataBtn.disabled = false;
  }, 1000);
});

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-btn")) {
    const userId = Number(e.target.dataset.id);
    const user = users.find((u) => u.id === userId);

    const city = user?.address?.city ?? "정보 없음";

    alert(`
            ID: ${user.id}
            이름: ${user.name}
            이메일: ${user.email}
            도시: ${city}`);
  }
});
