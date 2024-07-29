// 문자열 반복 https://www.acmicpc.net/problem/2675

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/string/2675/input.txt")
  .toString()
  .split("\n");

const T = Number(input[0]); // 테스트 케이스의 개수
let R, S; // R : 반복 횟수, S : 문자열

for (let i = 1; i <= T; i++) {
  [R, S] = input[i].split(" ");

  let answer = "";
  for (const s of S) {
    answer += s.repeat(R);
  }
  console.log(answer);

  answer = "";
}
