// 내 풀이
function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((absolute, index) => {
    if (signs[index]) {
      answer += absolute;
    } else {
      answer -= absolute;
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
