/*
    Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignored any need to sanitize words or add punctiation. No spaces before or after the sentence. 

*/

// 1. create an arrow function that takes an array as argument
// 2. join each item of the array separated by a space.


const smash = (array) => {
    return array.join(' ')
}

console.log(smash(['johny', 'bravo', 'wins']))