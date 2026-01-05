const student = {
  name: "김예은",
  grade: 4,
  socre: 100,
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
