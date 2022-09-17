// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function numberOf1InBinaryNumber(targetNumber) {
  return [...targetNumber.toString(2)].filter((num) => num === "1").length;
}

function solution(n) {
  var answer = n;

  const numberOf1InN = numberOf1InBinaryNumber(n);

  while (true) {
    if (numberOf1InN === numberOf1InBinaryNumber(answer + 1)) {
      answer += 1;
      break;
    }
    answer += 1;
  }

  return answer;
}

// 다른 사람 풀이
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
