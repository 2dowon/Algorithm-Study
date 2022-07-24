// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let answer = 0;
  let leftedBudget = budget;
  const sortedD = d.sort((a, b) => a - b);

  sortedD.forEach((d) => {
    if (d > leftedBudget) {
      return;
    }

    answer += 1;
    leftedBudget -= d;
  });

  return answer;
}
