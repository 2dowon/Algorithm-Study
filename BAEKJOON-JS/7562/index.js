// 나이트의 이동 https://www.acmicpc.net/problem/7562

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/7562/input.txt")
  .toString()
  .split("\n");

const testCaseCount = Number(input[0]);
// 시작 지점, 목표 지점, 체스판 한 변의 길이, 방문 체크할 배열
let startX, startY, goalX, goalY, l, visited;

// 나이트가 이동할 수 있는 총 8방향 조회를 위한 dx, dy 배열
const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const dy = [2, 1, -1, -2, 2, 1, -1, -2];

const bfs = () => {
  // 시작 지점의 x,y좌표와 이동 횟수를 카운트할 이동한 칸 수 초기값 0을 queue에 담기
  const queue = [[startX, startY, 0]];

  while (queue.length) {
    // queue는 FIFO이므로, 맨 앞부터 꺼내기
    const [curX, curY, move] = queue.shift();

    // 현재 위치가 목적지 좌표와 같아지면 move(이동한 칸 수) 반환
    if (curX === goalX && curY === goalY) {
      return move;
    }

    for (let i = 0; i < 8; i++) {
      // (nx, ny)는 이동 가능성이 있는 좌표
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      // 체스판을 벗어나지 않으면서 방문하지 않았다면
      if (nx >= 0 && ny >= 0 && nx < l && ny < l && !visited[nx][ny]) {
        // 방문 처리
        visited[nx][ny] = true;

        // BFS(너비 우선)로 현재 위치에서 갈 수 있는 좌표와 move(이동한 칸 수) +1 하여 모두 queue에 넣어주기
        queue.push([nx, ny, move + 1]);
      }
    }
  }
};

for (let i = 0; i < testCaseCount; i++) {
  l = Number(input[3 * i + 1]);
  [startX, startY] = input[3 * i + 2].split(" ").map((n) => Number(n));
  [goalX, goalY] = input[3 * i + 3].split(" ").map((n) => Number(n));

  // 방문 정보를 저장하는 배열
  visited = Array.from({ length: l }, () => Array(l).fill(false));

  console.log(bfs());
}
