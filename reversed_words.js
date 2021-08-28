// Complete the solution so that it reverses all of the words within the string passed in.


function reverseWords(str){
  
  // split and join with a space in between quotation
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('I want to be great'));


// IMPORTANT to note that using .reverse() permanently mutates the array we get from splitting the string. 



// const naming = "ok yes";

// console.log(naming.split(' ').reverse().join(' '))