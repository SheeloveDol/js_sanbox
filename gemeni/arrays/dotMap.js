// Given an array numbers, write code using .map() to create a new array where each number is increased by 5.

const numbers = [10, 20, 30, 40, 50];
const newNumbersArray = numbers.map((number) => number + 5); // [15, 25, 35, 45, 55]

console.log(newNumbersArray);


//You have an array mixedItems with numbers and strings. Use .filter() to create a new array containing only the numbers.

const mixedItems = ['June', 6, 'July', 7, 'August', 8, 'September', 9];

const arrayOfNumbersOnly = mixedItems.filter((item) => typeof item === 'number');

console.log(`An exclusive list of numbers: ${arrayOfNumbersOnly}`); // [6, 7, 8, 9]


//Imagine an array scores representing test scores. Use .reduce() to calculate the class average.

const scores = [80, 85, 90, 95, 100, 83, 72, 64, 58, 90];

const averageScore = scores.reduce((total, score) => total + score / scores.length, 0);

console.log(`The average score is: ${averageScore}`); // 81.7

