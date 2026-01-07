const btn = document.getElementById("addContentBtn");
const content = document.getElementById("content");

btn.addEventListener("click", () => {
  content.innerHTML = `
        <h2>제목</h2>
        <p>이것은 내용입니다.</p>
    `;
});
