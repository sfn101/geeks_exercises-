// --- EXERCISE 1

let landscape = function() {

 let result = "";

 let flat = function(x) {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = function(x) {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()

// # Output: ___/''''\____
// * my prediction is based on the function calls and the loops within the functions. the outer function landscape initializes an empty string result, then calls the flat function to add 4 underscores, followed by the mountain function which adds a forward slash, 4 apostrophes, and a backslash, and finally calls the flat function again to add another 4 underscores. The final result is a combination of these characters forming a simple landscape representation.

// --- EXERCISE 2

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// # Output: 13
// * my prediction is based on the concept of closures in JavaScript. The addTo function takes a parameter x and returns another function that takes a parameter y. When addTo(10) is called, it returns a new function that adds 10 to its argument. Therefore, calling addToTen(3) effectively computes 10 + 3, resulting in 13.

// --- EXERCISE 3

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// # Output: 31
// * a other example of closures. The curriedSum function takes a parameter a and returns another function that takes a parameter b 

// --- EXERCISE 4
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// # Output: 17
// * The curriedSum function takes a parameter a and returns another function that takes a parameter b. When curriedSum(5) is called, it returns a new function that adds 5 to its argument. Therefore, calling add5(12) effectively computes 5 + 12, resulting in 17.

// --- EXERCISE 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// # Output: 16
// * The compose function takes two functions f and g as arguments and returns a new function that takes a parameter a. When this new function is called, it first applies g to a, and then applies f to the result of g(a). In this case, compose(add1, add5)(10) first computes add5(10), which is 15, and then computes add1(15), resulting in 16.
