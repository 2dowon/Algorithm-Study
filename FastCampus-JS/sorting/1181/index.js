// 단어 정렬 https://www.acmicpc.net/problem/1181

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/1181/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

const wordSet = new Set();
for (let i = 0; i < n; i++) {
  wordSet.add(input[i + 1]);
}
const wordList = Array.from(wordSet);

wordList.sort((a, b) => a.length - b.length);
wordList.sort((a, b) => {
  if (a.length === b.length) {
    if (b > a) return -1;
    else if (b < a) return 1;
    else return 0;
  }
  return 0;
});

for (const word of wordList) {
  console.log(word);
}
