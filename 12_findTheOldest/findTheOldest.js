const findTheOldest = people => {
    return people.reduce((pa, pb) => {
        return computeAge(pa) > computeAge(pb) ? pa : pb;
    })
};

const computeAge = person => {
  if (!person.yearOfDeath)
    return ((new Date()).getFullYear()) - person.yearOfBirth;
  return person.yearOfDeath - person.yearOfBirth;
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
