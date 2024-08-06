// 좌표 정렬하기 https://www.acmicpc.net/problem/11650

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/11650/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

const numbers = [];
for (let i = 0; i < n; i++) {
  const [x, y] = input[i + 1].split(" ").map((n) => Number(n));
  numbers.push({ x, y });
}

numbers.sort((a, b) => a.x - b.x);
numbers.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  }
  return 0;
});

for (const num of numbers) {
  console.log(`${num.x} ${num.y}`);
}
