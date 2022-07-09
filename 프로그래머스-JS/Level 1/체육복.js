// 내 풀이
// 테스트 1, 6, 7 에러
function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let sortedReserveList = [...reserve.sort()];
  let sortedLostList = [...lost.sort()];

  // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 경우
  sortedLostList.forEach((id) => {
    const checkIdInReserveList = sortedReserveList.indexOf(id);
    const checkIdInSortedLostList = sortedLostList.indexOf(id);
    if (checkIdInReserveList >= 0) {
      sortedReserveList.splice(checkIdInReserveList, 1);
      sortedLostList.splice(checkIdInSortedLostList, 1);
      answer += 1;
    }
  });

  sortedLostList.forEach((id) => {
    const checkPrevIdInReserveList = sortedReserveList.indexOf(id - 1);
    const checkNextIdInReserveList = sortedReserveList.indexOf(id + 1);
    if (checkPrevIdInReserveList >= 0) {
      sortedReserveList.splice(checkPrevIdInReserveList, 1);
      answer += 1;
    } else if (checkNextIdInReserveList >= 0) {
      sortedReserveList.splice(checkNextIdInReserveList, 1);
      answer += 1;
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}
