// 시험 성적 https://www.acmicpc.net/problem/9498

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/conditional/9498/input.txt")
  .toString()
  .split("\n");

const grade = Number(input[0]);

if (grade >= 90) {
  console.log("A");
  return;
} else if (grade >= 80) {
  console.log("B");
  return;
} else if (grade >= 70) {
  console.log("C");
  return;
} else if (grade >= 60) {
  console.log("D");
  return;
} else {
  console.log("F");
}
