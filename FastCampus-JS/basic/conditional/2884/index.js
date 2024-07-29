// 알람 시계 https://www.acmicpc.net/problem/2884

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/conditional/2884/input.txt")
  .toString()
  .split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

if (minute < 45) {
  minute = 60 - (45 - minute);
  if (hour > 0) {
    hour -= 1;
  } else {
    hour = 23;
  }
} else {
  minute -= 45;
}
console.log(`${hour} ${minute}`);
