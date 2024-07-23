// 돌 게임 https://www.acmicpc.net/problem/9655
// 시간 제한이 1초이고, n이 1000 이하이므로 시간 복잡도가 O(N제곱) 알고리즘까지 설계 가능

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/9655/input.txt")
  .toString()
  .split("\n");

// 돌의 갯수
const N = Number(input[0]);

// 돌의 갯수에 따라 이기는 사람을 저장하는 리스트를 초기화
const winnerNameList = new Array(N + 1).fill("");

// 돌은 1개 혹은 3개 가져갈 수 있기 때문에 3번째 순서까지 이기는 사람의 이름을 미리 저장
winnerNameList[1] = "SK";
winnerNameList[2] = "CY";
winnerNameList[3] = "SK";

const getWinnerName = (n) => {
  // 게임은 항상 "SK"가 먼저 시작하기 때문에 돌이 i개가 있을 때 돌을 1개 가져가거나 3개를 가져가거나 모두 "SK"가 이겼다면 마지막으로 돌을 가져가는 것은 "CY"이므로 그 게임은 "CY"가 이기게 된다
  // 그 외에는 모두 "SK"가 이긴다
  for (let i = 3; i < n + 1; i++) {
    winnerNameList[i] =
      winnerNameList[i - 1] === "SK" && winnerNameList[i - 3] === "SK"
        ? "CY"
        : "SK";
  }

  return winnerNameList[n];
};

console.log(getWinnerName(N));
