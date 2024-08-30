// 숫자 카드 2 https://www.acmicpc.net/problem/10816

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/binary search/10816/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]); // 숫자 카드의 개수
const numberList = input[1].split(" ").map(Number);
const m = Number(input[2]); // 몇 개 가지고 있는 숫자 카드인지 구해야 할 숫자 카드의 개수
const targetNumberList = input[3].split(" ").map(Number);

const sortedNumberList = numberList.sort((a, b) => a - b);

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
    else start = mid + 1;
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1; // 값이 같다면 최대한 오른쪽으로 이동하기
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

const result = [];
for (targetNumber of targetNumberList) {
  result.push(countByRange(sortedNumberList, targetNumber, targetNumber));
}
console.log(result.join(" "));
