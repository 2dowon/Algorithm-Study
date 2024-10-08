// 박스 채우기 https://www.acmicpc.net/problem/1493

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/1493/input.txt")
  .toString()
  .split("\n");

// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) {
    i += 1;
  }
  return i - 1;
}

// length × width × height 크기의 박스
const [length, width, height] = input[0].split(" ").map(Number);
let cubes = Array(20).fill(0);

// 큐브의 종류의 개수
const n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);

  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  used *= 8;

  // 현재의 정육면체 큐브의 길이
  cur = 2 ** i;

  // 채워넣어야 할 큐브의 개수 계산
  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  // 이번 단계에서 넣을 수 있는 큐브의 개수
  let usage = Math.min(required, cubes[i]);

  res += usage;
  used += usage;
}

if (used == length * width * height) {
  // 박스를 가득 채운 경우
  console.log(res);
} else {
  // 박스를 가득 채우지 못한 경우
  console.log(-1);
}
