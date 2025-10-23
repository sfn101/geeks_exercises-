const _ = require("lodash");
const math = require("./math");

console.log("Add:", math.add(5, 3));
console.log("Multiply:", math.multiply(4, 2));
console.log("Lodash sum:", _.sum([1, 2, 3, 4]));
