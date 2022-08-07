// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// 다른 사람 풀이
function solution(numbers) {
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
