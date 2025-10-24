const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
  console.log('Please provide a file path');
  process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log(data);
});