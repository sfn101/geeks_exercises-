const { faker } = require('@faker-js/faker');
const readlineSync = require('readline-sync');

const users = [];

function addFakeUser() {
  users.push({
    name: faker.person.fullName(),
    address: {
      street: faker.location.streetAddress(),
      country: faker.location.country()
    }
  });
}

function addUserFromPrompt() {
  const name = readlineSync.question('Enter your name: ');
  const street = readlineSync.question('Enter your address street: ');
  const country = readlineSync.question('Enter your country: ');
  users.push({
    name,
    address: {
      street,
      country
    }
  });
}

// Add some fake users
addFakeUser();
addFakeUser();
addFakeUser();

console.log('Fake users:');
console.log(users);

// Bonus: addUserFromPrompt() function available for interactive use