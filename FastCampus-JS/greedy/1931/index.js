// 회의실 배정 https://www.acmicpc.net/problem/1931

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/1931/input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);
let timeList = [];

for (let i = 0; i < n; i++) {
  timeList.push(input[i + 1].split(" ").map(Number));
}
// (1) 종료 시점 (2) 시작 시점을 우선순위로 오름차순 정렬
timeList.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let answer = 0;
let endTime = 0;
for (const time of timeList) {
  if (time[0] >= endTime) {
    // 현재 회의가 끝난 이후에 회의가 시작되는 경우 카운트
    answer += 1;
    endTime = time[1];
  }
}

console.log(answer);
