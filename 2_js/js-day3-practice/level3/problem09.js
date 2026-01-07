const obj1 = {
  greet() {
    return "안녕하세요!";
  },
};
const obj2 = {};

const callMethodBtn = document.getElementById("callMethodBtn");
const methodResult = document.getElementById("methodResult");
let isObj1 = true;

callMethodBtn.addEventListener("click", () => {
  curObj = isObj1 ? obj1 : obj2;
  const result = curObj.greet?.() ?? "메서드 없음";
  methodResult.textContent = result;

  isObj1 = !isObj1;
});
