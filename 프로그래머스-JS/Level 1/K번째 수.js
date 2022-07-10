// 내 풀이
function solution(array, commands) {
  var answer = [];

  commands.map((command) => {
    const arrayCopy = [...array];
    const slicedArray = arrayCopy.slice(command[0] - 1, command[1]);
    const sortedArray = slicedArray.sort((a, b) => a - b);
    answer.push(sortedArray[command[2] - 1]);
  });

  return answer;
}

// 다른 사람 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
