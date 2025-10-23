const { readFile, writeFile } = require("./fileManager");

const content = readFile("./Hello World.txt");
console.log("Read content:", content);

writeFile("./Bye World.txt", "Writing to the file");
console.log("Written to ./Bye World.txt");
