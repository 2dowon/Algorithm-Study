// 단어 공부 https://www.acmicpc.net/problem/1157

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/1157/input.txt")
  .toString()
  .split("\n");

const word = input[0];

function solution(word) {
  // 가장 많이 사용된 알파벳을 찾는데 대소문자를 구분하지 않고, 정답을 대문자로 출력하기 때문에 대문자로 refine
  const newWord = word.toUpperCase();

  // 가장 많이 사용된 알파벳을 찾기 위해 알파벳을 key, 사용된 횟수를 value로 하는 map
  const charCountMap = {};

  for (const char of newWord) {
    if (!charCountMap[char]) {
      charCountMap[char] = 1;
    } else {
      charCountMap[char] += 1;
    }
  }

  // 가장 많이 사용된 알파벳 순으로 정렬
  const charCountList = Object.entries(charCountMap).sort(
    (a, b) => b[1] - a[1]
  );

  // 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력
  if (charCountList.length > 1 && charCountList[0][1] === charCountList[1][1]) {
    return "?";
  }

  // 가장 많이 사용된 알파벳 출력
  return charCountList[0][0];
}

console.log(solution(word));
