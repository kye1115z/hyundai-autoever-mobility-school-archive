function getStatistics(students) {
  let highest = 0;
  let lowest = students[0].score;
  let sum = 0;
  let passCount = 0;
  for (const st of students) {
    if (st.score > highest) highest = st.score;
    if (st.score < lowest) lowest = st.score;
    sum += st.score;
    if (st.score >= 60) passCount++;
  }

  return {
    highest,
    lowest,
    average: sum / students.length,
    passCount,
  };
}

const students = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 78 },
  { name: "지영", score: 55 },
];

console.log(getStatistics(students));
