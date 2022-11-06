// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  var answer = [];
  const sList = s
    .split("},")
    .map((s) => s.replaceAll("{", "").replaceAll("}", ""));

  const sortedSList = sList.sort((a, b) => {
    return a.length - b.length;
  });

  sortedSList.forEach((s) => {
    s.split(",").forEach((s) => {
      if (!answer.includes(Number(s))) {
        answer.push(Number(s));
      }
    });
  });

  return answer;
}

// 다른 사람 풀이 1
const tupleFrom = (str) =>
  str
    .slice(2, -2)
    .split("},{")
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce(
      (acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))],
      []
    );

const toNumbers = (str) => str.split(",").map((it) => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);

// 다른 사람 풀이 2
function solution(s) {
  let answer = [];
  let newArr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  newArr.sort((a, b) => {
    return a.length - b.length;
  });
  let temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }
  answer = [...new Set(temp)];
  return answer;
}
