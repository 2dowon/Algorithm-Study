// 주유소 https://www.acmicpc.net/problem/13305

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/13305/input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

// 주유 비용(cost) 배열의 값을 내림차순이 되도록 변환
// [5, 2, 4, 1] -> [5, 2, 2, 1]
let minCost = cost[0];
for (let i = 0; i < n; i++) {
  // 해당 도시의 주유 비용과 최저 주유 비용을 비교해 minCost 업데이트
  minCost = Math.min(minCost, cost[i]);
  // 자기보다 뒤에 있는 비싼 주유소에 대해서 미리 결제하기 위해 해당 도시의 주유 비용도 최저 주유 비용인 minCost로 업데이트
  cost[i] = minCost;
}

// 도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  // JavaScript에서 큰 정수를 처리할 때는 BigInt 사용
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}
console.log(String(answer)); // 뒤에 붙는 'n' 제거
