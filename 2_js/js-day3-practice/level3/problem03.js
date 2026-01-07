const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const createBtn = document.getElementById("createBtn");
const post = document.getElementById("post");

createBtn.addEventListener("click", () => {
  post.innerHTML = `
  <h3>${titleInput.value || "제목 없음"}</h3>
  <p>${authorInput.value || "익명"}</p>
    `;
});
