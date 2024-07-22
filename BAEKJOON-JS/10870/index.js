// 피보나치수 https://www.acmicpc.net/problem/10870

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/10870/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

const fibonacci = (n) => {
  // 0번째 피보나치 수는 0
  if (n === 0) {
    return 0;
  }
  // 1번째 피보나치 수는 1
  if (n === 1) {
    return 1;
  }
  // 피보나치 수를 구하는 공식인 Fn = Fn-1 + Fn-2로 피보나치 수를 구함
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(n));
// 재귀함수를 이용하기 때문에 시간 복잡도는 O(2의n제곱) 지수 시간
// 시간 제한이 1초이므로 n이 26 이하일 때는 해당 알고리즘으로 풀 수 있음
// 현재 문제는 n이 20 이하이므로 재귀 함수를 이용해도 상관없음
