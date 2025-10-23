import { people } from "./data.js";

function averageAge(array) {
  const totalAge = array.reduce((sum, person) => sum + person.age, 0);
  return Math.round(totalAge / array.length);
}

console.log(`The average age is: ${averageAge(people)}`);
