// 재귀함수가 뭔가요? https://www.acmicpc.net/problem/17478

const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs
  .readFileSync("BAEKJOON-JS/17478/input.txt")
  .toString()
  .split("\n");

function solution(input) {
  const n = Number(input[0]);

  let answer = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";

  const recursiveFunction = (m) => {
    if (m === 0) {
      let blankText = "";
      for (i = 0; i < n; i++) {
        blankText += "____";
      }

      const text1 = '"재귀함수가 뭔가요?"\n';
      const text2 = '"재귀함수는 자기 자신을 호출하는 함수라네"\n';

      answer += blankText + text1;
      answer += blankText + text2;

      return;
    }

    let blankText = "";
    for (i = 0; i < n - m; i++) {
      blankText += "____";
    }

    const text1 = '"재귀함수가 뭔가요?"\n';
    const text2 =
      '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n';
    const text3 =
      "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n";
    const text4 =
      '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n';

    answer += blankText + text1;
    answer += blankText + text2;
    answer += blankText + text3;
    answer += blankText + text4;

    return recursiveFunction(m - 1);
  };

  const recursiveFunction2 = (k) => {
    const text = "라고 답변하였지.\n";

    let blankText = "";
    for (i = k; i > 0; i--) {
      blankText += "____";
    }

    if (k < 0) {
      return;
    }

    answer += blankText + text;

    return recursiveFunction2(k - 1);
  };

  recursiveFunction(n);
  recursiveFunction2(n);

  return answer;
}

console.log(solution(input));
