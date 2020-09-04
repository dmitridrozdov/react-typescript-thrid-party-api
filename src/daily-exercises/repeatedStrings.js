function repeatedStringMy(s, n) {
  let coeff = Math.floor(n / s.length);
  // let firstLetter = s.charAt(0);
  let firstLetter = "a";
  let occurences = (s.match(new RegExp(firstLetter, "g")) || []).length;
  let fullOccurs = occurences * coeff;
  let restCharsN = n - s.length * coeff;
  let resuOccurs = (
    s.slice(0, restCharsN).match(new RegExp(firstLetter, "g")) || []
  ).length;
  return fullOccurs + resuOccurs;
}

function repeatedString(s, n) {
  const min = 1;
  const maxs = 100;
  const maxn = 1000000000000;
  let as = s.split("").filter((i) => i === "a").length;
  if (
    typeof s === "string" &&
    s.length >= min &&
    s.length <= maxs &&
    n === parseInt(n, 0) &&
    n >= min &&
    n <= maxn
  ) {
    as =
      parseInt(n / s.length, 0) * as +
      s
        .slice(0, n % s.length)
        .split("")
        .filter((i) => i === "a").length;
  }
  return as;
}

String.prototype.countCharacter = function (char) {
  return [...this].filter((c) => c === char).length;
};

function repeatedString1(s, n) {
  const l = s.length,
    repeatsRequired = Math.ceil(n / l),
    charsRequired = repeatsRequired * l,
    numCharsInLastRepeat = l - (charsRequired % n);

  const a_s = s.countCharacter("a"),
    a_r = s.slice(0, numCharsInLastRepeat).countCharacter("a");

  return a_s * (repeatsRequired - 1) + a_r;
}

// let s = "a";
// let result = repeatedStringMy(s, 1000000000000);

let s = "ceebbcb";
let n = 817723;

// let s = "aeebbcb";
// let n = 817723;

let result = repeatedStringMy(s, n);
console.log(result);

let resultCorrect = repeatedString(s, n);
console.log(resultCorrect);

let result1 = repeatedString1(s, n);
console.log(result1);
