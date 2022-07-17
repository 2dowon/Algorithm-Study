//https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let answer = [];

  numbers.forEach((number, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      answer.push(number + numbers[i]);
    }
  });

  answer = Array.from(new Set(answer)).sort((a, b) => a - b);

  return answer;
}
