// 수들의 합 https://www.acmicpc.net/problem/1789

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/1789/input.txt")
  .toString()
  .split("\n");

let s = Number(input[0]);
let answer = 0;
let currentNumber = 1;

while (s > 0) {
  if (s - currentNumber > currentNumber) {
    s -= currentNumber;
    currentNumber += 1;
  } else {
    s = 0;
  }
  answer += 1;
}

console.log(answer);
