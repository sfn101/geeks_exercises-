// Exercise 1

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// * output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// * this is destructuring assignment in one line  you make multeple const from an object

// Exercise 2
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

// Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1
const usersArray = Object.entries(users);
console.log(usersArray);

// Part 2
const modifiedArray = usersArray.map(([user, id]) => {
  return [user, id * 2];
});
console.log(modifiedArray);

// Exercise 4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// ? Question: Analyze the code below. What will be the output?
// # output: object
// * answer: In JavaScript instances of classes are of type 'object'.

// Exercise 5

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
}

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}

// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

// ? Analyze the options below. Which constructor will successfully extend the Dog class?
// * answer: Option 2 is correct because it calls super(name) to initialize the inherited name property from the Dog class before using this to set the size property specific to the Labrador class.

// Exercise 6

// Evaluate these

// [2] === [2] is False
// * Why: When comparing objects (arrays are a type of object), the strict equality operator (===) checks if they are the same object in memory, not if their contents are identical. These are two separate array instances.

// {} === {} is False
// * Why: Same as above, these are two separate object instances in memory.

// ---

// Value of the property number

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // Output: 4
console.log(object3.number); // Output: 4
console.log(object4.number); // Output: 5

// * Why: object2 and object3 are references to object1. When object1's property is changed, the change is reflected in object2 and object3 because they all point to the same object in memory. object4 is a completely separate object.

// ---

// Create a class Animal

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// ---

// Create a class Mammal

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// ---

// Create a farmerCow object

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
