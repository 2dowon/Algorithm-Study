// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  var answer = "";

  const resultMap = new Map();

  function updateResultMapByChoice(type, score) {
    if (resultMap.has(type)) {
      resultMap.set(type, resultMap.get(type) + score);
    } else {
      resultMap.set(type, score);
    }
  }

  survey.forEach((type, index) => {
    const typeA = type[0];
    const typeB = type[1];

    const choice = choices[index];
    if (choice > 4) {
      updateResultMapByChoice(typeB, choice - 4);
    } else if (choice === 1) {
      updateResultMapByChoice(typeA, 3);
    } else if (choice === 2) {
      updateResultMapByChoice(typeA, 2);
    } else if (choice === 3) {
      updateResultMapByChoice(typeA, 1);
    }
  });

  function addResultTypeToAnswer(typeList) {
    const typeA = typeList[0];
    const typeB = typeList[1];

    if ((resultMap.get(typeA) || 0) >= (resultMap.get(typeB) || 0)) {
      answer += typeA;
    } else {
      answer += typeB;
    }
  }

  const typesList = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  typesList.forEach((typeList) => {
    addResultTypeToAnswer(typeList);
  });

  return answer;
}

// 다른 사람 풀이
function solution(survey, choices) {
  var answer = "";
  let indi = new Map();
  ["R", "T", "C", "F", "J", "M", "A", "N"].forEach((item) => indi.set(item, 0));

  choices.forEach((item, index) => {
    let [A, B] = survey[index].split("");
    if (item > 4) indi.set(B, indi.get(B) + item - 4);
    else if (item < 4) indi.set(A, indi.get(A) + 4 - item);
  });
  answer += indi.get("R") >= indi.get("T") ? "R" : "T";
  answer += indi.get("C") >= indi.get("F") ? "C" : "F";
  answer += indi.get("J") >= indi.get("M") ? "J" : "M";
  answer += indi.get("A") >= indi.get("N") ? "A" : "N";
  return answer;
}
