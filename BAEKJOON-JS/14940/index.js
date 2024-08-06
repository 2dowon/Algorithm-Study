// 쉬운 최단거리 https://www.acmicpc.net/problem/14940

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/14940/input.txt")
  .toString()
  .split("\n");

// N : 세로의 크기, M : 가로의 크기
const [N, M] = input[0].split(" ").map((n) => Number(n));

// 목표 지점 2는 1개, 0은 못가는 땅, 1은 갈 수 있는 땅
// 목표 지점을 시작점으로 각 지점마다 bfs를 돌면서 거리 기록
let startX, startY;
const graph = [];
for (let y = 0; y < N; y++) {
  const numbers = input[y + 1].split(" ").map((n) => Number(n));
  graph.push(numbers);
  for (let x = 0; x < M; x++) {
    if (numbers[x] === 2) {
      startX = x;
      startY = y;
    }
  }
}

// 목표 지점까지의 거리를 저장하는 배열
const answer = Array.from({ length: N }, () => Array(M).fill(0));
// 방문 정보를 저장하는 배열
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const bfs = (x, y) => {
  // 현재 위치로부터 상하좌우 조회를 위한 dx, dy 배열
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  // 시작 지점의 x,y좌표를 queue에 담기
  const queue = [[x, y]];
  visited[y][x] = 1;

  while (queue.length) {
    // queue는 FIFO이므로, 맨 앞부터 꺼내기
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      // (nx, ny)는 이동 가능성이 있는 좌표
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (
        // 지도를 벗어나지 않으면서
        nx >= 0 &&
        ny >= 0 &&
        nx < M &&
        ny < N &&
        // 갈 수 있는 땅이고
        graph[ny][nx] === 1 &&
        // 방문하지 않았다면
        !visited[ny][nx]
      ) {
        // 방문 처리
        visited[ny][nx] = true;
        // 방금 방문한 곳의 거리는 이전에 방문한 곳으로부터 1만큼 더 이동한 곳이므로 이전에 방문한 곳으로부터 +1 하기
        answer[ny][nx] = answer[curY][curX] + 1;

        // BFS(너비 우선)로 현재 위치에서 갈 수 있는 좌표를 queue에 넣어주기
        queue.push([nx, ny]);
      }
    }
  }
};

answer[startX][startY] = 0;
bfs(startX, startY);

// 정답 출력
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    // 방문하지 않았는데 갈 수 있는 땅이라면 -1로 처리
    if (!visited[y][x] && graph[y][x] === 1) {
      answer[y][x] = -1;
    }
  }
  console.log(answer[y].join(" "));
}
