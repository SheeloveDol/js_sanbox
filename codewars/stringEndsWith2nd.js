const stringEndsWith2nd = (str, ending) => {
  let sliceFromStr = [...str].slice(- ending.length);
  let arrayFromStr = [...sliceFromStr];
  let arrFromEnding = [...ending];
console.log(arrayFromStr);

// if (arrayFromStr.length !==  arrFromEnding.length) return false;
if (ending === '' && str !== '') {
    return true;
  } else if (str.length < ending.length) { 
    return false;
  }

for (let i = 0; i < arrayFromStr.length; i++) {
    if (arrayFromStr[i] !== arrFromEnding[i]) {
        console.log(arrayFromStr[i], arrFromEnding[i])
            return false;
    };
    


    return true;
}

  
}


console.log(stringEndsWith2nd('good', 'ogood')) // abc



// the simplest solution is to use the built-in method endsWith() which returns a boolean value
// return str.endsWith(ending); <---lol 