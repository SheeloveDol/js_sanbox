const words = ("HELLO again HeLlo");

let  arr = words.split('');

let alt = arr.map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('');

console.log(alt);

// My solution from the page

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  
  let arr = this.split('');
  return arr.map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
} 