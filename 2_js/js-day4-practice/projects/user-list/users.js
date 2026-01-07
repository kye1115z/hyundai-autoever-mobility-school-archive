const searchInput = document.getElementById("searchInput");
const sortOption = document.getElementById("sortOption");
const checkDetail = document.getElementById("checkDetail");
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
    users.sort((a, b) => a.name.localeCompare(b.name));
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
        <p>company: ${user.company.name}</p>
        <p id="hiddenEl" class="hidden">address: ${user.address.street} ${user.address.suit}, ${user.address.city} ${user.address.zipcode}</p>
        <p id="hiddenEl" class="hidden">phone: ${user.phone}</p>
        </div>
        `;
    userList.appendChild(userCard);

    userCard.addEventListener("click", () => {
      showPost(user.id, user.name);
    });
  });
}

// 유저 이름 검색
searchInput.addEventListener("input", (e) => {
  const searchUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  renderUsers(searchUsers);
});

// 도전 과제 1. 정렬 기능 (이름, 이메일 순) - 기본을 이름으로 하자...
sortOption.addEventListener("change", (e) => {
  e.target.value === "name"
    ? users.sort((a, b) => a.name.localeCompare(b.name))
    : users.sort((a, b) => a.email.localeCompare(b.email));
  renderUsers(users);
});

// 도전 과제 2. 상세 정보 토글
checkDetail.addEventListener("input", (e) => {
  const hiddenEl = document.querySelectorAll("#hiddenEl");
  if (e.target.checked) {
    hiddenEl.forEach((el) => {
      el.style.display = "block";
    });
  } else {
    hiddenEl.forEach((el) => {
      el.style.display = "none";
    });
  }
});

// 도전 과제 3. 카드 클릭 사용자의 게시물 표시
const fetchPost = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!result.ok) {
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }

  posts = await result.json();
  return posts;
};

async function showPost(id, name) {
  const post = await fetchPost(id);
  userList.innerHTML = `
    <button id="backBtn">유저 리스트로 돌아가기</button>
  `;
  const backBtn = document.getElementById("backBtn");

  post.map((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `
        <div id=${post.id} class="user-card">
        <h3>${post.title}</h3>
        <p>username: ${name}</p>
        <p>email: ${post.body}</p>
        </div>
        `;
    userList.appendChild(postCard);
  });

  backBtn.addEventListener("click", () => fetchUsers());
}
fetchUsers();
