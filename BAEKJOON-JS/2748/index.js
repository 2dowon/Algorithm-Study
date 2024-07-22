// 피보나치 수 2 https://www.acmicpc.net/problem/2748

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/2748/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

// 계산해야 하는 피보나치 수의 길이만큼 리스트를 0으로 초기화
const fibonacciList = new Array(n + 1).fill(0);
// 1번째 피보나치 수는 1로 설정
fibonacciList[1] = 1;

// 0번째와 1번째 피보나치 수는 알고 있으므로 2부터 반복 시작
for (let i = 2; i < n + 1; i++) {
  // 피보나치 수를 구하는 공식인 Fn = Fn-1 + Fn-2로 피보나치 수를 구하는데, 이 때 이미 구했던 피보나치 수의 값은 다시 계산하지 않고 fibonacciList에서 꺼내서 사용
  // 90 피보나치 수는 너무 커서 js의 int로는 정확한 수를 표시할 수 없기 때문에 'BigInt' 객체를 사용해야 함
  fibonacciList[i] =
    BigInt(fibonacciList[i - 1]) + BigInt(fibonacciList[i - 2]);
}

// BigInt 값을 진수로 표현시켜주는 내장 toString 메서드를 사용하여 반환
console.log(fibonacciList[n].toString());

// 한 번 계산했던 피보나치 수를 저장하고 있기 때문에 시간복잡도는 O(n) 선형 시간
// 시간 제한이 1초이므로 n이 10,000,000 이하일 때까지 해당 알고리즘으로 풀 수 있음
