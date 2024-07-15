// 꽃길 https://www.acmicpc.net/problem/14620

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/14620/input.txt")
  .toString()
  .split("\n");

function solution(input) {
  const n = Number(input[0]); // n개의 줄에 n개씩 화단

  const dx = [-1, 1, 0, 0]; // 좌,우,상,하 x좌표 탐색
  const dy = [0, 0, 1, -1]; // 좌,우,상,하 y좌표 탐색

  const graph = []; // 화단
  for (let i = 0; i < n; i++) {
    graph.push(input[i + 1].split(" ").map((n) => Number(n)));
  }

  // 방문 배열을 0으로 초기화
  const visited = Array.from(Array(n), () => Array(n).fill(0));

  // 최소 비용을 찾기 위해 일단 제일 큰 값을 기본값으로 설정
  let answer = Number.MAX_SAFE_INTEGER;

  // 꽃을 심을 수 있는 땅인지 확인하는 함수
  const check = (x, y, visited) => {
    if (visited[y][x] !== 0) {
      return false;
    }

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      // 화단 밖으로 꽃잎이 나가게 된다면 꽃을 심을 수 없음
      if (ny < 0 || nx < 0 || ny >= n || nx >= n) {
        return false;
      }
      // 다른 꽃잎과 닿는다면 꽃을 심을 수 없음
      if (visited[ny][nx] !== 0) {
        return false;
      }
    }

    return true;
  };

  // 꽃을 심었을 때 비용을 구하는 함수
  const plant_seed = (x, y, visited) => {
    // 씨앗을 심은 곳을 방문 처리
    visited[y][x] = 1;

    // 씨앗을 심은 곳의 땅을 대여
    let sum = graph[y][x];

    // 꽃잎이 핀 모양을 기준으로 대여
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      // 꽃잎이 핀 곳을 방문 처리
      visited[ny][nx] = 1;
      // 꽃잎이 핀 곳의 땅을 대여
      sum += graph[ny][nx];
    }

    // 꽃 하나당 총 5평의 가격 합을 리턴
    return sum;
  };

  // 꽃을 심지 않도록 리셋하는 함수
  const reset_seed = (x, y, visited) => {
    // 씨앗을 심었던 곳을 다시 미방문 처리
    visited[y][x] = 0;

    // 꽃잎이 핀 모양을 기준으로 다시 미방문 처리
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      visited[ny][nx] = 0;
    }
  };

  // dfs
  const go = (cost, count, visited) => {
    // 최소 비용을 구해야 하기 때문에 현재 비용(cost)이 이전 비용(answer)보다 크다면 리턴
    if (cost >= answer) {
      return;
    }

    // 총 3개의 꽃을 심은
    if (count === 3) {
      // 3개의 꽃을 모두 심었다면 현재 비용(cost)과 이전 비용(answer)을 비교해서 더 적은 비용을 저장
      answer = Math.min(answer, cost);
      return;
    }

    // 밭은 모든 곳을 (0,0)부터 시작해서 방문
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 꽃을 심을 수 있는지 확인
        if (check(i, j, visited)) {
          // 꽃을 심을 수 있다면 해당 위치에 꽃을 심었을 때 비용 구하기
          const cur_cost = plant_seed(i, j, visited);

          // 다음 꽃을 심기 위해 다음 땅으로 이동
          go(cost + cur_cost, count + 1, visited);

          // 최소 비용이 아니거나 3개의 꽃을 모두 심어서 리턴할 경우, 해당 위치의 꽃을 제거
          reset_seed(i, j, visited);
        }
      }
    }
  };

  go(0, 0, visited);

  return answer;
}

console.log(solution(input));
