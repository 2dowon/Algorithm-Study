// https://school.programmers.co.kr/learn/courses/30/lessons/12899?language=javascript

function solution(n) {
  const nums = [1, 2, 4];

  let answer = 0;
  let x = 0;

  while (n > 0) {
    answer += nums[(n - 1) % 3] * 10 ** x;

    if (n % 3 === 0) {
      n = Math.floor(n / 3) - 1;
    } else {
      n = Math.floor(n / 3);
    }
    x += 1;
  }

  return String(answer);
}

// 다른 사람 풀이
function solution(n) {
  var answer = "";
  var array1_2_4 = new Array(4, 1, 2); //3 % 3 = 0, 1 % 3 = 1, 2 % 3 = 2

  while (n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}
