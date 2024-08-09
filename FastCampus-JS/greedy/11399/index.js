// ATM https://www.acmicpc.net/problem/11399

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/11399/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);
const timeList = input[1].split(" ").map(Number);
timeList.sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += timeList.slice(0, i + 1).reduce((acc, cur) => acc + cur);
}

console.log(answer);
