// let iterativeFunction = function (arr, x) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === x) return true;
//     else if (arr[mid] < x) start = mid + 1;
//     else end = mid - 1;
//   }
//   return false;
// };

function binarySearch(items, value) {
  var firstIndex = 0,
    lastIndex = items.length - 1,
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);

  while (items[middleIndex] != value && firstIndex < lastIndex) {
    if (value < items[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else if (value > items[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }
  return items[middleIndex] != value ? -1 : middleIndex;
}

function doubleSizeShort(arr, b) {
  // Write your code here
  let num = b;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      num *= 2;
    }
  }
  return num;
}

function doubleSize(arr, b) {
  arr.sort();
  let max = arr[arr.length - 1];
  while (b < max + 1) {
    if (binarySearch(arr, b) > -1) {
      b *= 2;
    } //else return num;
  }
  return b;
}

let arr = [2, 5, 4, 6, 8];
let b = 2;

// let result = binarySearch(arr, b);
// console.log(result);

let result1 = doubleSizeShort(arr, b);
console.log(result1);

let result = doubleSize(arr, b);
console.log(result);
