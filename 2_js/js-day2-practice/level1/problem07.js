function introduce(name, age = 20) {
  return `제 이름은 ${name}이고, 나이는 ${age}세입니다.`;
}
console.log(introduce("김예은", 25));
console.log(introduce("철수"));
