const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const authorInput = document.getElementById("authorInput");
const addCardBtn = document.getElementById("addCardBtn");
const cardContainer = document.getElementById("cardContainer");

addCardBtn.addEventListener("click", () => {
  const title = (titleInput.value && titleInput.value) || "제목 없음";
  const desc = (descInput.value && descInput.value) || "설명 없음";
  const author = (authorInput.value && authorInput.value) || "익명";

  cardContainer.innerHTML = `
        <h1>제목: ${title}</h1>
        <p>설명: ${desc}</p>
        <p>작성자 ${author}</p>
    `;

  const delBtn = document.createElement("button");
  const btnP = document.createElement("p");
  btnP.textContent = "삭제하기";
  delBtn.appendChild(btnP);
  cardContainer.appendChild(delBtn);
  delBtn.addEventListener("click", deleteCard);

  titleInput.value = "";
  descInput.value = "";
  authorInput.value = "";
});

function deleteCard() {
  cardContainer.innerHTML = ``;
}
