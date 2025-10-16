function makeAllCaps(array) {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {
      const uppercased = array.map((word) => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items in the array are strings!");
    }
  });
}

function sortWords(array) {
  return new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string" && array.length > 4)) {
      const sorted = array.sort();
      resolve(sorted);
    } else {
      if (array.length <= 4) {
        reject("Error: Array length is less than or equal to 4!");
      }
      reject("Error: Not all items in the array are strings!");
    }
  });
}
// Test cases
//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// exercise 3

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs(morseCode) {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morseCode);
      resolve(morseObj);
    } catch (error) {
      reject("Error: Invalid JSON string!");
    }
  });
}
function toMorse(morseObj) {
  return new Promise((resolve, reject) => {
    const message = prompt("Enter a message to convert to Morse code:");
    if (message) {
      const morseMessage = message
        .toLowerCase()
        .split("")
        .map(
          (char) =>
            morseObj[char] ||
            reject(`Error: Character "${char}" is not in Morse code mapping!`)
        );
      resolve(morseMessage);
    } else {
      reject("Error: No message provided!");
    }
  });
}

function joinWords(morseArray) {
  document.getElementById("morse").innerText = morseArray.join("\n");
}

toJs(morse)
  .then((morseObj) => toMorse(morseObj))
  .then((morseArray) => joinWords(morseArray))
  .catch((error) => console.log(error));
