function StringChallenge(sen) { 
    //This is using regex to filter out numbers and special characters from the string and then splitting it by space
    const arrayFromString = sen.replace(/[^a-zA-z ]/g, '').split(" ");
  
    // Sorting the array to find the longest word
    const sortedArray = arrayFromString.sort((a, b) => b.length - a.length);
    const longestWord = sortedArray[0];
    
    //Interpersing longest word with challengeToken
    const challengeToken = 'xzghn5wfve72'
  
    const interpersed = (a, b) => {
      const firstWord = a.split("");
      const secondWord = b.split("");
      let combinedWord = ''
      
      //looping through both strings to combine them
      for (let i = 0; i < firstWord.length || i < secondWord.length; i++) {
        if (i < firstWord.length) {
          combinedWord += firstWord[i];
        };
        if (i < secondWord.length) {
          combinedWord += secondWord[i]
        };
      };
      return combinedWord;
    };
    // code goes here  
    return interpersed(longestWord, challengeToken) 
  
  }

  console.log(StringChallenge('Just127 test194ing *&^%740this oneLongWord'))