// 2진수 8진수 https://www.acmicpc.net/problem/1373

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/1373/input.txt")
  .toString()
  .split("\n");

/*
❌ input 2진수의 길이는 1,000,000이므로 js의 Number 타입으로는 표현할 수 없는 범위이기 떄문에 아래처럼 풀 수 없음

const binaryNumber = input[0];
const decimalNumber = parseInt(binaryNumber, 2);
const octalNumber = decimalNumber.toString(8);

console.log(octalNumber);
*/

let binary = input[0]; // 입력된 이진수 문자열
let answer = []; // 변환된 8진수 문자열을 저장할 배열

// 이진수 문자열의 길이가 3의 배수가 되도록 앞에 '0' 추가
while (binary.length % 3 !== 0) {
  binary = "0" + binary;
}

// 3자리씩 끊어서 8진수로 변환
// i를 3씩 증가시키면서 binary 문자열 순회
for (let i = 0; i < binary.length; i += 3) {
  // binary 문자열의 i번째 인덱스부터 i + 3번째 인덱스 직전까지의 부분 문자열을 추출 -> 3개씩 나눠서 추출한다.
  let chunk = binary.substring(i, i + 3);
  // 2진수를 정수로 변환 : parseInt(string, radix) -> 8진수로 변환 : toString(radix)
  let octal = parseInt(chunk, 2).toString(8);
  answer.push(octal); // 변환된 값을 배열에 추가
}

console.log(answer.join("")); // 배열을 문자열로 합쳐서 출력
