// trying to really grasp the power of recursive

function oddArray(arr) {
  let result = [];
  function helperRecursiveFn(arr) {
    if(arr.length === 0) {
      return  // this should just return the array
    } else if(arr[0] % 2 !== 0) {
      result.push(arr[0])
    }
    helperRecursiveFn(arr.slice(1));
  }
  helperRecursiveFn(arr);
  return result;
}

console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))

// console.log(oddArray.slice(1))
console.log(' ')

function repeat(text) {
  let count = 0;
  let formatted = text.toLowerCase().split().sort();
  function looped(text) {
    
  }
}