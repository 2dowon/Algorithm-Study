// 사칙연산 https://www.acmicpc.net/problem/10869

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/input-output/10869/input.txt")
  .toString()
  .split("\n");

const [A, B] = input[0].split(" ").map((n) => Number(n));

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);
