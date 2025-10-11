// Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Part 1
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Part 2
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

// Exercise 2 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const order = index + 1;
  let suffix;
  switch (order) {
    case 1:
      suffix = ordinal[1];
      break;
    case 2:
      suffix = ordinal[2];
      break;
    case 3:
      suffix = ordinal[3];
      break;
    default:
      suffix = ordinal[0];
  }
  console.log(`${order}${suffix} choice is ${color}.`);
});

// Exercise 3 : Analyzing

// ------1------

// * answer: output: ["bread", "carrot", "potato", "chicken", "apple", "orange"] because the spread operator (...) is used to expand the elements of the vegetables and fruits arrays into the new array result.
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);

// ------2------
// * answer: output: ['U', 'S', 'A'] because the spread operator (...) is used to expand the string "USA" into its individual characters, creating an array of those characters.
const country = "USA";
console.log([...country]);

// ------Bonus------
// * answer: output: [undefined, undefined] because the spread operator (...) is used to expand the array [,,] which contains two empty slots. When expanded, these empty slots are represented as undefined values in the new array.
let newArray = [...[, ,]];
console.log(newArray);

// Exercise 4 : Employees

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1. Create welcome messages
const welcomeEmployees = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeEmployees);

// 2. Filter for Full Stack Residents
const fullStackResidents = users.filter(
  (user) => user.role === "Full Stack Resident"
);
console.log(fullStackResidents);

// 3. Bonus: Get last names of Full Stack Residents
const residentLastNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);
console.log(residentLastNames);

// Exercise 5 : Star Wars

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const sentence = epic.reduce((acc, curr) => `${acc} ${curr}`);
console.log(sentence);

// Exercise 6 : Employees #2

// Exercise 6 : Employees #2

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// 1. Filter for students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);


// 2. Bonus: Congratulate the students who passed
students
    .filter(student => student.isPassed)
    .forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}.`);
    });


