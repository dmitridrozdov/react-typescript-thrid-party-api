function getMap(arr) {
  return arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  const magazMap = getMap(magazine);
  const noteMap = getMap(note);
  for (const key of noteMap.keys()) {
    if (magazMap.get(key) == undefined) return "No";
    if (noteMap.get(key) > magazMap.get(key)) return "No";
  }
  return "Yes";
}

let magazine = ["give", "me", "one", "grand", "today", "night", "give"];
let note = ["give", "one", "grand", "today", "give"];

let result = checkMagazine(magazine, note);
console.log(result);

// console.info([...map.keys()]);
// console.info([...map.values()]);
// console.info([...map.entries()]);

// console.info(map.get("give"));
