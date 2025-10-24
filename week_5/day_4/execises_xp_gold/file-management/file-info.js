const path = require('path');
const fs = require('fs');

function displayFileInfo() {
    const filePath = path.join(__dirname, 'data', 'example.txt');
    const exists = fs.existsSync(filePath);
    console.log('File exists:', exists);
    if (exists) {
        const stats = fs.statSync(filePath);
        console.log('File size:', stats.size, 'bytes');
        console.log('Creation time:', stats.birthtime);
    }
}

module.exports = { displayFileInfo };