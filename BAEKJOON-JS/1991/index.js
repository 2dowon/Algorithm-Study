// 트리 순회 https://www.acmicpc.net/problem/1991

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/1991/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);
let nodes = [];
for (let i = 0; i < n; i++) {
  nodes.push(input[i + 1].split(" "));
}
/*
[
  [ 'A', 'B', 'C' ],
  [ 'B', 'D', '.' ],
  [ 'C', 'E', 'F' ],
  [ 'E', '.', '.' ],
  [ 'F', '.', 'G' ],
  [ 'D', '.', '.' ],
  [ 'G', '.', '.' ]
]
*/

const trees = nodes.reduce((acc, [node, left, right]) => {
  acc[node] = { left, right };
  return acc;
}, {});
/*
{
  A: { left: 'B', right: 'C' },
  B: { left: 'D', right: '.' },
  C: { left: 'E', right: 'F' },
  E: { left: '.', right: '.' },
  F: { left: '.', right: 'G' },
  D: { left: '.', right: '.' },
  G: { left: '.', right: '.' }
}
*/

// 전위 순회
const traversePreOrder = (node) => {
  if (node === ".") {
    return "";
  }
  const { left, right } = trees[node];
  return node + traversePreOrder(left) + traversePreOrder(right);
};

// 중위 순회
const traverseInOrder = (node) => {
  if (node === ".") {
    return "";
  }
  const { left, right } = trees[node];
  return traverseInOrder(left) + node + traverseInOrder(right);
};

// 후위 순회
const traversePostOrder = (node) => {
  if (node === ".") {
    return "";
  }
  const { left, right } = trees[node];
  return traversePostOrder(left) + traversePostOrder(right) + node;
};

console.log(traversePreOrder("A")); // ABDCEFG
console.log(traverseInOrder("A")); // DBAECFG
console.log(traversePostOrder("A")); // DBEGFCA
