// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  let answer = "";

  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  sortedParticipant.forEach((name, index) => {
    if (name !== sortedCompletion[index] && answer === "") {
      return (answer = name);
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
