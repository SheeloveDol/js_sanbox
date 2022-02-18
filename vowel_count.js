// console.log(Array.from('abcde'))

// function vowelCount(string) {
//   let count = 0;
//   let vowels = Array.from('aeiou');
//   vowels.forEach(i => {
//     if (string.includes(i)) {
//       count += 1;
//     }
//   });
  
//   console.log(count);

// };

// vowelCount('Sheelove')

    function vowelCount(string) {
    let count = 0;
    let vowels = 'aeiou';
    let array = string.split('');
    array.forEach(item => {
        if (vowels.includes(item)){
            count += 1;
            }
        })
    
    console.log(count) ;
    }

    vowelCount('sheelove dol and Joanne and Gabriel')