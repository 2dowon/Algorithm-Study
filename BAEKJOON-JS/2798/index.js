// 블랙잭 https://www.acmicpc.net/problem/2798

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/2798/input.txt")
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const cardList = input[1].split(" ").map(Number);

let answer = 0;
for (let i = 0; i < cardList.length - 2; i++) {
  for (let j = i + 1; j < cardList.length - 1; j++) {
    for (let k = j + 1; k < cardList.length; k++) {
      const sum = cardList[i] + cardList[j] + cardList[k];
      if (sum > answer && sum <= m) {
        answer = sum;
      }
    }
  }
}
console.log(answer); // 497
