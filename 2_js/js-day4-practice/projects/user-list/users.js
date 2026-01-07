const searchInput = document.getElementById("searchInput");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const userList = document.getElementById("userList");
let users = [];

// 유저 호출
const fetchUsers = async () => {
  loading.style.display = "block";
  error.style.display = "none";
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!result.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다.");
    }

    users = await result.json();
    renderUsers(users);
  } catch (e) {
    error.style.div = e.message;
    error.textContent = "block";
  } finally {
    loading.style.display = "none";
  }
};

// 유저 카드 생성
function renderUsers(users) {
  userList.innerHTML = ``;

  if (users.lengh === 0) {
    userList.innerHTML = "<p>검색 결과가 없습니다.</p>";
    return;
  }

  users.map((user) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `
        <div id=${user.id} class="user-card">
        <h3>${user.name}</h3>
        <p>username: ${user.username}</p>
        <p>email: ${user.email}</p>
        <p>address: ${user.address.street} ${user.address.suit}, ${user.address.city} ${user.address.zipcode}</p>
        </div>
        `;
    userList.appendChild(userCard);
  });
}

// 유저 이름 검색
searchInput.addEventListener("input", (e) => {
  const searchUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  renderUsers(searchUsers);
});

fetchUsers();
