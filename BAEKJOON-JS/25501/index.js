// 재귀의 귀재 https://www.acmicpc.net/problem/25501

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/25501/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const text = input[i];
  let count = 0;

  function recursion(string, left, right) {
    count += 1;
    if (left >= right) {
      return 1;
    } else if (string[left] !== string[right]) {
      return 0;
    } else {
      return recursion(string, left + 1, right - 1);
    }
  }

  function isPalindrome(text) {
    return recursion(text, 0, text.length - 1);
  }

  console.log(`${isPalindrome(text)} ${count}`);
}

// 1 2
// 1 3
// 1 3
// 0 2
// 0 1
