// Exercise 1

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

// Sum using a loop
let sumLoop = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === "dog") {
    sumLoop += data[i].age * 7;
  }
}
console.log("Sum with loop:", sumLoop); // Output: 154

// Sum using the reduce() method
const sumReduce = data.reduce((accumulator, animal) => {
  if (animal.type === "dog") {
    return accumulator + animal.age * 7;
  }
  return accumulator;
}, 0);
console.log("Sum with reduce:", sumReduce); // Output: 154

// Exercise 2
const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
const trimmedEmail = userEmail3.trim();
console.log(trimmedEmail); // Output: "cannotfillemailformcorrectly@gmail.com"

// Exercise 3

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// Change the structure of the users array
const usersObject = {};

for (const user of users) {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
}

console.log(usersObject);

// Exercise 4

const letters = ["x", "y", "z", "z"];

// Count using a for loop
const letterCountLoop = {};
for (const letter of letters) {
  if (letterCountLoop[letter]) {
    letterCountLoop[letter]++;
  } else {
    letterCountLoop[letter] = 1;
  }
}
console.log("Using a for loop:", letterCountLoop);

// Count using the reduce() method
const letterCountReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log("Using reduce():", letterCountReduce);
