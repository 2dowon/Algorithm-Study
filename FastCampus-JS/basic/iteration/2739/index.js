// 구구단 https://www.acmicpc.net/problem/2739

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/iteration/2739/input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
