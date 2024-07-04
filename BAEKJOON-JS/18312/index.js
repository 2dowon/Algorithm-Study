// 시각 https://www.acmicpc.net/problem/18312

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/18312/input.txt")
  .toString()
  .split("\n");

const [n, k] = input[0].split(" ").map((i) => Number(i));

function solution(n, k) {
  let answer = 0;

  for (let hour = 0; hour < n + 1; hour++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        let time = "";
        time += hour < 10 ? `0${hour}` : `${hour}`;
        time += min < 10 ? `0${min}` : `${min}`;
        time += sec < 10 ? `0${sec}` : `${sec}`;

        if (time.includes(k)) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}

console.log(solution(n, k));
