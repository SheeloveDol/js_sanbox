const newString = 'Hope I am not here very late';

let split = newString.split('');
console.log(split)

let filtered = split.filter(item => item !== ' ')

console.log(filtered)
//   let ready = item.split('').join('').sort((a, b) => a - b)
//   return ready;
// }

// console.log(sorting(newString))
console.log(' ')

let sorted = filtered.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
console.log(sorted);