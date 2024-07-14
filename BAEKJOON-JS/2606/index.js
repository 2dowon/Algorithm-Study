// 바이러스 https://www.acmicpc.net/problem/2606

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/2606/input.txt")
  .toString()
  .split("\n");

function solution(input) {
  const computerCount = Number(input[0]); // 컴퓨터의 수
  const computerPairCount = Number(input[1]); // 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수

  // 그래프 초기화
  let graph = [...new Array(computerCount + 1)].map(() => []);

  for (let i = 0; i < computerPairCount; i++) {
    const [start, end] = input[i + 2].split(" ").map((n) => Number(n));

    graph[start].push(end);
    graph[end].push(start);
  }
  /*
  [
    [],          
    [ 2, 5 ],
    [ 1, 3, 5 ], 
    [ 2 ],
    [ 7 ],       
    [ 1, 2, 6 ],
    [ 5 ],       
    [ 4 ]
  ]
  */

  // 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수
  let answer = 0;

  // 방문 정보를 저장하는 배열
  let visited = [...new Array(computerCount + 1)].fill(0);

  // 1번 컴퓨터가 웜 바이러스에 걸리는 것으로 시작
  visited[1] = 1;

  const dfs = (start) => {
    for (let end of graph[start]) {
      if (!visited[end]) {
        visited[end] = 1;
        // 바이러스에 걸렸다면 answer +1
        answer++;
        dfs(end);
      }
    }
  };

  dfs(1);

  return answer;
}

console.log(solution(input));
