// 나머지 https://www.acmicpc.net/problem/3052

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/array/3052/input.txt")
  .toString()
  .split("\n");

let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

// 원소를 하나씩 확인하며
for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42); // 42로 나눈 나머지를 집합의 원소로 삽입
}

// 집합에 포함된 원소의 개수 출력
console.log(mySet.size);
