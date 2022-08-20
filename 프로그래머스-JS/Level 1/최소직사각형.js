// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  let width = 1; // max
  let height = 1; // min

  sizes.forEach((size) => {
    let min, max;
    if (size[0] > size[1]) {
      max = size[0];
      min = size[1];
    } else {
      max = size[1];
      min = size[0];
    }

    if (max > width) {
      width = max;
    }
    if (min > height) {
      height = min;
    }
  });

  return width * height;
}

// 다른 사람 풀이
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
