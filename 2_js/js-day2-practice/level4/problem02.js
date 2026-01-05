const studentInfo = {
  students: [],
  addStudent(student) {
    this.students.push(student);
  },
  getStudent(name) {
    for (const st of this.students) {
      return st.name === name ? `${st.name}: ${st.score}` : null;
    }
  },
  printAllStudents() {
    for (const st of this.students) {
      console.log(`${st.name}: ${st.score}`);
    }
  },
};

studentInfo.addStudent({ name: "예은", score: 100 });
studentInfo.addStudent({ name: "철수", score: 99 });
console.log(studentInfo.getStudent("예은"));
studentInfo.printAllStudents();
