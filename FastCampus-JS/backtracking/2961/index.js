// 도영이가 만든 맛있는 음식 https://www.acmicpc.net/problem/2961

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/backtracking/2961/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]); // 재료의 수
const arr = []; // 신맛 S와 쓴맛 B를 저장하는 배열
for (let i = 0; i < n; i++) {
  arr.push(input[i + 1].split(" ").map(Number));
}

let visited = new Array(11).fill(false); // 방문 처리 배열 (최대 재료 개수 10개)
let result = []; // 조합 결과 배열
let answer = 1e9;

function dfs(depth, start) {
  if (depth > 0) {
    let totalX = 1;
    let totalY = 0;

    for (let i of result) {
      // 인덱스(index)를 하나씩 확인하며
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }
    answer = Math.min(answer, Math.abs(totalX - totalY));
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) {
      continue;
    }

    result.push(i); // 방문 처리
    visited[i] = true;
    dfs(depth + 1, i + 1); // 재귀 함수 호출
    result.pop(); // 방문 처리 해제
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);
