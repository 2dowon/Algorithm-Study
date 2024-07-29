// 합 https://www.acmicpc.net/problem/8393

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/iteration/8393/input.txt")
  .toString()
  .split("\n");

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
  summary += i;
}
console.log(summary);
