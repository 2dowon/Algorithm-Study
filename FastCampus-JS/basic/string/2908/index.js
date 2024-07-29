// 상수 https://www.acmicpc.net/problem/2908

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/string/2908/input.txt")
  .toString()
  .split("\n");

const [A, B] = input[0].split(" ");

const reversedA = A[2] + A[1] + A[0];
const reversedB = B[2] + B[1] + B[0];

console.log(Math.max(Number(reversedA), Number(reversedB)));
