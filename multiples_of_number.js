function findMultiples(integer, limit) {
  let answer = [];
  for (let i = integer; i <= limit; i+=integer) {
    answer.push(i);

    return answer;
  }
}

console.log(findMultiples(5, 20));
console.log(findMultiples(5, 200));
console.log(findMultiples(3, 27))