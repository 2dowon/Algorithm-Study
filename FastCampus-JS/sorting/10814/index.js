// 나이순 정렬 https://www.acmicpc.net/problem/10814

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("FastCampus-JS/sorting/10814/input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);

const users = [];
for (let i = 0; i < n; i++) {
  const [age, name] = input[i + 1].split(" ");
  users.push({ age: Number(age), name });
}

users.sort((a, b) => a.age - b.age);

for (const user of users) {
  console.log(`${user.age} ${user.name}`);
}
