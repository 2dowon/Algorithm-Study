// 내 풀이
function solution(numbers) {
  var answer = 45;

  numbers.forEach((number) => {
    answer -= number;
  });

  return answer;
}

// 다른 사람 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
