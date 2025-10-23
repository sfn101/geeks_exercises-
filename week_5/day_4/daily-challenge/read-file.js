const fs = require('fs');

function readFile() {
  const content = fs.readFileSync('./files/file-data.txt', 'utf8');
  console.log(content);
}

module.exports = readFile;