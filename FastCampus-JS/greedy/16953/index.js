// A -> B https://www.acmicpc.net/problem/16953

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/16953/input.txt")
  .toString()
  .split("\n");

let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let count = 1;

while (b !== a && !flag) {
  if (b % 2 === 0) {
    b /= 2;
    count += 1;

    if (a > b) {
      flag = true;
    }
  } else {
    const bString = String(b);
    if (bString[bString.length - 1] === "1") {
      b = Number(bString.slice(0, bString.length - 1));
      count += 1;
    } else {
      flag = true;
    }
  }
}

console.log(a === b ? count : -1);
