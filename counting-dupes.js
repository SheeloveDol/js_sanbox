// const newString = 'Hope I am not here very late';

// let split = newString.split('');
// console.log(split)

// let filtered = split.filter(item => item !== ' ')

// console.log(filtered)
// //   let ready = item.split('').join('').sort((a, b) => a - b)
// //   return ready;
// // }

// // console.log(sorting(newString))
// console.log(' ')

// let sorted = filtered.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
// console.log(sorted);

// let newCount = 0

// let lowerCased = sorted.forEach((letter, i) => {
//   console.log(letter.toLowerCase())
//   // if (letter[i] === letter[i + 1]) {
//   //   newCount += 1
  
//   // }

//   // console.log(newCount)
// })
// console.log(lowerCased)
// /* 
//   1. Lopp through the array
//   2. take first element item[i].toLowerCase() compare it item[i + 1].toLowerCase()
//   3. if they are the same, increase count 
// */


// let count = 0

// for (let i = 0; i < sorted.length; i++) {
//   // let count = 0
//   if (sorted[i] === sorted[i + 1]) {
//     count += 1;
//     sorted = sorted.filter(item => item !== sorted[i])
//   }
//   // console.log(sorted)
// }

// console.log(count)

// const lettersArr = ['a', 'b', 'c']

//  const okay = lettersArr.map(letter => console.log(letter.toUpperCase()))


// const a = 'b'

// console.log(a.toUpperCase())
// console.log(lettersArr)
// console.log(okay)

// const mapped = lettersArr.map(a => a.toUpperCase())
// console.log(mapped)


/*
  ---STARTING OVER NOW---

  1. take string and split it.
  2. filter out all the spaces if any
  3. map over the array and make everything lower case
  4. sort the array alphabetically
  5. for loop to compare first index to the next one
    a) if there's a match, increase count, slice all instances of that item from the array
    b) if not, carry on
*/


let count = 0;
const newString = 'Hope i am not too late here';

const array = newString.split('');
// console.log(array)
const spaces = array.filter(a => a !== ' ').map(b => b.toLowerCase()).sort()
console.log(spaces)
const leftOver = []
for (let i = 0; i < spaces.length; i++) {
  if (spaces[i] === spaces[i + 1]) {
    count += 1;
    spaces.filter(l => l === spaces[i])
    
  }
  
  console.log(spaces)
  // console.log(count)
}