// 좌표 압축 https://www.acmicpc.net/problem/18870

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/18870/input.txt")
  .toString()
  .split("\n");

const xList = input[1].split(" ").map((n) => Number(n));
const sortedXList = [...new Set(xList)].sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < sortedXList.length; i++) {
  myMap.set(sortedXList[i], i);
}

let answer = "";
for (const x of xList) {
  answer += myMap.get(x) + " ";
}
console.log(answer);
