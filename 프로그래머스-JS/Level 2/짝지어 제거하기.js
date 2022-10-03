// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 효율성 테스트를 통과하지 못하는 풀이 (처음 내가 생각한 로직)
function solution(s) {
  const strArr = s.split("");

  for (let i = 0; i < strArr.length - 1; i++) {
    if (strArr[i] === strArr[i + 1]) {
      strArr.splice(i, 2);
      i = -1;
    }
  }

  return strArr.length === 0 ? 1 : 0;
}

// 스택 구조 활용을 통해 효율성 테스트를 통과
function solution(s) {
  const stack = [];

  // s의 갯수가 홀수라면 절대 모두 제거될 수 없으므로 얼리 리턴
  if (s.length % 2 != 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
