// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  const lengthOfS = s.length;
  if (lengthOfS % 2 === 1) {
    return 0;
  }
  let answer = 0;

  for (let i = 0; i < lengthOfS; i++) {
    let str = s.slice(i) + s.slice(0, i);

    const stack = [];
    let flag = 1;

    for (let n of str) {
      if (n === "(" || n === "{" || n === "[") {
        stack.push(n);
      } else {
        const bracket = stack.pop();
        if (n === ")" && bracket === "(") {
          continue;
        } else if (n === "}" && bracket === "{") {
          continue;
        } else if (n === "]" && bracket === "[") {
          continue;
        }

        flag = 0;
        break;
      }
    }

    if (flag) {
      answer++;
    }
  }
  return answer;
}
