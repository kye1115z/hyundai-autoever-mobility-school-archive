const scores = {
  math: 85,
  english: 92,
  science: 78,
  history: 88,
};

const values = Object.values(scores);
let sum = 0;
for (const value of values) {
  sum += value;
}
const avg = sum / values.length;
console.log(avg);
