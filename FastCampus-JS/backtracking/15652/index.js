// N과 M(4) https://www.acmicpc.net/problem/15652

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/backtracking/15652/input.txt")
  .toString()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 M개를 고른 중복 조합
let arr = []; // 중복 조합을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let selected = []; // 현재 중복 조합에 포함된 원소(element)의 인덱스
let answer = "";

function dfs(arr, depth, start) {
  if (depth == m) {
    // 모든 중복 조합을 확인하는 부분
    let result = []; // 중복 조합 결과 저장 테이블
    for (let i of selected) result.push(arr[i]); // 계산된 중복 조합을 실질적으로 처리하는 부분
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    // start 지점부터 하나씩 원소 인덱스(index)를 확인하며
    selected.push(i); // 현재 원소 선택
    dfs(arr, depth + 1, i); // 조합이므로, 재귀 함수 호출시 현재 인덱스(index)를 넣기
    selected.pop(); // 현재 원소 선택 취소
  }
}

dfs(arr, 0, 0);
console.log(answer);
