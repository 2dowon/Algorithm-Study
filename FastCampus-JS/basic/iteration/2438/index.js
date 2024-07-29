// 별 찍기 - 1 https://www.acmicpc.net/problem/2438

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/iteration/2438/input.txt")
  .toString()
  .split("\n");

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);

let result = "";
for (let i = 0; i < n; i++) {
  // 층(행)만큼 반복
  for (let j = 0; j <= i; j++) {
    // 현재 행만큼 별을 출력
    result += "*";
  }
  result += "\n";
}

console.log(result);
