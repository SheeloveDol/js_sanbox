// Setting up tester arrays
let ascending = [1, 2, 3, 4, 5];
let descending = [10, 9, 8, 7, 6];
let random = [11, 13, 12, 15, 14];

const sorted = array => {
  let up = array.filter((e, i, arr) => e > arr[i + 1]).length == 0;
  let down = array.filter((e, i, arr) => e < arr[i + 1]).length == 0;
  
  return up ? 'Yes, ascending' : down ? 'Yes, descending' : 'no';

}



console.log(sorted(ascending));
console.log(sorted(descending))

console.log(sorted(random))

// let test = random.sort((a, b) => a - b)
// console.log(test)
// console.log(random)


// Testing out the filter method to better understand how to solve this.

// let test = random.filter(el => el > 11).length == 0;
// console.log(test)