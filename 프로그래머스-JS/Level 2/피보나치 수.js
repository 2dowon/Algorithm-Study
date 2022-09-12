// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let fiboList = [0, 1];

  for (let i = 2; i <= n; i++) {
    fiboList[i] = (fiboList[i - 1] + fiboList[i - 2]) % 1234567;
  }

  return fiboList[n];
}
