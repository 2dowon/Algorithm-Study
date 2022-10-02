// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  var answer = [];

  const totalCount = brown + yellow;
  const divisorNumber = Array.from(
    { length: totalCount },
    (v, i) => i + 1
  ).filter((num) => totalCount % num === 0);
  const lengthOfDivisorNumber = divisorNumber.length;

  const tempAnswerList = [];
  for (let i = 1; i <= lengthOfDivisorNumber / 2; i++) {
    if (divisorNumber[i - 1] > 2) {
      tempAnswerList.push([
        divisorNumber[lengthOfDivisorNumber - i],
        divisorNumber[i - 1],
      ]);
    }

    if (!Number.isInteger(lengthOfDivisorNumber / 2)) {
      const halfLengthOfDivisorNumber = Math.floor(lengthOfDivisorNumber / 2);
      tempAnswerList.push([
        divisorNumber[halfLengthOfDivisorNumber],
        divisorNumber[halfLengthOfDivisorNumber],
      ]);
    }
  }

  tempAnswerList.forEach((tempAnswer) => {
    const numOfBrown = (tempAnswer[0] + tempAnswer[1]) * 2 - 4;
    if (numOfBrown === brown) {
      answer = tempAnswer;
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}
