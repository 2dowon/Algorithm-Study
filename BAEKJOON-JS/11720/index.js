// 숫자의 합 https://www.acmicpc.net/problem/11720

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/11720/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);
const numberList = input[1].split("").map((n) => Number(n));

function solution(numberList) {
  // 숫자 n개의 합
  return numberList.reduce((acc, cur) => acc + cur);
}

console.log(solution(numberList));
