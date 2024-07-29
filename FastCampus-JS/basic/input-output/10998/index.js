// A x B https://www.acmicpc.net/problem/10998

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/input-output/10998/input.txt")
  .toString()
  .split("\n");

const [A, B] = input[0].split(" ").map((n) => Number(n));

console.log(A * B);
