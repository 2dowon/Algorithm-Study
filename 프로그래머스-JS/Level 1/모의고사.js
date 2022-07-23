// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let answer = [];
  const scoresMap = new Map();

  const solutionA = [1, 2, 3, 4, 5];
  const solutionB = [2, 1, 2, 3, 2, 4, 2, 5];
  const solutionC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, index) => {
    const indexBySolutionA = (index + 1) % solutionA.length;
    const indexBySolutionB = (index + 1) % solutionB.length;
    const indexBySolutionC = (index + 1) % solutionC.length;

    if (
      answer ===
      solutionA[
        indexBySolutionA === 0 ? solutionA.length - 1 : indexBySolutionA - 1
      ]
    ) {
      scoresMap.set("1", scoresMap.get("1") + 1 || 1);
    }

    if (
      answer ===
      solutionB[
        indexBySolutionB === 0 ? solutionB.length - 1 : indexBySolutionB - 1
      ]
    ) {
      scoresMap.set("2", scoresMap.get("2") + 1 || 1);
    }

    if (
      answer ===
      solutionC[
        indexBySolutionC === 0 ? solutionC.length - 1 : indexBySolutionC - 1
      ]
    ) {
      scoresMap.set("3", scoresMap.get("3") + 1 || 1);
    }
  });

  const highestScore = Math.max(...scoresMap.values());
  scoresMap.forEach((value, key) => {
    if (value === highestScore) {
      answer.push(Number(key));
    }
  });

  return answer.sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
