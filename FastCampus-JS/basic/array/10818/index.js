// 최소, 최대 https://www.acmicpc.net/problem/10818

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/array/10818/input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map((x) => Number(x));

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);

// 원소를 차례대로 하나씩 확인하므로 시간 복잡도 O(N)
