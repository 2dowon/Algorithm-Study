// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let failureRateMap = new Map();
  for (let i = 1; i <= N; i++) {
    const numberOfPlayersFailedToClearStage = stages.filter(
      (stage) => stage === i
    ).length;
    const numberOfPlayersArrivedAtStage = stages.filter(
      (stage) => stage >= i
    ).length;

    let failureRate = 0;
    if (numberOfPlayersFailedToClearStage > 0) {
      failureRate =
        numberOfPlayersFailedToClearStage / numberOfPlayersArrivedAtStage;
    }

    failureRateMap.set(i, failureRate);
  }

  const sortedFailureRateMap = new Map(
    Array.from(failureRateMap).sort((a, b) => b[1] - a[1])
  );

  return [...sortedFailureRateMap.keys()];
}

// 다른 사람 풀이
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
