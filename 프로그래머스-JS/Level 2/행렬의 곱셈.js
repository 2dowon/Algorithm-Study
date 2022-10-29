// https://school.programmers.co.kr/learn/courses/30/lessons/12949

// 풀이 1
function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      for (let k = 0; k < arr2.length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }
      result.push(elem);
    }
    answer.push(result);
  }
  return answer;
}

// 풀이2
function solution(arr1, arr2) {
  return arr1.map(function (row) {
    return row.map(function (_, i) {
      return row.reduce(function (sum, cell, j) {
        return sum + cell * arr2[j][i];
      }, 0);
    });
  });
}
