/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

// create an empty function with 2 params

let numbers = [1, 4, 6, 9, 13, 15, 16]

function twoSum(arr, target) {

  //filter out all items from arr greater than target
  let newArr = arr.filter(item => item < target);

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes((target - arr[i]))) {
      return
    }
  }

}


// iterate through the array and to find which two items add up to the target number
/* if numbers.includes(target - numbers[i]) -   */


// return the indices of these two items