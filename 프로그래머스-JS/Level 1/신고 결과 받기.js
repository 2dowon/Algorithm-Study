// 내 풀이
function solution(id_list, report, k) {
  const userMap = new Map();
  const reportedUserCountMap = new Map();
  const receviedMailCountMap = new Map();

  id_list.map((id) => {
    userMap.set(id, []);
    reportedUserCountMap.set(id, 0);
    receviedMailCountMap.set(id, 0);
  });

  // 유저별 신고한 유저 데이터
  report.map((data) => {
    const userId = data.split(" ")[0];
    const reportedUserId = data.split(" ")[1];

    userMap.set(userId, [...userMap.get(userId), reportedUserId]);
  });

  // 중복 신고 제거
  const refinedUserMap = new Map(
    [...userMap].map(([key, value]) => [key, Array.from(new Set(value))])
  );

  // 유저별 신고받은 횟수
  const reportedUserCount = [...refinedUserMap.values()].map((value) => {
    value.map((v) => {
      reportedUserCountMap.set(v, reportedUserCountMap.get(v) + 1);
    });
  });

  // k번 이상 신고 받은 유저 리스트
  const repotedUserList = [...reportedUserCountMap]
    .filter(([key, value]) => value >= k)
    .map((data) => data[0]);

  // 유저별 처리 메일 받은 횟수
  const receviedMailCount = [...refinedUserMap].map(([key, value]) => {
    value.map((v) => {
      if (repotedUserList.indexOf(v) > -1) {
        receviedMailCountMap.set(key, receviedMailCountMap.get(key) + 1);
      }
    });
  });

  return [...receviedMailCountMap.values()];
}

// 다른 사람 풀이
function solution(id_list, report, k) {
  // 중복 신고 제거
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  // 유저별 신고받은 횟수
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  // 유저별 처리 메일 받은 횟수
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
