// 1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


/* 
1. 
*/

const word = 'love';



// console.log([...word])



// const wave = str => 
// 	[...str].map((s, i) => 
//       str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
//   ).filter(x => x != str);

const wave = str => 
    [... str].map((s, i) => 
        str.slice(0, i) + s.toUpperCase() + str.slice(i + 1)
    )

    console.log(wave(word))

    console.log(wave('hello'))  

    let arr;