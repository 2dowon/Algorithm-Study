// 토마토 https://www.acmicpc.net/problem/7569

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/7569/input.txt")
  .toString()
  .split("\n");

function solution(input) {
  // M : 가로, N : 세로, H : 상자의 수
  const [M, N, H] = input[0].split(" ").map((v) => +v);

  // 상자를 3차원 배열로 쌓음
  const boxes = input.slice(1).reduce((acc, v, i) => {
    const layer = Math.floor(i / N);
    if (!acc[layer]) {
      acc[layer] = [];
    }
    acc[layer].push(v.split(" ").map((v) => +v));
    return acc;
  }, []);
  /* 
  [
    [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
    [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ] ],
    [ [ 0 ] ]
  ]
  */

  const offsetX = [-1, 1, 0, 0, 0, 0];
  const offsetY = [0, 0, -1, 1, 0, 0];
  const offsetZ = [0, 0, 0, 0, -1, 1];

  const queue = []; // 이미 익어 있는 토마토들을 담을 배열
  let zeroCount = 0; // 아직 익지 않은 토마토의 개수
  let output = 0; // 토마토가 모두 익을 때까지 걸리는 일 수

  // 먼저 모든 토마토 상자를 순회하면서 처음에 이미 익어 있는 토마토들을 모두 queue에 담고, 아직 익지 않은 토마토의 개수를 zeroCount에 저장
  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (boxes[z][y][x] === 1) {
          queue.push({ x, y, z, count: 0 });
        } else if (boxes[z][y][x] === 0) {
          zeroCount++;
        }
      }
    }
  }
  // [ { x: 2, y: 1, z: 1, count: 0 } ]

  for (let i = 0; i < queue.length; i++) {
    const { x, y, z, count } = queue[i];

    for (let i = 0; i < 6; i++) {
      const nx = x + offsetX[i];
      const ny = y + offsetY[i];
      const nz = z + offsetZ[i];
      if (
        nz >= 0 &&
        nz < H &&
        ny >= 0 &&
        ny < N &&
        nx >= 0 &&
        nx < M &&
        boxes[nz][ny][nx] === 0
      ) {
        boxes[nz][ny][nx] = 1;
        queue.push({ x: nx, y: ny, z: nz, count: count + 1 });
        zeroCount--;
        output = Math.max(output, count + 1);
      }
    }
  }

  if (zeroCount) {
    return -1;
  } else {
    return output;
  }
}

console.log(solution(input));
