

function findLargestNumber(arr) {
  let l = arr[0]
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > l) {
      l = arr[i]
    }
  }
  return l;
}

console.log(findLargestNumber([121, 3, 55, 77, 34, 85, 200]));
