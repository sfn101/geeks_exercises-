const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your full name (example: "John Doe"): ', (name) => {
  // The name should contain only letters, one space, first letter of each name uppercased
  const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  if (regex.test(name)) {
    console.log('Valid name');
  } else {
    console.log('Invalid name');
  }
  rl.close();
});