/* 
  1. sort string of words alphabetically from given array.

  2. take first word from newly-sorted array and print it out with 3 '***' between each letters
  ------------------------------------------

  Steps: 
  1. sort array alphabetically.
  2. isolate first item in sorted array and save it new array into a variable. 
  3. loop through new array and add '***' after each item
*/

// const arr = ['hello', "there", "fine", "ast", "mama"];

// let sorted = arr.sort();

// console.log(sorted);

// let firstWord = sorted[0].split('');

// console.log(firstWord);
// const gotIt = [];
// for (let i = 0; i < firstWord.length; i++) {
//     gotIt.push(firstWord[i] + '***') 

// let i = 0;
// do {
//   i++;
//   gotIt.push(firstWord[i] + '***');
// } while (i < firstWord.length);


// }
    // gotIt.join(' ')


// console.log(gotIt.join(''));



const array1 = ['do', 'you', 'really', 'love', 'me', 'baby'];

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

console.log(twoSort(array1));