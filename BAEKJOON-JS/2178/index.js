// 미로 탐색 https://www.acmicpc.net/problem/2178

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/2178/input.txt")
  .toString()
  .split("\n");

function solution(input) {
  // N개의 줄에는 M개의 정수로 미로
  const [N, M] = input[0].split(" ").map((n) => Number(n));

  // 그래프 초기화
  const graph = [];
  // 그래프 저장
  for (let i = 0; i < N; i++) {
    graph.push(input[i + 1].split("").map((n) => Number(n)));
  }

  // 방문 정보를 저장하는 배열
  const visited = Array.from({ length: N }, () => Array(M).fill(0));

  function bfs(x, y) {
    // 현재 위치로부터 상하좌우 조회를 위한 dx, dy 배열
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    const queue = [];
    queue.push([x, y]);

    visited[x][y] = 1;

    while (queue.length) {
      // 큐는 FIFO이므로, 맨 앞부터 꺼낸다.
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        // (nx, ny)는 이동 가능성이 있는 좌표
        const [nx, ny] = [x + dx[i], y + dy[i]];

        // 미로를 벗어나는 좌표는 제외
        if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
          continue;
        }

        // 길이 있고, 방문하지 않았다면 방문
        if (graph[nx][ny] && !visited[nx][ny]) {
          // (x,y)의 값이 (x,y)까지 최단경로에 해당한다.
          visited[nx][ny] = visited[x][y] + 1;
          // BFS(너비 우선)로 현재 위치에서 갈 수 있는 좌표를 모두 큐에 넣어준다.
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);

  return visited[N - 1][M - 1];
}

console.log(solution(input));
