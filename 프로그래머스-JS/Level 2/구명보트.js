// https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript

function solution(people, limit) {
  let numOfSameBoat = 0;
  const sortedPeople = people.sort((a, b) => a - b);
  const lengthOfPeople = sortedPeople.length;

  let a = 0;
  let b = lengthOfPeople - 1;

  while (a < b) {
    if (sortedPeople[a] + sortedPeople[b] <= limit) {
      a += 1;
      numOfSameBoat += 1;
    }
    b -= 1;
  }

  return lengthOfPeople - numOfSameBoat;
}

// 다른 사람 풀이
function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
