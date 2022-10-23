// https://school.programmers.co.kr/learn/courses/30/lessons/42747
// https://en.wikipedia.org/wiki/H-index

function solution(citations) {
  var answer = 0;

  const sortedCitations = citations.sort((a, b) => b - a);

  for (i = 0; i < citations.length; i++) {
    if (sortedCitations[i] > i) {
      answer += 1;
    } else {
      return answer;
    }
  }

  return citations.length;
}

console.log(solution[(6, 5, 5, 5, 3, 2, 1, 0)]); // 4
console.log(solution[(4, 4, 4)]); // 3
