const stringEndsWith2nd = (str, ending) => {
  let sliceFromStr = [...str].slice(-2);
  let arrayFromStr = [...sliceFromStr];
  let arrFromEnding = [...ending];
  console.log(arrayFromStr);

  if (arrayFromStr.length !==  arrFromEnding.length) return 'false';

  for (let i = 0; i < arrayFromStr.length; i++) {
    if (arrayFromStr[i] !== arrFromEnding[i]) {
        return 'false';
    };
    
  }

  return 'true'
  ;
}


console.log(stringEndsWith2nd('good', 's')) // abc



/* 
function solution(str, ending){
  let sliceFromStr = [...str].slice(-2);
  let arrayFromStr = [...sliceFromStr]
  let arrayFromEnding = [...ending];
  
  // Checks that both arrays are of equal length, if not then it's false.
  if (arrayFromStr.length !== arrayFromEnding.length) return 'false';
  
  // Checks that each index from both arrays is equal
  for (let i = 0; i < arrayFromStr.length; i++) {
    if (arrayFromStr[i] !== arrayFromEnding[i]) return 'false'
  }
  
  return 'true'
}
*/