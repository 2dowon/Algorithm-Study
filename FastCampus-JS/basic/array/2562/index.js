// 최댓값 https://www.acmicpc.net/problem/2562

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/array/2562/input.txt")
  .toString()
  .split("\n");

let index = 0;
let maxValue = -1000001;

for (let i = 0; i < 9; i++) {
  let data = Number(input[i]);

  if (maxValue < data) {
    maxValue = data;
    index = i;
  }
}

console.log(maxValue);
console.log(index + 1);
