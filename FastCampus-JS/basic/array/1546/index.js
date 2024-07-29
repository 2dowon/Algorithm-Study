// 평균 https://www.acmicpc.net/problem/1546

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/array/1546/input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);
let scores = input[1].split(" ").map(Number);

// 최댓값을 계산
let maxValue = scores.reduce((a, b) => Math.max(a, b));

let updated = [];
for (let i = 0; i < n; i++) {
  //  모든 점수를 점수/maxValue*100 으로 고치기
  updated.push((scores[i] / maxValue) * 100);
}

// 배열에 포함된 원소의 평균 출력
console.log(updated.reduce((a, b) => a + b) / n);
