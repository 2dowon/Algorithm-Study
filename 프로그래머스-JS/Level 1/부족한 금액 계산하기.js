// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let answer = money;

  for (let i = 1; i <= count; i++) {
    answer -= price * i;
  }

  if (answer >= 0) {
    return 0;
  }

  return Math.abs(answer);
}

// 다른 사람 풀이
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}
