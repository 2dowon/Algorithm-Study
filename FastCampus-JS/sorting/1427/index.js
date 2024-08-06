// 소트인사이드 https://www.acmicpc.net/problem/1427

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/1427/input.txt")
  .toString()
  .split("\n");

const numberList = input[0].split("").map((n) => Number(n));

numberList.sort((a, b) => b - a);
console.log(Number(numberList.join("")));
