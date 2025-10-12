// Exercise 1

[1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
});

// ? Analyze this code, what will be the output ?
// * answer: output: [2, 4, 6] because the map function iterates over each element in the array [1, 2, 3], checks if the element is of type "number" (which they all are), and then multiplies each number by 2, returning a new array with the results.

// Exercise 2

[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

// ? Analyze this code, what will be the output ?
// * answer: output: [1, 2, 0, 1, 2, 3] because the reduce function starts with the initial accumulator value of [1, 2] and then concatenates each sub-array ([0, 1] and [2, 3]) to this accumulator, resulting in a single flattened array.

// Exercise 3

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

// ? Analyze this code, value of i ?
// * answer: value of i is the index of the current element in the array being processed by the map function.

// Exercise 4

// Exercise 1
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const flattenedArray = array.flat(2);
console.log(flattenedArray);

const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
const joinedGreeting = greeting.map((arr) => arr.join(" "));
console.log(joinedGreeting);

const greetingString = joinedGreeting.join(" ");
console.log(greetingString);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const freeNumber = trapped.flat(Infinity);
console.log(freeNumber);
