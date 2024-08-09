// 동전 0 https://www.acmicpc.net/problem/11047

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/11047/input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coinList = [];

for (let i = 0; i < N; i++) {
  coinList.push(Number(input[i + 1]));
}
coinList.sort((a, b) => b - a);

let price = K;
let count = 0;

while (price > 0) {
  for (const coin of coinList) {
    if (price >= coin) {
      price -= coin;
      count += 1;

      break;
    }
  }
}

console.log(count);
