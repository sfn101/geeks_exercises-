// Exercise 1

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve(num + " is less than 10");
    } else {
      reject(num + " is greater than or equal to 10");
    }
  });
}

compareToTen(15)
  .then((message) => {
    console.log("Resolved: " + message);
  })
  .catch((message) => {
    console.log("Rejected: " + message);
  });

compareToTen(8)
  .then((message) => {
    console.log("Resolved: " + message);
  })
  .catch((message) => {
    console.log("Rejected: " + message);
  });

// Exercise 2

function selfResolvingPromise() {
  console.log("Starting the promise...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 4 seconds");
    }, 4000);
  });
}

selfResolvingPromise()
  .then((message) => {
    console.log("Resolved: " + message);
  })
  .catch((message) => {
    console.log("Rejected: " + message);
  });

// Exercise 3

const resolvedPromise = Promise.resolve("3");
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then((message) => {
    console.log("Resolved: " + message);
  })
  .catch((message) => {
    console.log("Rejected: " + message);
  });

rejectedPromise
  .then((message) => {
    console.log("Resolved: " + message);
  })
  .catch((message) => {
    console.log("Rejected: " + message);
  });
