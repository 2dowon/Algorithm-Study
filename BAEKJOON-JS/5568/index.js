// 카드 놓기 https://www.acmicpc.net/problem/5568

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/5568/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]); // 카드의 갯수
const k = Number(input[1]); // 선택할 카드의 수
const numberList = [];

for (let i = 0; i < n; i++) {
  numberList.push(Number(input[i + 2]));
}

function solution(n, k, numberList) {
  const dfs = (num, idx, visited) => {
    if (idx === k) {
      numStore.add(num);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }

      visited[i] = true;
      dfs(num + numberList[i], idx + 1, visited);
      visited[i] = false;
    }
  };

  const numStore = new Set();
  dfs("", 0, Array(n).fill(false));

  return numStore.size;
}

console.log(solution(n, k, numberList));
