// 피보나치 https://www.acmicpc.net/problem/9009

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/9009/input.txt")
  .toString()
  .split("\n");

let t = Number(input[0]);

// 최댓값이 1000000000 정도 되는 피보나치 수열을 미리 만들기
// 46번째 피보나치 수 = 1134903170
const fibonacciList = new Array(46).fill(0);
fibonacciList[1] = 1;
for (let i = 2; i < 46; i++) {
  fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
}

for (let i = 0; i < t; i++) {
  let answer = [];
  let num = Number(input[i + 1]);

  // 피보나치 수열 중 만들고자 하는 숫자와 가장 가까우면서 큰 값부터 먼저 사용하기
  while (num > 0) {
    for (let j = 0; j < fibonacciList.length; j++) {
      if (fibonacciList[j] > num) {
        num -= fibonacciList[j - 1];
        answer.push(fibonacciList[j - 1]);
        break;
      }
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.join(" "));
}
