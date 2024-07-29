// 곱셈 https://www.acmicpc.net/problem/2588

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/input-output/2588/input.txt")
  .toString()
  .split("\n");

const A = Number(input[0]);
const B = input[1];

for (let i = B.length; i > 0; i--) {
  console.log(A * Number(B[i - 1]));
}
console.log(A * Number(B));
