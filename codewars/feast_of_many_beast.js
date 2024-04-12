// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Steps: 

// 1. Find a way to get first and last letters of a String

// 2. do it for both beast and dish strings 

// 3. compare both sets to make sure they're equal or not.

// const string = "baby";

// let first = string.charAt(0);
// let last = string.charAt(string.length-1);

// console.log(first+last)


function feast(beast, dish) {

  //getting the first and last characters of beast's name
  let bFirst = beast.charAt(0);
  let bLast = beast.charAt(beast.length-1);

  //getting first and last characters of dish name
  let dFirst = dish.charAt(0);
  let dLast = dish.charAt(dish.length-1);

  //comparing first and last letters of beast's name vs dish's name.
  return (bFirst + bLast == dFirst + dLast) ? true : false;
  }


// BEST SOLUTION

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}