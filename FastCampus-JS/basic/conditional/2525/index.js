// 오븐 시계 https://www.acmicpc.net/problem/92525498

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/conditional/2525/input.txt")
  .toString()
  .split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);
let duration = Number(input[1].split(" ")[0]);

const newHour = parseInt((minute + duration) / 60);
if (newHour > 0) {
  hour += newHour;
  if (hour >= 24) {
    hour -= 24;
  }
}
minute = (minute + duration) % 60;

console.log(`${hour} ${minute}`);
