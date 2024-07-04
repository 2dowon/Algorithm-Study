// 수학은 비대면강의입니다 https://www.acmicpc.net/problem/19532

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/19532/input.txt")
  .toString()
  .split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map((i) => Number(i));

function solution(a, b, c, d, e, f) {
  for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
      if (a * x + b * y == c && d * x + e * y == f) {
        return `${x} ${y}`;
      }
    }
  }
}

console.log(solution(a, b, c, d, e, f));
