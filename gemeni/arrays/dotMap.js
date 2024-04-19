// Given an array numbers, write code using .map() to create a new array where each number is increased by 5.

const numbers = [10, 20, 30, 40, 50];
const newNumbersArray = numbers.map((number) => number + 5); // [15, 25, 35, 45, 55]

console.log(newNumbersArray);
console.log("");

//You have an array mixedItems with numbers and strings. Use .filter() to create a new array containing only the numbers.

const mixedItems = ["June", 6, "July", 7, "August", 8, "September", 9];

const arrayOfNumbersOnly = mixedItems.filter(
  (item) => typeof item === "number"
);

console.log(`An exclusive list of numbers: ${arrayOfNumbersOnly}`); // [6, 7, 8, 9]
console.log("");

//Imagine an array scores representing test scores. Use .reduce() to calculate the class average.

//Could you modify your score-averaging code to first sort the scores from highest to lowest using the .sort() method before calculating the average? (Hint: .sort() takes a comparison function)

const scores = [80, 85, 90, 95, 100, 83, 72, 64, 58, 90];

// Sortes the scores array from highest to lowest before calculating the average
const averageScore = scores
  .sort((a, b) => b - a)
  .reduce((total, score) => total + score / scores.length, 0);

console.log(`The average score is: ${averageScore}`); // 81.7
console.log("");

/* 
Let's say you have an array of objects, each representing a person:
JavaScript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 17 },
    { name: "David", age: 21 },
    { name: "Eve", age: 19},
    { name: "Frank", age: 22 },
    { name: "Grace", age: 29 },
    { name: "Heidi", age: 16 },
    { name: "Ivan", age: 23 },
    { name: "Judy", age: 28 },
    { name: "Kevin", age: 24 },
    { name: "Linda", age: 20 },
    { name: "Michael", age: 26 },
    { name: "Nancy", age: 27 },
    { name: "Olivia", age: 18 },
    { name: "Pete", age: 31 },
]; 
Use code with caution.
Use .filter() to create a new array containing only people who are of legal drinking age (you can decide what age that is!).
*/

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 17 },
  { name: "David", age: 21 },
  { name: "Eve", age: 19 },
  { name: "Frank", age: 22 },
  { name: "Grace", age: 29 },
  { name: "Heidi", age: 16 },
  { name: "Ivan", age: 23 },
  { name: "Judy", age: 28 },
  { name: "Kevin", age: 24 },
  { name: "Linda", age: 20 },
  { name: "Michael", age: 26 },
  { name: "Nancy", age: 27 },
  { name: "Olivia", age: 18 },
  { name: "Pete", age: 31 },
];

const legalDrinkingAge = 21;

const legalDrinkers = people.filter((person) => person.age >= legalDrinkingAge);

for (person of legalDrinkers) {
  console.log(
    `${person.name} is of legal drinking age at ${person.age} and can drink responsibly.`
  );
}

console.log(legalDrinkers);
console.log("");

/* 
Merging Sorted Arrays

Let's say you have two arrays of numbers, each already sorted in ascending order:

JavaScript
const array1 = [2, 5, 10, 15];
const array2 = [1, 7, 9, 12, 18];
Use code with caution.
Your task: Write a function called mergeSortedArrays(arr1, arr2) that takes these arrays and efficiently combines them into a single array, maintaining the overall ascending order.

Example: mergeSortedArrays(array1, array2) should return [1, 2, 5, 7, 9, 10, 12, 15, 18].

Hint: Consider using two pointers, one for each array, to track your progress.

Let me know how you approach this one!
*/

const array1 = [2, 5, 10, 15];
const array2 = [1, 7, 9, 12, 18];

const array3 = [23, 27, 29, 32];
const array4 = [21, 24, 28, 36, 40, 45, 48];

const mergeSortedArraysMe = (arr1, arr2) => {
  let mergedArrays = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {}
    if (array1[i] < array2[i]) {
      mergedArrays.push(array1[i], array2[i]);
    } else if (array1[i] > array2[i]) {
      mergedArrays.push(array2[i], array1[i]);
    }
  }
  return mergedArrays;
};

console.log(mergeSortedArraysMe(array1, array2));

// ---------Better solution: ------------

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Iterate while either array still has elements
  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      // arr1 has been exhausted
      mergedArray.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      // arr2 has been exhausted
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays(array3, array4));
console.log("");
console.log("");
console.log("");

