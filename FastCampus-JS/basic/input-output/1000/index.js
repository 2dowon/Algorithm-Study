// A + B https://www.acmicpc.net/problem/1000

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/input-output/1000/input.txt")
  .toString()
  .split("\n");

const [A, B] = input[0].split(" ").map((n) => Number(n));

console.log(A + B);
