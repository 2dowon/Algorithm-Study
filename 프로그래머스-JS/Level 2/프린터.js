// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let answer = 0;
  let readyToReturn = false;

  let queue = [];

  priorities.forEach((priority, index) => {
    queue.push({ key: priority, checked: index === location });
  });

  while (queue.length && !readyToReturn) {
    const maxValueInQueue = Math.max(...queue.map((q) => q.key));

    if (maxValueInQueue > queue[0].key) {
      queue.push(queue[0]);
      queue.shift();
    } else {
      if (queue[0].checked) {
        readyToReturn = true;
      }
      queue.shift();
      answer += 1;
    }
  }

  return answer;
}

// 다른 사람 풀이
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
