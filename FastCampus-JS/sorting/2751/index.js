// 수 정렬하기 2 https://www.acmicpc.net/problem/2751

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/2751/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

const numbers = [];
for (let i = 0; i < n; i++) {
  numbers.push(Number(input[i + 1]));
}
numbers.sort((a, b) => a - b);
console.log(numbers.join("\n"));
