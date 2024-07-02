// 분해합 https://www.acmicpc.net/problem/2231

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/2231/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);
let found = false;

const getNewNumber = (number, numbers) => {
  return numbers.reduce((acc, current) => acc + current, number);
};

for (let i = 0; i < n; i++) {
  const newNumber = getNewNumber(i, i.toString().split("").map(Number));

  if (newNumber === n) {
    console.log(i);
    found = true;
    break;
  }
}

if (!found) {
  console.log(0);
}

// 198
