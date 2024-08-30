// 예산 https://www.acmicpc.net/problem/2512

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/binary search/2512/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]); // 지방의 수
const budgetList = input[1].split(" ").map(Number); // 각 지방의 예산 요청 리스트
const totalBudget = Number(input[2]); // 총 예산

const sum = budgetList.reduce((acc, cur) => acc + cur);
if (sum <= totalBudget) {
  console.log(Math.max(...budgetList));
  return;
}

let answer = 0;
let temp = parseInt(totalBudget / n);

while (answer <= totalBudget) {
  answer = 0;
  temp += 1;

  for (const budget of budgetList) {
    if (temp >= budget) {
      answer += budget;
    } else {
      answer += temp;
    }
  }
}

console.log(temp - 1);
