// 내풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const stars = [];

  for (let i = 0; i < a; i++) {
    stars.push("*");
  }
  const answer = stars.join("");

  for (let i = 0; i < b; i++) {
    console.log(answer);
  }
});

// 다른 사람 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
