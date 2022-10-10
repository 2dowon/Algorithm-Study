// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;
  let position = n;

  while (position > 0) {
    if (position % 2 === 0) {
      position /= 2;
    } else {
      position -= 1;
      answer += 1;
    }
  }

  return answer;
}
