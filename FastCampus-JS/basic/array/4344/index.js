// 평균은 넘겠지 https://www.acmicpc.net/problem/4344

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/array/4344/input.txt")
  .toString()
  .split("\n");

let testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++) {
  // 각각의 테스트 케이스를 확인
  let data = input[t].split(" ").map(Number);
  let n = data[0]; // 첫 번째 수는 데이터의 개수

  let summary = 0; // n개의 점수에 대하여 평균 계산
  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }

  let average = summary / n;
  let count = 0; // 점수가 평균을 넘는 학생 수 계산
  for (let i = 1; i <= n; i++) {
    if (data[i] > average) count += 1;
  }

  // 점수가 평균을 넘는 학생의 비율을 소수점 아래 셋째 자리까지 출력
  console.log(`${((count / n) * 100).toFixed(3)}%`);
}
