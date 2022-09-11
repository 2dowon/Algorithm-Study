// https://school.programmers.co.kr/learn/courses/30/lessons/12951#
function solution(s) {
  let answer = "";

  const wordList = s.split(" ");

  wordList.map((word, index) => {
    if (word.length === 1) {
      answer += word.toUpperCase();
    } else if (word.length > 1) {
      const lowerCaseWord = word.toLowerCase();
      const firstWord = lowerCaseWord[0].toUpperCase();

      answer += firstWord;
      answer += lowerCaseWord.slice(1, lowerCaseWord.length);
    }

    if (index + 1 < wordList.length) {
      answer += " ";
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
