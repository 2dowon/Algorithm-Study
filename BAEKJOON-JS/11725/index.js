// 트리의 부모 찾기 https://www.acmicpc.net/problem/11725

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/11725/input.txt")
  .toString()
  .split("\n");

function solution(input) {
  const n = Number(input[0]); // 노드의 개수

  // 그래프 초기화
  let graph = [...new Array(n + 1)].map(() => []);

  // 그래프 저장
  for (let i = 1; i < n; i++) {
    const [start, end] = input[i].split(" ").map(Number);

    graph[start].push(end);
    graph[end].push(start);
  }
  /*
  [
    [],          
    [ 6, 4 ],
    [ 4 ],       
    [ 6, 5 ],
    [ 1, 2, 7 ], 
    [ 3 ],
    [ 1, 3 ],    
    [ 4 ]
  ]
  */

  // 방문 정보를 저장하는 배열
  const visited = [...new Array(n + 1)].fill(0);
  // 부모 노드 정보를 저장하는 배열
  const parentNodes = Array.from({ length: n + 1 }).fill(null);

  const dfs = (vertex) => {
    // 이미 방문했다면 리턴
    if (visited[vertex]) {
      return;
    }

    // 이미 방문하지 않았다면 방문 처리
    visited[vertex] = 1;

    // 루트 노드의 자식 노드들을 순회하면서, 각 자식 노드의 번호에 해당하는 그래프 인덱스에 접근해, 자식 노드와 연결되어 있지만 아직 방문하지 않은!visited[vertex], 즉 탐색 중인 노드의 부모 노드가 아닌 것들은 탐색 중인 노드의 자식 노드로 판단
    graph[vertex].forEach((child) => {
      if (!visited[child]) {
        parentNodes[child] = vertex;
      }

      dfs(child);
    });
  };

  dfs(1);

  // 결과 출력
  let answer = "";
  for (let i = 2; i < parentNodes.length; i++) {
    answer += parentNodes[i] + "\n";
  }

  return answer;
}

console.log(solution(input));
