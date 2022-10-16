// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  var answer = 0;

  let cacheList = [];

  cities.forEach((city) => {
    const cityName = city.toLowerCase();
    if (cacheList.includes(cityName)) {
      answer += 1;

      const indexOfCity = cacheList.indexOf(cityName);
      cacheList1 = cacheList.slice(0, indexOfCity);
      cacheList2 = cacheList.slice(indexOfCity + 1, cacheList.length);
      cacheList = [];
      cacheList.push(cityName);
      cacheList.push(...cacheList1);
      cacheList.push(...cacheList2);
    } else {
      answer += 5;

      cacheList = [cityName, ...cacheList];
      if (cacheList.length >= cacheSize) {
        cacheList = cacheList.slice(0, cacheSize);
      }
    }
  });

  return answer;
}

// 다른 사람 풀이 1
function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];

  cities.forEach((city) => {
    city = city.toUpperCase();

    let idx = cache.indexOf(city);

    if (idx > -1) {
      cache.splice(idx, 1);
      answer += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }

    cache.push(city);
  });

  return answer;
}

// 다른 사람 풀이 2
function solution(cacheSize, cities) {
  const map = new Map();
  const cacheHit = (city, map) => {
    map.delete(city);
    map.set(city, city);
    return 1;
  };
  const cacheMiss = (city, map, size) => {
    if (size === 0) return 5;
    map.size === size && map.delete(map.keys().next().value);
    map.set(city, city);
    return 5;
  };
  const getTimeCache = (city, map, size) =>
    (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(
      city.toLocaleLowerCase(),
      map,
      size
    );
  return cities
    .map((city) => getTimeCache(city.toLocaleLowerCase(), map, cacheSize))
    .reduce((a, c) => a + c, 0);
}
