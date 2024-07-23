// 2×n 타일링 2 https://www.acmicpc.net/problem/11727
// 시간 제한이 1초이고, n이 1000 이하이므로 시간 복잡도가 O(N제곱) 알고리즘까지 설계 가능

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/11727/input.txt")
  .toString()
  .split("\n");

// 2×n 크기의 직사각형
const n = Number(input[0]);

// 2×n 크기의 직사각형을 채우는 방법의 수를 저장하기 위한 리스트 초기화
const dp = new Array(n + 1).fill(0);
dp[1] = 1; // 2x1 => (2x1)
dp[2] = 3; // 2x2 => (2x2), (1x2, 1x2), (2x1, 2x1)
dp[3] = 5; // 2x3 => (2x1, 2x1, 2x1), (1x2, 1x2, 2x1), (2x1, 1x2, 1x2), (2x1, 2x2), (2x2, 2x1)

for (let i = 4; i <= n; i++) {
  // 4부터는 (2x1) 타일에 n-1의 경우의 수를 합친 것과 (2x2)와 (1x2, 1x2) 타일에 n-2의 경우의 수를 합친 것과 같다 => 즉, n-1의 경우의 수 + n-2 경우의 수는 2배를 곱해서 더한 값
  // 10007로 나눈 나머지를 출력하면 되기 때문에 10007로 나눈 값을 저장
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);
