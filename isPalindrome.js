// function StringChallenge(str) { 

//     const challengeToken = 'zxghn5wfve72';
//     let arrayFromStr = str.split('');
   
//      // If given string is alreay a palindrome
//     if (str === arrayFromStr.reverse().join('')) {
//       return str
//     };
   
//     //Looping through each pair of adjacent letters
//     //  for (let i = 0; i < arrayFromStr.length - 1; i++) {
//     //    //Swaps the adjacent letters
//     //    [arrayFromStr[i], arrayFromStr[i + 1]] = [arrayFromStr[i + 1], arrayFromStr[i]];
   
//     //    //Checks for palindrome
//     //    if (arrayFromStr.join('') === arrayFromStr.reverse().join('')) {
//     //      return arrayFromStr.join('');
//     //      const newPalindrome = arrayFromStr.join('');
   
//     //      //Functiont to combine 
//     //      const insterpersed = (a, b) => {
//     //        const firstWord = a.split('');
//     //        const secondWord = b.split('');
//     //        let combinedWord = '';
   
//     //        //combining both words
//     //        for (let i = 0; i < firstWord.length || i < secondWord.length; i++) {
//     //          if (i < firstWord.length) {
//     //            combinedWord += firstWord[i];
//     //          };
//     //          if (i < secondWord.length) {
//     //            combinedWord += secondWord[i]
//     //          };
//     //        };
//     //        return combinedWord;
//     //      }
         
//     //    return interpersed(newPalindrome, challengeToken) 
         
//     //    };
//     //  };
     
// //    return "-1"
//    };

//    console.log(StringChallenge('kyaak'))

function StringChallenge(str) {
    let chars = str.split('');
    let isPalindrome = true;
    
    for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
      if (chars[i] !== chars[j]) {
        isPalindrome = false;
        break;
      }
    }
    
    if (isPalindrome) {
      return str;
    }
    
    for (let i = 0; i < chars.length - 1; i++) {
      for (let j = i + 1; j < chars.length; j++) {
        [chars[i], chars[j]] = [chars[j], chars[i]];
        if (chars.join('') === chars.reverse().join('')) {
          return chars.join('');
        }
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
    }
    
    return "-1";
  }

  console.log(StringChallenge('rcaecar'))