// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

export const verifySum = (inputValue: string, expectedSum: string) => {
  let inputValusList = inputValue.split(",").map((x) => +x);
  return checkSum(inputValusList, +expectedSum);
};

const checkSum = (inputValues: number[], expectedSum: number): Boolean => {
  if (!(Array.isArray(inputValues) && inputValues.length)) return false;
  else {
    if (inputValues.length < 2) return false;
    else if (calcForListHead(inputValues[0], inputValues.slice(1), expectedSum))
      return true;
    else return checkSum(inputValues.slice(1), expectedSum);
  }
};

const calcForListHead = (
  head: number,
  lst: number[],
  expectedSum: number
): Boolean => {
  if (!(Array.isArray(lst) && lst.length)) return false;
  else {
    if (head + lst[0] === expectedSum) return true;
    else return calcForListHead(head, lst.slice(1), expectedSum);
  }
};
