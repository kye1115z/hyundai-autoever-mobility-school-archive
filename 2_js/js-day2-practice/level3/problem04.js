const person = {
  name: "김예은",
  age: 25,
  introduce() {
    console.log(`안녕하세요 제 이름은 ${this.name}이고, ${this.age}세입니다.`);
  },
};

person.introduce();
