// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

function solution(n, words) {
  let answerWordIndex = -1;

  const beforeWords = [];

  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i];
    const nextWord = words[i + 1];
    beforeWords.push(word);

    if (word[word.length - 1] !== nextWord[0]) {
      answerWordIndex = i + 2;
      break;
    }

    if (beforeWords.includes(nextWord)) {
      answerWordIndex = i + 2;
      break;
    }
  }

  if (answerWordIndex < 0) {
    return [0, 0];
  } else {
    return [
      answerWordIndex % n === 0 ? n : answerWordIndex % n,
      Math.ceil(answerWordIndex / n),
    ];
  }

  return answer;
}

// 다른 사람 풀이
function solution(n, words) {
  var fail_i = -1;
  for (var i = 1; i < words.length; i++) {
    var val = words[i];
    // 전단계의 끝말과 현단계 첫말이 다를 경우
    if (
      words[i - 1].substring(words[i - 1].length - 1) != val.substring(0, 1)
    ) {
      fail_i = i;
      break;
    }
    // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
    // 현재 인덱스와 맞지 않을 경우 중복된 값
    if (words.indexOf(val) != i) {
      fail_i = i;
      break;
    }
  }

  if (fail_i == -1) return [0, 0];

  var no = (fail_i % n) + 1;
  var turn = Math.floor(fail_i / n) + 1;

  return [no, turn];
}
