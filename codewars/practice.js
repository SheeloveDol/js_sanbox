


// const numbers = [5, 8, 9, 6, 3, 7, 4, 10]

// function sortArray(array) {
//   var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
//   return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
// }

// console.log(sortArray(numbers))


// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers.shift())
// }

/* 
  1: Log each entries
*/


// var number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

const numbers = [19, 5, 42, 2, 77] 

// const sortedArray = numArray.sort((a, b) => a - b)

// console.log(sortedArray[0] + sortedArray[1])

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  const sorted = numbers.sort((a, b) => a - b)
  return sorted[0] + sorted[1]
}

console.log(sumTwoSmallestNumbers(numbers));