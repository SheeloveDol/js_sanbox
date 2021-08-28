function findMultiples(integer, limit) {
  let answer = [];
  for (let i = integer; i <= limit; i+=integer) {
    answer.push(i);

    return answer;
  }
}

console.log(findMultiples(5, 20));