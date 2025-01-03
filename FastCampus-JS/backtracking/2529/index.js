// 부등호 https://www.acmicpc.net/problem/2529

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/backtracking/2529/input.txt")
  .toString()
  .split("\n");

let k = Number(input[0]);
let arr = input[1].split(" ");
let visited = new Array(10).fill(false);
let result = [];
let current = "";
let first = "";

function dfs(depth) {
  // 각 순열(permutation)에 대한 처리
  if (depth == k + 1) {
    let check = true; // 부등식을 만족하는지 확인

    for (let i = 0; i < k; i++) {
      if (arr[i] == "<") {
        if (result[i] > result[i + 1]) check = false;
      } else if (arr[i] == ">") {
        if (result[i] < result[i + 1]) check = false;
      }
    }

    // 부등식을 만족하는 경우에
    if (check) {
      current = "";

      for (let x of result) current += x + "";
      if (first == "") first = current; // 첫째 문자열은 [가장 작은 수]
    }
    return;
  }

  // 0부터 9까지의 숫자를 하나씩 고르는 순열(백트래킹)
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue; // 이미 고른 숫자라면 무시하도록

    visited[i] = true; // 현재 선택한 숫자 방문 처리
    result.push(i);
    dfs(depth + 1); // 재귀 함수 호출
    visited[i] = false; // 현재 선택한 숫자 방문 처리 취소
    result.pop();
  }
}

dfs(0);
console.log(current + "\n" + first); // 마지막에 남은 current 값은 [가장 큰 문자열]
