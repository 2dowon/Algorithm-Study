// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let temporaryString = s;
  let numberOfRemovedZero = 0;
  let numberOfStage = 0;

  while (temporaryString !== "1") {
    numberOfStage += 1;

    const numberOfZero = temporaryString.match(/0/g)?.length ?? 0;
    numberOfRemovedZero += numberOfZero;

    temporaryString = temporaryString.replaceAll("0", "").length.toString(2);
  }

  return [numberOfStage, numberOfRemovedZero];
}

// 다른 사람 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
