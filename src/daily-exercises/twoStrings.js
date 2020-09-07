function getMap(arr) {
  return arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
}

// Complete the checkMagazine function below.
function twoStrings(s1, s2) {
  const s1Map = getMap(s1.split(""));
  const s2Map = getMap(s2.split(""));
  for (const key of s1Map.keys()) {
    if (s2Map.get(key) != undefined) return "YES";
  }
  return "NO";
}

let s1 = "hi";
let s2 = "world";

let result = twoStrings(s1, s2);
console.log(result);
