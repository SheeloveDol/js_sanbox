// To take an array of string names and return only those names that are four letters long

const names = ['James', 'Jackenson', 'Junior', 'Etienne', 'Jean-luc', 'Samuel', 'Herby', 'Mike', 'Stan', 'Gabe']

function friends(person) {
  return person.filter(name => name.length === 4)
}


console.log(friends(names))