// N과 M(1) https://www.acmicpc.net/problem/15649

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/backtracking/15649-1/input.txt")
  .toString()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let answer = "";
let visited = new Array(n).fill(false);
let temp = [];

function dfs(arr, depth) {
  if (depth === m) {
    answer += temp.map((t) => arr[t]).join(" ");
    answer += "\n";
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    temp.push(i);

    dfs(arr, depth + 1);

    visited[i] = false;
    temp.pop();
  }
}
dfs(arr, 0);
console.log(answer);
