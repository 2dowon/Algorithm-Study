// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = [];
  let encodingArr = [];

  for (let i = 0; i < n; i++) {
    const encodingRowOnArr1 = arr1[i].toString(2).padStart(n, 0);
    const encodingRowOnArr2 = arr2[i].toString(2).padStart(n, 0);

    const sumArrs = String(+encodingRowOnArr1 + +encodingRowOnArr2).padStart(
      n,
      0
    );
    encodingArr.push(sumArrs);
  }

  encodingArr.forEach((row) => {
    const formatedRow = row
      .replace(/1/gi, "#")
      .replace(/2/gi, "#")
      .replace(/0/gi, " ");
    answer.push(formatedRow);
  });

  return answer;
}
