// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

/* 
1: check that both 'n' and 'm' are greater than zero, if not, return zero

2: multiply values for both 'n' and 'm' and return result
*/

const paperwork = (n, m) => {
   return (n < 0 || m < 0) ? 0 : n*m;
}

console.log(paperwork(0, 23))