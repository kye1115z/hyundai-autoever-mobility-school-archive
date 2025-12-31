function gradeManager(scores) {
  let grade = "";
  let sum = 0;
  let max = scores[0];
  let min = scores[0];
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
      grade = "A등급";
    } else if (scores[i] >= 80) {
      grade = "B등급";
    } else if (scores[i] >= 70) {
      grade = "C등급";
    } else if (scores[i] >= 60) {
      grade = "D등급";
    } else {
      grade = "F등급";
    }
    // 2. 각 학생의 등급 출력
    console.log(`학생 ${i + 1}: ${scores[i]}점 - ${grade}`);

    // 3. 평균 계산
    sum += scores[i];

    // 4. 최고 점수, 최저 점수
    if (scores[i] > max) {
      max = scores[i];
    } else if (scores[i] < min) {
      min = scores[i];
    }

    // 5. 합격자 수
    if (scores[i] >= 60) {
      count += 1;
    }
  }
  // 3. 평균 계산
  console.log(`평균 점수: ${sum / scores.length}`);

  // 4. 최고 점수, 최저 점수
  console.log(`최고 점수: ${max}`);
  console.log(`최저 점수: ${min}`);

  // 5. 합격자 수
  console.log(`합격자 수: ${count}`);
}

const scores = [85, 92, 78, 55, 88];
gradeManager(scores);
