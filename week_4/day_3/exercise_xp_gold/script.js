// Exercise 1

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

const user = {
  first: "Elie",
  last: "Schoppik",
  role: "Instructor",
};
console.log(printFullName(user));

// Exercise 2

// Keys and Values
function keysAndValues(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const values = sortedKeys.map((key) => obj[key]);
  return [sortedKeys, values];
}

// Examples
console.log("Exercise: Keys and Values");
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// Exercise 3

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
// ? Question: What will be the output
// # output: 3
// * answer: Both counterOne and counterTwo reference the same object in memory. Therefore, incrementing counterTwo also affects counterOne.
