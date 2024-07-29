// 빠른 A+B https://www.acmicpc.net/problem/15552

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/iteration/15552/input.txt")
  .toString()
  .split("\n");

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let testCase = Number(input[0]);
let answer = "";

// 빠르게 출력하기 위해 하나의 문자열 변수에 정보를 담은 뒤에 한꺼번에 문자열을 출력
for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + "\n";
}

console.log(answer);
