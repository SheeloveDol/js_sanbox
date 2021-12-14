// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements. 

// For example: 
// unique_in_order('AAAABBBBCCCDAABBB') --> ['A', 'B', 'C', 'D', 'A', 'B'];
// unique_in_order('ABBCcAD') --> ['A', 'B', 'C', 'c', 'A', 'D'];
// unique_in_order(1,2,2,3,3) --> [1, 2, 3]

function unique_in_order(string) {
  let transform = string.split().filter((item, pos, arr) => {
    return arr.indexOf(item) == pos;
  }
}

console.log(unique_in_order('AABBBCCCDDDdFF'))