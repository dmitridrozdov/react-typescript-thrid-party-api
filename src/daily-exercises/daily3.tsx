// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

const findMissedNumber = (inputList: number[]): number => {
  if (inputList.length === 1) return inputList[0] + 1;
  else {
    if (inputList[0] + 1 !== inputList[1] && inputList[0] !== inputList[1])
      return inputList[0] + 1;
    else return findMissedNumber(inputList.slice(1));
  }
};

export const getFirstIntegerByRule = (inputValue: string) => {
  let sortedList = inputValue
    .split(",")
    .map((x) => +x)
    .sort();
  return findMissedNumber(sortedList);
};
