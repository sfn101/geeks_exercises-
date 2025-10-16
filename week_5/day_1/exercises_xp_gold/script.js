// Exercise 1

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});
// expected output: Array [3, 42, "foo"]

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error("One of the promises rejected: ", error);
  });
// * this promise.all work because promise1 and promise3 are promises with resolve values, and promise2 is a regular value which is treated as a resolved promise.

// Exercise 2

function timesTwoAsync(x) {
  return new Promise((resolve) => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr).then((result) => {
  console.log(result);
});
// output: [2, 4, 6]
// * this promise.all work because timesTwoAsync returns a promise for each element in the array, and Promise.all waits for all of them to resolve before returning the final array of results.
