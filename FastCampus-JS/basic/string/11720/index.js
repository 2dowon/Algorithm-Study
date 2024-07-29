// 숫자의 합 https://www.acmicpc.net/problem/11720

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/string/11720/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]); // 숫자의 갯수
const numbers = input[1].split("").map(Number); // 숫자 n개

const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum);
