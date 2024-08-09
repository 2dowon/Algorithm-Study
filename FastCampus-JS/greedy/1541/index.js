// 잃어버린 괄호 https://www.acmicpc.net/problem/1541

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/greedy/1541/input.txt")
  .toString()
  .split("\n");

// 뺄셈(-) 연산자를 기준으로 나누어 여러 그룹 만들기
const formulas = input[0].split("-");
let answer = 0;

for (let i = 0; i < formulas.length; i++) {
  // 각 그룹 내부에서 덧셈(+) 연산 적용
  let cur = formulas[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);

  if (i == 0) {
    // 첫 번째 그룹은 항상 덧셈(+)
    answer += cur;
  } else {
    // 두 번째 그룹부터 뺄셈(-)
    answer -= cur;
  }
}

console.log(answer);
