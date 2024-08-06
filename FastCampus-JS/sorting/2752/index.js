// 세수정렬 https://www.acmicpc.net/problem/2752

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/2752/input.txt")
  .toString()
  .split("\n");

const numbers = input[0].split(" ").map((n) => Number(n));
numbers.sort((a, b) => a - b);
console.log(numbers.join(" "));
