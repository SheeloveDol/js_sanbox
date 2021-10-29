// Setting up tester arrays
let ascending = [1, 2, 3, 4, 5];
let descending = [10, 9, 8, 7, 6];
let random = [11, 13, 12, 15, 14];

const sorted = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return 'Yes, ascending'
    } else if (arr[i] > arr[i + 1]) {
      return 'Yes, descending'
    } else {
      return 'No'
    }
  }

}

console.log(sorted(ascending));
console.log(sorted(descending))

console.log(sorted(random))

let test = random.sort((a, b) => a - b)
console.log(test)
console.log(random)