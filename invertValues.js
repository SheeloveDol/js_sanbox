// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// You can assume that all values are integers. Do not mutate the input array/list.

/*
1: Make sure that an empty array returns an empty array.

2: Loop through given array and multiply each value by -1 and returns a new array of that.
*/

const invert = (array) => {
    if (array === []) return [];
    return array.map((item) => item * -1)
}

const numbers = [1, 2, -3, 4, -5 ]

console.log(invert())

