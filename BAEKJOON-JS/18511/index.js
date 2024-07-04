// 큰 수 구성하기 https://www.acmicpc.net/problem/18511

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/18511/input.txt")
  .toString()
  .split("\n");

const [n, k] = input[0].split(" ").map((i) => Number(i));
const numberList = input[1].split(" ").map((i) => Number(i));

function solution(n, k, numberList) {
  const dfs = (makeNum, idx) => {
    if (idx === String(n).length) {
      return;
    }

    for (let i = 0; i < k; i++) {
      makeNum.push(numberList[i]);
      numStore.push(Number(makeNum.join("")));
      dfs(makeNum, idx + 1);
      makeNum.pop();
    }
  };

  let numStore = [];
  dfs([], 0);
  numStore = numStore.sort((a, b) => a - b);

  for (let i = 0; i < numStore.length; i++) {
    if (numStore[i] > n) {
      return numStore[i - 1];
    }
  }

  return numStore[numStore.length - 1];
}

console.log(solution(n, k, numberList));
