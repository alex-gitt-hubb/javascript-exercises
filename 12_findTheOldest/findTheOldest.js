/**
 * @param { {name: string; yearOfBirth: number; yearOfDeath: number|undefined;}[] } people
 */
const findTheOldest = function(people) {
  // found
  let max = {
    age: -1,
    i: -1
  }

  people.forEach((person, i) => {
    const age = (
      (person.yearOfDeath || new Date().getFullYear()) // if still alive
      - person.yearOfBirth
    )

    if(age > max.age)   max = {age, i}
  })

  return people[max.i]
};

// Do not edit below this line
module.exports = findTheOldest;
