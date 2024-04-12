// Given an array numbers, write code using .map() to create a new array where each number is increased by 5.

const numbers = [10, 20, 30, 40, 50];
const newNumbersArray = numbers.map((number) => number + 5); // [15, 25, 35, 45, 55]

console.log(newNumbersArray);

//You have an array mixedItems with numbers and strings. Use .filter() to create a new array containing only the numbers.

const mixedItems = ["June", 6, "July", 7, "August", 8, "September", 9];

const arrayOfNumbersOnly = mixedItems.filter(
  (item) => typeof item === "number"
);

console.log(`An exclusive list of numbers: ${arrayOfNumbersOnly}`); // [6, 7, 8, 9]

//Imagine an array scores representing test scores. Use .reduce() to calculate the class average.

//Could you modify your score-averaging code to first sort the scores from highest to lowest using the .sort() method before calculating the average? (Hint: .sort() takes a comparison function)

const scores = [80, 85, 90, 95, 100, 83, 72, 64, 58, 90];

// Sortes the scores array from highest to lowest before calculating the average
const averageScore = scores
  .sort((a, b) => b - a)
  .reduce((total, score) => total + score / scores.length, 0);

console.log(`The average score is: ${averageScore}`); // 81.7

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
