// 그룹 단어 체커 https://www.acmicpc.net/problem/1316

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/basic/string/1316/input.txt")
  .toString()
  .split("\n");

const N = Number(input[0]); // 단어의 개수

// 그룹 단어인지 체크하는 함수
function checkGroupWord(word) {
  let setWord = new Set(word[0]);
  for (let i = 0; i < word.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (word[i] != word[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면
      if (setWord.has(word[i + 1])) {
        return false;
      } else {
        setWord.add(word[i + 1]);
      }
    }
  }
  return true;
}

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += Number(checkGroupWord(input[i + 1]));
}

console.log(answer);
