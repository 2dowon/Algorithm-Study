// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const ternary = n.toString(3);
  const reversedTernary = ternary.split("").reverse().join("");
  const octal = parseInt(reversedTernary, 3);

  return octal;
}

// 다른 사람 풀이
function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * 3 ** i, 0);
}
