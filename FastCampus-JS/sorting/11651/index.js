// 좌표 정렬하기 2 https://www.acmicpc.net/problem/11651

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/11651/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

const numbers = [];
for (let i = 0; i < n; i++) {
  const [x, y] = input[i + 1].split(" ").map((n) => Number(n));
  numbers.push({ x, y });
}

numbers.sort((a, b) => a.y - b.y);
numbers.sort((a, b) => {
  if (a.y === b.y) {
    return a.x - b.x;
  }
  return 0;
});

for (const num of numbers) {
  console.log(`${num.x} ${num.y}`);
}
