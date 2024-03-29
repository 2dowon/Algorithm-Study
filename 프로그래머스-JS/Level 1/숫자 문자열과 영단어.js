// https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function solution(s) {
  const answer = s
    .replace(/zero/gi, "0")
    .replace(/one/gi, "1")
    .replace(/two/gi, "2")
    .replace(/three/gi, "3")
    .replace(/four/gi, "4")
    .replace(/five/gi, "5")
    .replace(/six/gi, "6")
    .replace(/seven/gi, "7")
    .replace(/eight/gi, "8")
    .replace(/nine/gi, "9");

  return Number(answer);
}

// 다른 사람 풀이
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
