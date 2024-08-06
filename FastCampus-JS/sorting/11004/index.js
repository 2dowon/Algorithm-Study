// K번째 수 https://www.acmicpc.net/problem/11004

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/11004/input.txt")
  .toString()
  .split("\n");

const [n, k] = input[0].split(" ").map((n) => Number(n));

const numberList = input[1].split(" ").map((n) => Number(n));
numberList.sort((a, b) => a - b);
console.log(numberList[k - 1]);
