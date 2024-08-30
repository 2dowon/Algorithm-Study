// 랜선 자르기 https://www.acmicpc.net/problem/1654

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/binary search/1654/input.txt")
  .toString()
  .split("\n");

// k : 이미 가지고 있는 랜선 수
// n : 필요한 랜선 수
const [k, n] = input[0].split(" ").map(Number);
const heightList = [];
for (let i = 0; i < k; i++) {
  heightList.push(Number(input[i + 1]));
}

let start = 0;
let end = Math.max(...heightList);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0; // mid로 잘랐을 때 얻을 수 있는 랜선 수
  for (height of heightList) {
    total += parseInt(height / mid);
  }

  if (total < n) {
    end = mid - 1; // 랜선의 수가 부족하다면 자르고자 하는 랜선의 길이를 줄여 더 많이 자르기
  } else {
    // 랜선의 수가 충분하다면 자르고자 하는 랜선의 길이를 늘려 덜 자르기
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
