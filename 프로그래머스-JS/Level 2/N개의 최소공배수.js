// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function getLCM(a, b) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = getLCM(answer, arr[i]);
  }
  return answer;
}

// 다른 사람 풀이
var gcd = (a, b) => (b % a === 0 ? a : gcd(b % a, a));
var lcm = (a, b) => (a * b) / gcd(a, b);
var nlcm = (num) => num.sort().reduce((a, b) => lcm(a, b));
