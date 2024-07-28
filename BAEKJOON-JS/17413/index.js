// 단어 뒤집기 2 https://www.acmicpc.net/problem/17413

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/17413/input.txt")
  .toString()
  .split("\n");

let S = input[0];

let answer = "";
let tempWord = "";

let isTag = false;
let isWord = true;

// 단어를 뒤집어서 리턴하는 함수
const getReversedWord = (word) => {
  let reversedWork = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWork += word[i];
  }

  return reversedWork;
};

for (let i = 0; i < S.length; i++) {
  const s = S[i];

  // 태그의 시작
  if (s === "<") {
    // 태그가 시작됐으므로 단어는 이제 아님
    isWord = false;
    // 태그가 시작될 때 임시 저장한 단어(tempWord)가 있다면 뒤집어서 answer에 추가
    answer += getReversedWord(tempWord);
    // 임시 저장한 단어 초기화
    tempWord = "";

    isTag = true;
    // 태그 시작 표시인 "<"를 answer에 추가
    answer += "<";
    continue;
  }

  // 태그의 끝
  if (s === ">") {
    isTag = false;
    isWord = true;

    // 태그 끝 표시인 ">"를 answer에 추가
    answer += ">";
    continue;
  }

  // 태그가 아니고, 단어이면서 공백이 들어오면 하나의 단어가 끝났기 때문에 단어를 뒤집어서 answer에 추가 & 임시 저장한 단어 초기화
  if (!isTag && isWord && s === " ") {
    answer += getReversedWord(tempWord);
    answer += " ";
    tempWord = "";
    continue;
  }

  // 태그라면 뒤집을 필요가 없으므로 바로 answer에 추가
  if (isTag) {
    answer += s;
  }
  // 단어라면 단어가 완성된 후 뒤집어야 하므로 tempWord에 추가
  if (isWord) {
    tempWord += s;
  }

  // 만약 마지막 글자인데, 임시 저장한(tempWord)가 있다면 뒤집어서 answer에 추가
  if (i === S.length - 1 && tempWord !== "") {
    answer += getReversedWord(tempWord);
  }
}

console.log(answer);
