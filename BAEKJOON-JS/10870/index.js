// 피보나치수 https://www.acmicpc.net/problem/10870

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/10870/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

let fibonacciList = new Array(n + 1).fill(0);
fibonacciList[1] = 1;

for (let i = 2; i < n + 1; i++) {
  fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
}

console.log(fibonacciList[n]); // 55
