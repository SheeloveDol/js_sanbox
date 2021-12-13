/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument(also a string)

Example:
solution('abc', 'bc') --> returns true
solution('abc', 'f') --> returns false
*/

function solution(str, end) {
  return str.endsWith(end)
}

console.log(solution('hello', 'llo'))